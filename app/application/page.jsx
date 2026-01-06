import Image from "next/image";
import profileImage from "../profile.jpeg";

export const metadata = {
  title: "Deepanshu Mody | Application",
  description: "Job application profile for Deepanshu Mody."
};

const profile = {
  name: "Deepanshu Mody",
  title: "ML Engineer / Applied Scientist Candidate",
  focus: "LLM systems, RAG, multimodal ML, knowledge graphs",
  intro:
    "Final-year M.S. Data Science student at NYU with industry experience building LLM and retrieval systems. Seeking applied ML roles where I can ship reliable, measurable AI products.",
  location: "New York, NY",
  email: "dm6262@nyu.edu",
  image: profileImage,
  imageAlt: "Portrait of Deepanshu Mody",
  resumeHref: "/resume.pdf",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/deepanshu-mody-1202921b7" },
    { label: "GitHub", href: "https://github.com/deepanshumody" }
  ]
};

const highlights = [
  {
    label: "LLM accuracy",
    value: "92.0 token-level F1 on 1.2k manuals QA"
  },
  {
    label: "Latency",
    value: "p50 <200 ms RAG pipeline on NVIDIA L4"
  },
  {
    label: "Systems impact",
    value: "1.7x GEMM throughput, -34% ResNet-50 latency"
  }
];

const heroTags = [
  "ML Engineer",
  "Applied Scientist",
  "LLM Engineer",
  "RAG systems",
  "Knowledge graphs",
  "Model evaluation"
];

const fitAreas = [
  {
    title: "Product-minded ML",
    detail:
      "Translate research into production workflows with measurable accuracy, latency, and reliability."
  },
  {
    title: "Grounded LLMs",
    detail:
      "Build RAG systems that blend hybrid retrieval, reranking, and knowledge graphs to reduce hallucinations."
  },
  {
    title: "Systems + research",
    detail:
      "Comfortable across GPU-aware optimization, experimentation, and multimodal research pipelines."
  }
];

const experience = [
  {
    role: "Statistics & AI/ML Intern",
    org: "Pfizer",
    location: "Boston, MA",
    dates: "Jun 2025 - Aug 2025",
    details: [
      "Built a LangGraph multi-agent workflow (Gemini Flash, DeepSeek-R1) with end-to-end reasoning and tool use, testing latency, usage, and system reliability.",
      "Extended and productionized the system with a Neo4j knowledge graph for drug-target-indication analytics, modeling evidence-weighted relationships (PageRank, community clustering)."
    ]
  },
  {
    role: "Data Scientist | Software Engineer - Data & AI",
    org: "Incedo Inc.",
    location: "Gurugram, India",
    dates: "Jul 2023 - Jul 2024",
    details: [
      "Built LangChain RAG document QA over 1,200 technical manuals; 92.0 token-level F1 on a held-out test set; p50 <200 ms E2E on a single NVIDIA L4 (24 GB) with INT8 inference; hybrid BM25 + vector + cross-encoder rerank.",
      "Raised Exact Match from 41% to 84% (+43 pp) on a 500-question benchmark via LoRA fine-tuning, RAFT, and hybrid retrieval with an embedding-based reranker."
    ]
  },
  {
    role: "Software Engineering Intern",
    org: "Kinara AI",
    location: "Hyderabad, India",
    dates: "Jan 2023 - Jun 2023",
    details: [
      "Prototyped a RISC-V vector extension and LLVM backend, implementing scatter/gather intrinsics to deliver 1.7x GEMM throughput and -34% ResNet-50 latency in cycle-accurate sims."
    ]
  }
];

const projects = [
  {
    title: "Multi-agent LLM workflow",
    stack: "LangGraph, Gemini Flash, DeepSeek-R1",
    detail:
      "Designed a multi-agent system with tool use, reliability checks, and latency benchmarking for production readiness."
  },
  {
    title: "RAG QA at scale",
    stack: "LangChain, PyTorch, NVIDIA L4",
    detail:
      "Shipped a hybrid retrieval pipeline (BM25 + vectors + cross-encoder) hitting 92.0 token-level F1."
  },
  {
    title: "Knowledge graph analytics",
    stack: "Neo4j, graph algorithms",
    detail:
      "Modeled drug-target-indication evidence with PageRank and community clustering for insight discovery."
  }
];

