import { useState } from "react";
import { FiArrowDown, FiArrowRight, FiDownload, FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import portrait from "./images/photo_sohail.jpg";
import atWork from "./images/sohail-at-work.jpg";
import awardMoment from "./images/cjss-award-moment.jpg";
import phoenixAward from "./images/cjss-phoenix-award.jpg";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a className="wordmark" href="#top" aria-label="Mohammad Sohail Ahmed, back to top">
          <span className="wordmark-monogram">MS<span>.</span></span>
          <span className="wordmark-name">MOHAMMAD SOHAIL AHMED</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-contact" href="mailto:sohailahmed.mohammad01@gmail.com">Let&apos;s connect <FiArrowRight aria-hidden="true" /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {menuOpen && <nav className="mobile-nav" id="mobile-menu" aria-label="Mobile navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<FiArrowRight aria-hidden="true" /></a>)}
        <a href="/docs/resume.pdf" download onClick={() => setMenuOpen(false)}>Download résumé <FiDownload aria-hidden="true" /></a>
      </nav>}
    </header>
  );
}

function Hero() {
  return <section className="hero shell" id="top">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENGINEER · HYDERABAD, INDIA</div>
      <h1>Building what&apos;s <em>next.</em><br /><em>Engineered</em> to last.</h1>
      <p className="hero-intro">I&apos;m <strong>Mohammad Sohail Ahmed</strong> — a backend engineer turning complex commerce, cloud, and AI challenges into dependable systems.</p>
      <div className="hero-actions">
        <a className="button button-dark" href="#work">Explore my work <FiArrowRight aria-hidden="true" /></a>
        <a className="button button-text" href="/docs/resume.pdf" download>Download résumé <FiDownload aria-hidden="true" /></a>
      </div>
      <a className="scroll-cue" href="#about"><FiArrowDown aria-hidden="true" /> SCROLL TO EXPLORE</a>
    </div>
    <div className="hero-visual">
      <div className="hero-image-frame"><img src={portrait} alt="Portrait of Mohammad Sohail Ahmed" /></div>
      <a className="hero-award-note" href="#recognition"><span aria-hidden="true">✳</span><span><strong>CJSS Phoenix Award</strong><small>RECOGNITION · 2026</small></span><FiArrowRight aria-hidden="true" /></a>
      <div className="hero-photo-caption"><span>01 / PROFILE</span><span>ENGINEERING WITH PURPOSE</span></div>
      <div className="hero-accent" aria-hidden="true" />
    </div>
  </section>;
}

