import { formatDate, getAllPosts } from "./posts";

export const metadata = {
  title: "Deepanshu Mody | Blog",
  description: "Writing on LLM systems, retrieval, and applied ML."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="page">
      <header className="nav">
        <div className="brand">Deepanshu Mody</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/application">Application</a>
          <a href="/blog">Blog</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="blog-hero">
          <span className="badge">Blog</span>
          <h1>Notes on LLMs, retrieval, and evaluation.</h1>
          <p>
            Short, practical writeups on building reliable ML systems, with a focus on
            data, tooling, and real world deployment constraints.
          </p>
        </section>

        <section className="section">
          <div className="section-title">
            <h2>Latest posts</h2>
            <p>Recent writing on LLM engineering and research workflows.</p>
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.slug} className="card post-card">
                <div className="post-meta">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="post-title">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="post-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="post-link" href={`/blog/${post.slug}`}>
                  Read article
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Built with Next.js and deployed on Vercel.</span>
      </footer>
    </div>
  );
}
