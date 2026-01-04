import Image from "next/image";
import profileImage from "./profile.jpeg";

const profile = {
  name: "Deepanshu Mody",
  title: "Stats & AI/ML Intern @ Pfizer | M.S. Data Science @ NYU",
  focus: "LLM systems, applied ML, multimodal research",
  intro:
    "Final-year M.S. Data Science student at NYU with industry experience building LLM-based and agentic AI systems. My research spans ML, transformers, and multimodal models, with interests in retrieval, interpretability and tokenization.",
  location: "New York, NY",
  email: "dm6262@nyu.edu",
  image: profileImage,
  imageAlt: "Portrait of Deepanshu Mody",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/deepanshu-mody-1202921b7" },
    { label: "GitHub", href: "https://github.com/deepanshumody" }
  ]
};

const highlights = [
  {
    label: "Core focus",
    value: "LLMs, applied ML, multimodal AI research"
  },
  {
    label: "Tooling",
    value: "Python, PyTorch, Neo4j, LangGraph, LangChain"
  },
  {
    label: "Collaboration",
    value: "Open to research, internships, and applied ML work"
  }
];

const heroTags = [
  "Agentic AI",
  "RAG systems",
  "Knowledge graphs",
  "Multimodal ML",
  "Model evaluation",
  "Tokenization"
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

const research = [
  {
    role: "Capstone Project (Advisor: Dr. Chris Tanner)",
    org: "Kensho",
    location: "Remote",
    dates: "Sep 2025 - Present",
    details: [
      "Designed and implemented Markov Chain Monte Carlo and Reinforcement Learning approaches for globally optimizing BPE tokenization (entropy + compression objectives) training on the MiniPile corpus."
    ]
  },
  {
    role: "Graduate Research Assistant (Advisor: Dr. Yiqiu Shen)",
    org: "NYU Grossman School of Medicine",
    location: "New York, NY",
    dates: "Apr 2025 - Jun 2025",
    details: [
      "Curated a longitudinal imaging cohort of ~2k abdominal CT scans from ~80k patients with acute pancreatitis, linked to 3-year follow-up data; built a DICOM-to-NIfTI pipeline with automated PHI stripping.",
      "Prototyped a deep-survival model on 80k MRIs that fuses 3-D ResNet radiomics with clinical labs (CRP, BUN) in a Cox/DeepSurv head to predict time-to-chronic progression; pilot C-index 0.81 vs 0.72 for Cox on 5-fold patient splits."
    ]
  },
  {
    role: "Research Intern (Advisor: Dr. Daisuke Kihara)",
    org: "Purdue University",
    location: "West Lafayette, IN",
    dates: "Jun 2022 - Dec 2022",
    details: [
      "Developed two GNNs (GCN, GNN-DTI) for RNA metal-ion binding, gaining +6.2 pp ROC-AUC over a CNN on 6.4k PDB structures.",
      "Built a GPU-accelerated PyG stack on SLURM and a DGL graph-builder that cut preprocessing 5x and streamed 1.1M edges/s, enabling 128-config sweeps overnight."
    ]
  }
];

const publications = [
  {
    title: "Auto Encoders for Communication-Efficient Distributed Learning",
    venue: "AAAI Deployable AI Workshop",
    dates: "2023",
    detail:
      "Proposed a novel method using autoencoders to optimize distributed learning and presented at the workshop."
  },
  {
    title: "Validity of Machine Learning-Based COVID-19 Prediction",
    venue: "PLOS ONE",
    dates: "2025",
    detail:
      "Benchmarked 7 hematology-based prognostic models on 195k patient records across Brazil, Italy, and Western Europe; uncovered ~20% AUROC drop in cross-continental transfer and released an open-source validation toolkit."
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
  "SQL",
  "PyTorch",
  "Neo4j",
  "LangChain",
  "LangGraph",
  "C++",
  "C",
  "Java",
  "Keras",
  "Django",
  "Flask",
  "AWS",
  "Azure",
  "Git",
  "LaTeX"
];

export default function Home() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">{profile.name}</div>
        <nav className="nav-links">
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <div className="badge">{profile.title}</div>
            <h1>
              Building LLM-based and agentic AI systems.
            </h1>
            <p className="lede">{profile.intro}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#research">
                Explore research
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
                  sizes="(max-width: 720px) 160px, 200px"
                  priority
                />
              </div>
              
              <p>
                Building LLM agentic workflows and retrieval systems.
              </p>
              <div className="mini-grid">
                <div>
                  <span className="mini-label">Focus</span>
                  <span className="mini-value">Agentic LLM systems</span>
                </div>
                
                <div>
                  <span className="mini-label">Domains</span>
                  <span className="mini-value">Healthcare + enterprise data</span>
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

        <section id="research" className="section">
          <div className="section-title">
            <h2>Research</h2>
            <p>Academic and capstone work spanning tokenization, imaging, and GNNs.</p>
          </div>
          <div className="timeline">
            {research.map((item) => (
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

        <section id="experience" className="section">
          <div className="section-title">
            <h2>Experience</h2>
            <p>Industry roles focused on applied ML, retrieval systems, and systems work.</p>
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

        <section id="publications" className="section">
          <div className="section-title">
            <h2>Publications & talks</h2>
            <p>Selected publications and workshop presentations.</p>
          </div>
          <div className="timeline">
            {publications.map((item) => (
              <article key={item.title} className="timeline-item">
                <div className="timeline-year">{item.dates}</div>
                <div className="timeline-body">
                  <div className="card-header">
                    <h3>{item.title}</h3>
                    <span className="meta-line">{item.venue}</span>
                  </div>
                  <p className="detail-text">{item.detail}</p>
                </div>
              </article>
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

        <section id="contact" className="section">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Let's discuss research, collaboration, or ML engineering roles.</p>
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
            </div>
            <div className="contact-aside">
              <h3>Research interests</h3>
              <ul>
                <li>LLM systems, agentic workflows, and evaluation</li>
                <li>Retrieval, knowledge graphs, and data products</li>
                <li>Multimodal ML in healthcare and interpretability</li>
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