function SectionHeading({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading">
    <div className="section-index"><span>{number}</span><span>{eyebrow}</span></div>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>;
}

function About() {
  return <section className="about-section section-pad" id="about">
    <div className="shell">
      <div className="about-grid">
        <div className="about-photo-wrap">
          <div className="about-photo"><img src={atWork} alt="Mohammad Sohail Ahmed at work" loading="lazy" /></div>
          <div className="about-photo-label"><span>THE PERSON BEHIND THE CODE</span><span>02 / 06</span></div>
        </div>
        <div className="about-content">
          <SectionHeading number="01" eyebrow="ABOUT ME" title="Thoughtful engineering. Tangible impact." />
          <p className="large-copy">I work at the intersection of robust backend architecture and useful new ideas.</p>
          <p>At CJSS Technologies, I build and support enterprise commerce systems for Changi Airport Group. My work spans SAP Commerce Cloud, Java and Spring Boot services, AWS workflows, integrations, and the details that keep production systems reliable.</p>
          <p>Alongside client delivery, I explore applied AI through retrieval-augmented generation, vector search, and multi-agent systems. I value clear thinking, careful execution, and the people who make great work possible.</p>
          <div className="about-tags"><span>BACKEND ENGINEERING</span><span>ENTERPRISE COMMERCE</span><span>APPLIED AI</span></div>
        </div>
      </div>
    </div>
  </section>;
}

const experience = [
  {
    period: "AUG 2026 — PRESENT",
    title: "Software Engineer",
    client: "Changi Airport Group · iShopChangi",
    summary: "Building and enhancing the backend of a large-scale SAP Commerce Cloud platform.",
    details: [
      "Deliver features across catalog, pricing, promotions, orders, customers, and checkout.",
      "Translate requirements into OCC APIs, custom extensions, data models, and commerce processes.",
      "Support search, catalog synchronization, Backoffice operations, troubleshooting, and release validation.",
    ],
    stack: "JAVA  /  SPRING  /  SAP COMMERCE CLOUD  /  SOLR",
  },
  {
    period: "JAN 2024 — JUL 2026",
    title: "Software Engineer",
    client: "Changi Airport Group · TREX Marketplace",
    summary: "Delivered cloud-native services and integrations for core marketplace workflows.",
    details: [
      "Built Spring Boot microservices and REST and GraphQL APIs for products, pricing, orders, and merchant operations.",
      "Developed AWS Lambda and AppSync workflows and Dockerized ECS services backed by DynamoDB and relational data.",
      "Investigated production issues with tracing, Dynatrace, and Datadog; supported reviews and junior engineers.",
    ],
    stack: "SPRING BOOT  /  AWS  /  ECS  /  DYNAMODB",
  },
];

function Experience() {
  return <section className="experience-section section-pad" id="experience">
    <div className="shell">
      <div className="experience-top">
        <SectionHeading number="02" eyebrow="EXPERIENCE" title="Built for the real world." copy="From the first design discussion to production support, I focus on systems that are clear, resilient, and ready to scale." />
        <div className="company-mark"><span className="company-mark-dot" /> CJSS TECHNOLOGIES <span>·</span> HYDERABAD</div>
      </div>
      <div className="experience-list">
        {experience.map((role, index) => <article className="experience-row" key={role.client}>
          <div className="experience-side"><span className="experience-number">0{index + 1}</span><span className="experience-period">{role.period}</span></div>
          <div className="experience-main"><p className="experience-client">{role.client}</p><h3>{role.title}</h3><p className="experience-summary">{role.summary}</p>
            <ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <p className="experience-stack">{role.stack}</p>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}

const work = [
  {
    number: "01",
    label: "INDEPENDENT PROJECT  /  APPLIED AI",
    title: "Multi-Agent RAG Platform",
    description: "An AI assistant architecture that connects document ingestion, embeddings, semantic retrieval, and grounded response generation across specialized agents.",
    detail: "Built with Spring Boot and FastAPI, using Gemini, Qdrant vector search, metadata filtering, and role-based access control.",
    tools: ["SPRING BOOT", "FASTAPI", "QDRANT", "GEMINI"],
  },
  {
    number: "02",
    label: "ENGINEERING PROJECT  /  HEALTHCARE",
    title: "Healthcare Information System",
    description: "A modular backend for patient registration, appointments, billing, pharmacy, laboratory, administration, and audit logging.",
    detail: "Designed relational data models and secure workflows with JWT and role-based access, plus validation and deployment troubleshooting.",
    tools: ["JAVA", "SPRING BOOT", "POSTGRESQL", "JWT / RBAC"],
  },
];

function Work() {
  return <section className="work-section section-pad" id="work">
    <div className="shell">
      <div className="work-top"><SectionHeading number="03" eyebrow="SELECTED WORK" title="Curiosity, put to work." copy="A closer look at the systems and ideas I build beyond day-to-day client delivery." /><span className="work-count">TWO SELECTED PROJECTS</span></div>
      <div className="work-grid">{work.map((project) => <article className="work-card" key={project.number}>
        <div className="work-card-top"><span>{project.label}</span><span className="work-card-number">{project.number}</span></div>
        <div className="work-card-body"><h3>{project.title}</h3><p>{project.description}</p><p className="work-detail">{project.detail}</p></div>
        <div className="work-card-bottom">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
      </article>)}</div>
    </div>
  </section>;
}

function Recognition() {
  return <section className="recognition-section section-pad" id="recognition">
    <div className="shell recognition-grid">
      <div className="recognition-copy">
        <SectionHeading number="04" eyebrow="RECOGNITION" title="A moment of gratitude. A reason to aim higher." />
        <div className="award-line"><span className="award-star">✳</span><span>PHOENIX AWARD <i /> JUNE 2026</span></div>
        <p className="recognition-lead">Alhamdulillah — I&apos;m grateful to receive Best Employee recognition at CJSS Technologies for my contribution to AI innovation and client projects.</p>
        <p>The award reflects the guidance, trust, and collaboration of the leadership, managers, mentors, and teammates I&apos;ve learned from. Every challenge and review has helped me grow as an engineer.</p>
        <p>It motivates me to keep experimenting, learning, and creating meaningful impact for CJSS and its clients.</p>
        <div className="award-credit">MOHAMMAD SOHAIL AHMED <span>·</span> CJSS TECHNOLOGIES</div>
      </div>
      <div className="recognition-photos">
        <figure className="award-main-photo"><img src={phoenixAward} alt="CJSS Technologies Phoenix Award and certificate of excellence awarded to Mohammad Sohail Ahmed" loading="lazy" /><figcaption>THE PHOENIX AWARD · EMPLOYEE OF THE MONTH</figcaption></figure>
        <figure className="award-moment-photo"><div className="award-moment-crop"><img src={awardMoment} alt="Mohammad Sohail Ahmed receiving the CJSS recognition award with colleagues" loading="lazy" /></div><figcaption>A SHARED MOMENT AT CJSS</figcaption></figure>
      </div>
    </div>
  </section>;
}

const capabilities = [
  { number: "01", title: "Backend & commerce", items: "Java · Spring Boot · SAP Commerce Cloud · REST / GraphQL · Microservices" },
  { number: "02", title: "Cloud & data", items: "AWS Lambda · AppSync · ECS · DynamoDB · PostgreSQL · MySQL" },
  { number: "03", title: "Applied AI", items: "RAG · Vector Search · Qdrant · Embeddings · Gemini · Multi-Agent Systems" },
  { number: "04", title: "Delivery & quality", items: "Docker · CI/CD · JUnit · Mockito · Dynatrace · Datadog" },
];

function Expertise() {
  return <section className="expertise-section section-pad" id="expertise"><div className="shell expertise-grid">
    <SectionHeading number="05" eyebrow="EXPERTISE" title="A toolkit shaped by delivery." copy="The technologies I use to turn complex requirements into maintainable software." />
    <div className="capability-list">{capabilities.map((capability) => <div className="capability" key={capability.number}><span>{capability.number}</span><div><h3>{capability.title}</h3><p>{capability.items}</p></div><FiArrowRight aria-hidden="true" /></div>)}</div>
  </div></section>;
}

function Credentials() {
  return <section className="credentials-section"><div className="shell credentials-grid">
    <div className="credentials-intro"><span className="mini-label">EDUCATION & CREDENTIALS</span><h2>Learning never stops.</h2><p>B.Tech in Computer Science & Engineering from IIIT-RGUKT Basar, completed in 2024 with an 8.9/10 GPA.</p></div>
    <div className="credentials-list"><div><span>01 / CERTIFICATION</span><strong>Oracle Certified Associate</strong><p>Java SE 8 Programmer</p></div><div><span>02 / CERTIFICATION</span><strong>AWS Certified Cloud Practitioner</strong><p>Cloud fundamentals and AWS services</p></div><div><span>03 / COURSE</span><strong>Blockchain and Its Applications</strong><p>NPTEL</p></div></div>
  </div></section>;
}

function Contact() {
  return <footer className="contact-section" id="contact"><div className="shell">
    <div className="contact-top"><span>06 / LET&apos;S CONNECT</span><span>HAVE AN IDEA OR OPPORTUNITY?</span></div>
    <h2>Let&apos;s build something <em>meaningful.</em></h2>
    <a className="contact-email" href="mailto:sohailahmed.mohammad01@gmail.com">sohailahmed.mohammad01@gmail.com <FiArrowRight aria-hidden="true" /></a>
    <div className="contact-bottom"><div><a href="https://www.linkedin.com/in/mohammad-sohail-ahmed/" target="_blank" rel="noreferrer">LinkedIn <FiExternalLink aria-hidden="true" /></a><a href="tel:+918106637318">+91 81066 37318 <FiArrowRight aria-hidden="true" /></a><a href="/docs/resume.pdf" download>Download résumé <FiDownload aria-hidden="true" /></a></div><span>HYDERABAD, INDIA</span></div>
    <div className="footer-fine"><span>© {new Date().getFullYear()} MOHAMMAD SOHAIL AHMED</span><span>DESIGNED WITH INTENTION · BUILT TO LAST</span><a href="#top">BACK TO TOP ↑</a></div>
  </div></footer>;
}

export default function App() {
  return <div className="site-page"><Header /><main><Hero /><About /><Experience /><Work /><Recognition /><Expertise /><Credentials /></main><Contact /></div>;
}
