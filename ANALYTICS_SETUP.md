# Analytics & SEO Setup Guide

This guide will help you set up analytics and monitoring tools for your portfolio website.

## 📊 Table of Contents

1. [Google Analytics 4](#google-analytics-4)
2. [Microsoft Clarity](#microsoft-clarity)
3. [Google Search Console](#google-search-console)
4. [Open Graph Image](#open-graph-image)
5. [Sitemap & Robots.txt](#sitemap--robotstxt)
6. [Performance Monitoring](#performance-monitoring)

---

## 🔍 Google Analytics 4

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon)
3. Click **Create Property**
4. Enter property name: `Ashish Pal Portfolio`
5. Select timezone and currency
6. Click **Next** → **Create**

### Step 2: Get Measurement ID

1. In Admin → Property → **Data Streams**
2. Click **Add stream** → **Web**
3. Enter your website URL: `https://ashu.devinit.in`
4. Enter stream name: `Portfolio Website`
5. Click **Create stream**
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add to Your Site

In `index.html`, find this section and uncomment it:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID', {
    page_title: 'Ashish Pal Portfolio',
    page_location: 'https://ashu.devinit.in'
  });
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID (e.g., `G-ABC123XYZ`).

### Step 4: Verify Installation

1. Visit your website
2. In GA4, go to **Reports** → **Realtime**
3. You should see yourself as an active user

---

## 👁️ Microsoft Clarity

### Step 1: Create Clarity Project

1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Sign in with Microsoft account
3. Click **Add new project**
4. Enter project name: `Ashish Pal Portfolio`
5. Enter website URL: `https://ashu.devinit.in`
6. Select category: **Personal Website**
7. Click **Add new project**

### Step 2: Get Project ID

1. After creating, you'll see your **Project ID**
2. Copy the ID (format: `abc123def456`)

### Step 3: Add to Your Site

In `index.html`, find this section and uncomment it:

```html
<!-- Microsoft Clarity -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
</script>
```

Replace `CLARITY_PROJECT_ID` with your actual ID.

### Step 4: Verify Installation

1. Visit your website
2. In Clarity dashboard, wait 2-3 minutes
3. You should see recordings starting to appear

---

## 🔎 Google Search Console

### Step 1: Add Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add property**
3. Select **URL prefix**
4. Enter: `https://ashu.devinit.in`
5. Click **Continue**

### Step 2: Verify Ownership

**Method 1: HTML File Upload**
1. Download the verification file
2. Place it in `/public/` folder
3. Deploy your site
4. Click **Verify**

**Method 2: HTML Tag**
1. Copy the meta tag
2. Add to `<head>` in `index.html`
3. Deploy your site
4. Click **Verify**

### Step 3: Submit Sitemap

1. After verification, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**

---

## 🖼️ Open Graph Image

### Create OG Image

1. **Dimensions**: 1200 x 630 pixels
2. **Format**: JPG or PNG
3. **Content**: Your name, title, and a visual element

### Tools to Create:

- [Canva](https://www.canva.com/) - Free templates
- [Figma](https://www.figma.com/) - Design from scratch
- [OG Image Generator](https://og-image.vercel.app/) - Quick generation

### Add to Your Site

1. Save image as `og-image.jpg`
2. Place in `/public/` folder
3. Already configured in `index.html`:

```html
<meta property="og:image" content="https://ashu.devinit.in/og-image.jpg" />
```

### Test Your OG Image

- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 🗺️ Sitemap & Robots.txt

### Create Sitemap

Create `/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ashu.devinit.in/</loc>
    <lastmod>2024-12-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ashu.devinit.in/projects</loc>
    <lastmod>2024-12-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ashu.devinit.in/blog</loc>
    <lastmod>2024-12-15</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

### Create Robots.txt

Create `/public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://ashu.devinit.in/sitemap.xml
```

---

## 📈 Performance Monitoring

### Built-in Core Web Vitals

Your portfolio already monitors:

- **CLS** (Cumulative Layout Shift)
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)

Check browser console for metrics!

### Additional Tools

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Test: `https://ashu.devinit.in`
   - Aim for 90+ score

2. **GTmetrix**
   - URL: https://gtmetrix.com/
   - Provides detailed performance report

3. **WebPageTest**
   - URL: https://www.webpagetest.org/
   - Advanced performance testing

---

## ✅ Post-Deployment Checklist

After deploying your site:

- [ ] Verify Google Analytics is tracking
- [ ] Check Microsoft Clarity recordings
- [ ] Submit sitemap to Google Search Console
- [ ] Test OG image on social media
- [ ] Run PageSpeed Insights test
- [ ] Check all meta tags with [Meta Tags](https://metatags.io/)
- [ ] Verify structured data with [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test mobile responsiveness
- [ ] Check console for errors
- [ ] Try the console CLI (`portfolio.about()`)

---

## 🎯 SEO Best Practices

### Content

- ✅ Unique, descriptive page titles
- ✅ Compelling meta descriptions
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Alt text for all images
- ✅ Internal linking between pages

### Technical

- ✅ Fast loading speed (< 3 seconds)
- ✅ Mobile-friendly design
- ✅ HTTPS enabled
- ✅ Clean URL structure
- ✅ XML sitemap
- ✅ Robots.txt file

### Social

- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Attractive OG image
- ✅ Social media links

---

## 📞 Support

If you need help:

1. Check [Google Analytics Help](https://support.google.com/analytics)
2. Visit [Clarity Documentation](https://docs.microsoft.com/en-us/clarity/)
3. Read [Search Console Help](https://support.google.com/webmasters)

---

## 🚀 Next Steps

1. **Set up analytics** (GA4 + Clarity)
2. **Create OG image**
3. **Submit to Search Console**
4. **Monitor performance**
5. **Optimize based on data**

Good luck with your portfolio! 🎉

---

**Made with ❤️ by Ashish Pal**