const education = [
  {
    school: "New York University",
    degree: "M.S., Data Science",
    location: "New York, NY",
    dates: "Aug 2024 - May 2026",
    details: [
      "2nd position - AI4Purpose Hackathon",
      "Research Mentor - Roaring Cubs Collective"
    ]
  },
  {
    school: "Birla Institute of Technology and Science, Pilani",
    degree: "B.E., Computer Science; M.S., Biological Sciences (Integrated)",
    location: "Pilani, India",
    dates: "Aug 2018 - Jun 2023",
    details: []
  }
];

const skills = [
  "Python",
  "PyTorch",
  "LangChain",
  "LangGraph",
  "Neo4j",
  "SQL",
  "C++",
  "AWS",
  "Azure",
  "Git",
  "Keras",
  "Django",
  "Flask",
  "Java",
  "LaTeX"
];

export default function ApplicationPage() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">{profile.name}</div>
        <nav className="nav-links">
          <a href="/">Research profile</a>
          <a href="/blog">Blog</a>
          <a href="#fit">Role fit</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <div className="badge">{profile.title}</div>
            <h1>Building production-ready LLM systems.</h1>
            <p className="lede">{profile.intro}</p>
            <div className="hero-actions">
              <a className="btn primary" href={profile.resumeHref} download>
                Download resume
              </a>
              <a className="btn ghost" href={`mailto:${profile.email}`}>
                Contact me
              </a>
            </div>
            <div className="hero-meta">
              <span>{profile.focus}</span>
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <div className="hero-portrait">
                <Image
                  src={profile.image}
                  alt={profile.imageAlt}
                  fill
                  sizes="(max-width: 720px) 200px, 260px"
                  priority
                />
              </div>
              <div className="hero-card-header">
                <h2>Application snapshot</h2>
                <span className="status-pill">Open to roles</span>
              </div>
              <p>
                Seeking ML engineer and applied scientist roles focused on LLM products.
              </p>
              <div className="mini-grid">
                <div>
                  <span className="mini-label">Target roles</span>
                  <span className="mini-value">ML Engineer, Applied Scientist, Data Scientist</span>
                </div>
                <div>
                  <span className="mini-label">Strengths</span>
                  <span className="mini-value">RAG, evals, knowledge graphs</span>
                </div>
              </div>
              <div className="chip-row">
                {heroTags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="stat-row">
          {highlights.map((item) => (
            <div key={item.label} className="stat">
              <span className="stat-label">{item.label}</span>
              <span className="stat-value">{item.value}</span>
            </div>
          ))}
        </section>

        <section id="fit" className="section">
          <div className="section-title">
            <h2>Role fit</h2>
            <p>What I bring to applied ML and AI product teams.</p>
          </div>
          <div className="card-grid">
            {fitAreas.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="detail-text">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-title">
            <h2>Experience</h2>
            <p>Industry roles focused on shipping ML products and systems.</p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="timeline-item">
                <div className="timeline-year">{item.dates}</div>
                <div className="timeline-body">
                  <div className="card-header">
                    <h3>{item.role}</h3>
                    <span className="meta-line">
                      {item.org} | {item.location}
                    </span>
                  </div>
                  <ul className="detail-list">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-title">
            <h2>Selected projects</h2>
            <p>Proof of work across LLM systems, retrieval, and graph analytics.</p>
          </div>
          <div className="card-grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <span className="meta-line">{project.stack}</span>
                <p className="detail-text">{project.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-title">
            <h2>Skills</h2>
            <p>Technical stack spanning ML, systems, and deployment.</p>
          </div>
          <div className="tag-list">
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-title">
            <h2>Education</h2>
            <p>Academic training in data science, computer science, and biology.</p>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <article key={item.school} className="timeline-item">
                <div className="timeline-year">{item.dates}</div>
                <div className="timeline-body">
                  <div className="card-header">
                    <h3>{item.school}</h3>
                    <span className="meta-line">
                      {item.degree} | {item.location}
                    </span>
                  </div>
                  {item.details.length > 0 ? (
                    <ul className="detail-list">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Happy to chat about ML engineering, applied science, or research roles.</p>
          </div>
          <div className="contact">
            <div className="contact-card">
              <div>
                <span className="mini-label">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div>
                <span className="mini-label">Profiles</span>
                <div className="link-row">
                  {profile.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <span className="mini-label">Resume</span>
                <a href={profile.resumeHref} download>
                  Download PDF
                </a>
              </div>
            </div>
            <div className="contact-aside">
              <h3>What I am looking for</h3>
              <ul>
                <li>ML engineer or applied scientist roles building LLM products</li>
                <li>Teams that care about evaluation, latency, and reliability</li>
                <li>Opportunities in healthcare, enterprise data, or tooling</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Built with Next.js and deployed on Vercel.</span>
      </footer>
    </div>
  );
}
