import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import '../styles/blog.css'
import './Blog.css'

function BlogPost() {
    const { slug } = useParams()
    const [content, setContent] = useState('')
    const [metadata, setMetadata] = useState({
        title: '',
        date: '',
        tags: []
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadBlogPost = async () => {
            try {
                setLoading(true)
                // Dynamically import the markdown file
                const blogModule = await import(`../blogs/${slug}.md?raw`)
                const rawContent = blogModule.default

                // Parse frontmatter
                const lines = rawContent.split('\n')
                let title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
                let date = new Date().toLocaleDateString()
                let tags = []
                let contentStart = 0

                if (lines[0] === '---') {
                    let i = 1
                    while (i < lines.length && lines[i] !== '---') {
                        const line = lines[i].trim()
                        if (line.startsWith('title:')) {
                            title = line.replace('title:', '').trim().replace(/['"]/g, '')
                        } else if (line.startsWith('date:')) {
                            date = line.replace('date:', '').trim()
                        } else if (line.startsWith('tags:')) {
                            const tagsStr = line.replace('tags:', '').trim()
                            tags = tagsStr.replace(/[\[\]]/g, '').split(',').map(t => t.trim())
                        }
                        i++
                    }
                    contentStart = i + 1
                }

                setMetadata({ title, date, tags })
                setContent(lines.slice(contentStart).join('\n'))
                setLoading(false)
            } catch (err) {
                console.error('Error loading blog post:', err)
                setError('Blog post not found')
                setLoading(false)
            }
        }

        loadBlogPost()
    }, [slug])

    if (loading) {
        return (
            <div className="blog-page">
                <div className="container">
                    <div className="blog-content">
                        <p className="handwritten">Loading...</p>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="blog-page">
                <div className="container">
                    <div className="blog-content">
                        <h1>404 - Blog Post Not Found</h1>
                        <p>{error}</p>
                        <Link to="/blog" className="btn btn-primary">← Back to Blog</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="blog-page">
            <header className="blog-post-header">
                <div className="container">
                    <Link to="/blog" className="back-link">← Back to Blog</Link>
                </div>
            </header>

            <main className="blog-post-main">
                <article className="blog-content">
                    <h1>{metadata.title}</h1>

                    <div className="blog-meta">
                        <span className="blog-date">{metadata.date}</span>
                        {metadata.tags.length > 0 && (
                            <div className="blog-tags">
                                {metadata.tags.map((tag, idx) => (
                                    <span key={idx} className="tag">{tag}</span>
                                ))}
                            </div>
                        )}
                    </div>

                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}
                    >
                        {content}
                    </ReactMarkdown>
                </article>
            </main>
        </div>
    )
}

export default BlogPost
