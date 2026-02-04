import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/blog.css'
import './Blog.css'

function Blog() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        // Import all markdown files from the blogs directory
        const blogModules = import.meta.glob('../blogs/*.md', { as: 'raw' })

        const loadBlogs = async () => {
            const blogList = []

            for (const path in blogModules) {
                const content = await blogModules[path]()
                const filename = path.split('/').pop().replace('.md', '')

                // Extract metadata and preview from markdown
                const lines = content.split('\n')
                let title = filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
                let date = new Date().toLocaleDateString()
                let tags = []
                let contentStart = 0

                // Parse frontmatter if exists
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

                // Get preview text (first 120-150 words)
                const contentLines = lines.slice(contentStart).filter(line => line.trim() !== '')
                const previewText = contentLines
                    .join(' ')
                    .replace(/#+\s/g, '') // Remove markdown headers
                    .replace(/\*\*/g, '') // Remove bold
                    .replace(/\*/g, '') // Remove italic
                    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links but keep text
                    .split(' ')
                    .slice(0, 30)
                    .join(' ') + '...'

                blogList.push({
                    slug: filename,
                    title,
                    date,
                    tags,
                    preview: previewText
                })
            }

            // Sort by date (newest first)
            blogList.sort((a, b) => new Date(b.date) - new Date(a.date))
            setBlogs(blogList)
        }

        loadBlogs()
    }, [])

    return (
        <div className="blog-page">
            <header className="blog-header">
                <div className="container">
                    <Link to="/" className="back-link">← Back to Portfolio</Link>
                    <h1 className="highlight-tape">My Blog</h1>
                    <p className="blog-intro">
                        Thoughts, tutorials, and experiences from my coding journey
                    </p>
                </div>
            </header>

            <main className="blog-list-main">
                <div className="container">
                    {blogs.length === 0 ? (
                        <div className="no-blogs">
                            <p className="handwritten">No blog posts yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="blog-list">
                            {blogs.map((blog) => (
                                <article key={blog.slug} className="blog-preview">
                                    <h2>
                                        <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                    </h2>

                                    <div className="blog-meta">
                                        <span className="blog-date">{blog.date}</span>
                                        {blog.tags.length > 0 && (
                                            <div className="blog-tags">
                                                {blog.tags.map((tag, idx) => (
                                                    <span key={idx} className="tag">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <p className="blog-preview-excerpt">{blog.preview}</p>

                                    <Link to={`/blog/${blog.slug}`} className="read-more">
                                        Read more
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Blog
