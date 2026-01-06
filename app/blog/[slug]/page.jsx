import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost } from "../posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    return {
      title: "Post not found | Deepanshu Mody"
    };
  }

  return {
    title: `${post.title} | Deepanshu Mody`,
    description: post.excerpt
  };
}

const renderSection = (section, index) => {
  const key = `${section.type}-${index}`;

  if (section.type === "h2") {
    return <h2 key={key}>{section.text}</h2>;
  }

  if (section.type === "ul") {
    return (
      <ul key={key}>
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (section.href) {
    return (
      <p key={key}>
        <a href={section.href} target="_blank" rel="noreferrer">
          {section.text}
        </a>
      </p>
    );
  }

  return <p key={key}>{section.text}</p>;
};

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

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
        <article className="post">
          <header className="post-header">
            <a className="back-link" href="/blog">
              &larr; Back to blog
            </a>
            <h1>{post.title}</h1>
            <div className="post-meta-row">
              <span>{formatDate(post.date)}</span>
              <span className="meta-divider">|</span>
              <span>{post.readingTime}</span>
            </div>
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="post-tag">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="post-body">
            {post.sections.map((section, index) => renderSection(section, index))}
          </div>

          <div className="post-footer">
            <a className="btn ghost" href="/blog">
              Browse all posts
            </a>
            <a className="btn primary" href="/#contact">
              Work with me
            </a>
          </div>
        </article>
      </main>

      <footer className="footer">
        <span>Built with Next.js and deployed on Vercel.</span>
      </footer>
    </div>
  );
}
