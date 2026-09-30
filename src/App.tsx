import { Fragment, useEffect, useState } from "react";
import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiAward, FiCheck, FiCpu, FiDatabase, FiDownload, FiExternalLink, FiFileText, FiGrid, FiHome, FiLayers, FiMenu, FiShield, FiX } from "react-icons/fi";
import portrait from "./images/sohail-professional-portrait.png";
import awardMoment from "./images/cjss-award-moment.jpg";
import phoenixAward from "./images/cjss-phoenix-award.jpg";
import { CredentialsSection, EducationSection, SkillsSection } from "./components/ProfileDetails";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Credentials", href: "#credentials" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, [menuOpen]);

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
        <a href={`${import.meta.env.BASE_URL}docs/resume.pdf`} download onClick={() => setMenuOpen(false)}>Download résumé <FiDownload aria-hidden="true" /></a>
      </nav>}
    </header>
  );
}

function Hero() {
  return <section className="hero-section" id="top"><div className="hero shell">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-line" /> BACKEND SOFTWARE ENGINEER</div>
      <h1>Mohammad<br /><em>Sohail Ahmed.</em></h1>
      <p className="hero-role">Engineering dependable systems.<br />Exploring intelligent possibilities.</p>
      <p className="hero-intro">Java, Spring Boot, and AWS engineer specializing in TREX development and TREX–SAP Commerce Cloud integration, with hands-on experience in RAG and multi-agent AI systems. Based in Hyderabad, building scalable backend solutions and AI applications that deliver real-world impact.</p>
      <div className="hero-specialties"><span>BACKEND</span><i /><span>COMMERCE</span><i /><span>APPLIED AI</span></div>
      <div className="hero-actions">
        <a className="button button-dark" href="#work">Explore my work <FiArrowRight aria-hidden="true" /></a>
        <a className="button button-text" href={`${import.meta.env.BASE_URL}docs/resume.pdf`} download>Download résumé <FiDownload aria-hidden="true" /></a>
      </div>
      <a className="scroll-cue" href="#about"><FiArrowDown aria-hidden="true" /> DISCOVER MY JOURNEY</a>
    </div>
    <div className="hero-visual">
      <div className="hero-image-frame"><img src={portrait} alt="Professional portrait of Mohammad Sohail Ahmed in a black suit" width="1122" height="1402" fetchPriority="high" /></div>
      <a className="hero-award-note" href="#recognition"><span aria-hidden="true">✳</span><span><strong>CJSS Phoenix Award</strong><small>RECOGNITION · 2026</small></span><FiArrowRight aria-hidden="true" /></a>
      <div className="hero-photo-caption"><span>MOHAMMAD SOHAIL AHMED</span><span>HYDERABAD · INDIA</span></div>
      <div className="hero-accent" aria-hidden="true" />
    </div>
  </div><div className="hero-proof-strip shell"><div><span>CURRENTLY</span><strong>Software Engineer at CJSS</strong></div><div><span>CLIENT DELIVERY</span><strong>Changi Airport Group</strong></div><div><span>BUILDING</span><strong>Zaiqa hospitality platform</strong></div><div><span>RECOGNIZED FOR</span><strong className="proof-award"><FiAward aria-hidden="true" />AI Innovation & Client Recognition</strong></div></div></section>;
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
        <div className="about-intro">
          <SectionHeading number="01" eyebrow="ABOUT ME" title="Thoughtful engineering. Tangible impact." />
          <p className="large-copy">I work at the intersection of robust backend architecture and useful new ideas.</p>
        </div>
        <div className="about-content">
          <p>At CJSS Technologies, I build and support TREX, Changi Airport Group&apos;s cloud-native marketplace platform. My work spans Java and Spring Boot services, AWS workflows, the TREX–SAP Commerce Cloud integration for iShopChangi, DocuSign merchant onboarding, and the details that keep production systems reliable.</p>
          <p>Outside client delivery, I&apos;m building Zaiqa, a hospitality operations platform, and exploring applied AI through retrieval-augmented generation, vector search, and multi-agent systems. I value clear thinking, careful execution, and the people who make great work possible.</p>
          <div className="about-principles" aria-label="Areas of focus">
            <div><span>01 / BUILD</span><strong>Backend systems</strong><small>Clear APIs and resilient services.</small></div>
            <div><span>02 / DELIVER</span><strong>Integrations at scale</strong><small>From requirements to production support.</small></div>
            <div><span>03 / EXPLORE</span><strong>Applied AI</strong><small>Grounded, useful intelligent workflows.</small></div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

const experience = [
  {
    period: "JAN 2024 — PRESENT",
    project: "TREX — Cloud-Native Marketplace Platform",
    summary: "Developing and supporting cloud-native backend services for products, pricing, orders, merchants, contracts, users, and promotions.",
    achievements: [
      {
        tag: "SOLE OWNER  /  CLIENT RECOGNIZED",
        title: "DocuSign merchant onboarding",
        text: "Single-handedly designed, integrated, and delivered the DocuSign digital-signature flow end to end. 200+ merchants have onboarded to TREX through digitized merchant agreements with pre-populated terms and values — recognized by Changi Airport Group.",
      },
      {
        tag: "PROOF OF CONCEPT",
        title: "Observability platform selection",
        text: "Evaluated Datadog and Dynatrace through a hands-on POC and recommended the platform for simpler, centralized application logging and monitoring.",
      },
    ],
    details: [
      "Integrated TREX with SAP Commerce Cloud for iShopChangi, covering catalog synchronization, pricing, promotions, and order data exchange.",
      "Built and maintained Java and Spring Boot microservices, REST and GraphQL APIs, and marketplace business logic.",
      "Worked with AWS Lambda, AppSync, ECS, and DynamoDB to support cloud-native services and system integrations.",
      "Resolved production defects across backend services, integrations, and database operations.",
      "Troubleshot backend and database bottlenecks using Datadog and Dynatrace and supported performance optimization.",
      "Wrote JUnit and Mockito tests, supported regression testing, and validated releases before production.",
    ],
    stack: "JAVA  /  SPRING BOOT  /  AWS  /  DYNAMODB  /  SAP COMMERCE CLOUD  /  DOCUSIGN  /  GRAPHQL",
  },
];

function Experience() {
  return <section className="experience-section section-pad" id="experience">
    <div className="shell">
      <div className="experience-top">
        <SectionHeading number="02" eyebrow="EXPERIENCE" title="Built for the real world." copy="From the first design discussion to production support, I focus on systems that are clear, resilient, and ready to scale." />
      </div>
      <div className="employer-overview">
        <span className="experience-number">01</span>
        <div><p className="experience-client">CJSS TECHNOLOGIES · HYDERABAD</p><h3>Software Engineer</h3></div>
        <strong>JAN 2024 — PRESENT</strong>
      </div>
      <div className="project-phases">
        {experience.map((role, index) => <article className="project-phase" key={role.project}>
          <div className="project-phase-heading"><span>CHANGI AIRPORT GROUP / 0{index + 1}</span><span>{role.period}</span></div>
          <h4>{role.project}</h4><p className="experience-summary">{role.summary}</p>
          <div className="project-achievements" aria-label="Key achievements">{role.achievements.map((item) => <div key={item.title}>
            <span>{item.tag}</span><strong>{item.title}</strong><p>{item.text}</p>
          </div>)}</div>
          <ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          <p className="experience-stack">{role.stack}</p>
        </article>)}
      </div>
    </div>
  </section>;
}

const work = [
  {
    number: "01",
    label: "BUILDING NOW  /  HOSPITALITY SAAS",
    title: "Zaiqa",
    description: "A multi-site hospitality operations platform that runs hotel PMS and restaurant operations — rooms, stays, folios, menus, orders, tables, housekeeping, inventory, billing, and reporting — from one system.",
    detail: "A Spring Boot modular monolith with 14 domain modules whose boundaries are verified by Spring Modulith, branch-scoped JWT and RBAC across seven roles, Flyway-managed PostgreSQL, and a React and TypeScript operations UI.",
    tools: ["JAVA 21", "SPRING BOOT", "SPRING MODULITH", "POSTGRESQL", "REACT"],
    system: "system-featured",
    flow: [[FiHome, "Hotel PMS"], [FiGrid, "Restaurant ops"], [FiLayers, "Billing & reports"]] as const,
    footer: "Modular · Multi-branch · Role-scoped",
    ariaLabel: "Zaiqa platform: hotel PMS and restaurant operations flowing into billing and reports",
    featured: true,
  },
  {
    number: "02",
    label: "INDEPENDENT PROJECT  /  APPLIED AI",
    title: "Multi-Agent RAG Platform",
    description: "An AI assistant architecture that connects document ingestion, embeddings, semantic retrieval, and grounded response generation across specialized agents.",
    detail: "Built with Spring Boot and FastAPI, using Gemini, Qdrant vector search, metadata filtering, and role-based access control.",
    tools: ["SPRING BOOT", "FASTAPI", "QDRANT", "GEMINI"],
    system: "system-01",
    flow: [[FiFileText, "Documents"], [FiCpu, "Retrieval"], [FiLayers, "Grounded answers"]] as const,
    footer: "Context-aware · Access-controlled",
    ariaLabel: "RAG flow: documents, retrieval, and grounded answers",
  },
  {
    number: "03",
    label: "ENGINEERING PROJECT  /  HEALTHCARE",
    title: "Healthcare Information System",
    description: "A modular backend for patient registration, appointments, billing, pharmacy, laboratory, administration, and audit logging.",
    detail: "Designed relational data models and secure workflows with JWT and role-based access, plus validation and deployment troubleshooting.",
    tools: ["JAVA", "SPRING BOOT", "POSTGRESQL", "JWT / RBAC"],
    system: "system-02",
    flow: [[FiFileText, "Patients"], [FiCpu, "Services"], [FiShield, "Secure records"]] as const,
    footer: "Modular · Auditable · Role-based",
    ariaLabel: "Healthcare system: patient workflows, services, and secure data",
  },
];

function Work() {
  return <section className="work-section section-pad" id="work">
    <div className="shell">
      <div className="work-top"><SectionHeading number="03" eyebrow="SELECTED WORK" title="Ideas into architecture." copy="Systems that connect careful engineering with practical problems — from hospitality operations and intelligent retrieval to healthcare and property workflows." /><span className="work-count">FOUR SELECTED PROJECTS</span></div>
      <div className="work-grid">{work.map((project) => <article className={"work-card" + (project.featured ? " work-card-featured" : "")} key={project.number}>
        <div className="work-card-top"><span>{project.label}</span><span className="work-card-number">{project.number}</span></div>
        <div className={"project-system " + project.system} aria-label={project.ariaLabel}>
          <span className="system-label">SYSTEM OVERVIEW</span>
          <div className="system-flow">{project.flow.map(([Icon, text], i) => <Fragment key={text}>{i > 0 && <i />}<span><Icon aria-hidden="true" /><small>{text}</small></span></Fragment>)}</div>
          <div className="system-footer"><FiCheck aria-hidden="true" />{project.footer}</div>
        </div>
        <div className="work-card-body"><h3>{project.title}</h3><p>{project.description}</p><p className="work-detail">{project.detail}</p></div>
        <div className="work-card-bottom">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
      </article>)}</div>
      <article className="project-supporting"><span className="project-supporting-icon"><FiDatabase aria-hidden="true" /></span><div><span className="mini-label">04 / MARCH–APRIL 2024</span><h3>Real Estate Platform</h3><p>A Spring Boot microservices application for property listings, user management, orders, and appointment scheduling.</p></div><a className="text-link" href="https://www.linkedin.com/in/mohammad-sohail-ahmed/" target="_blank" rel="noreferrer">Project on LinkedIn <FiArrowUpRight aria-hidden="true" /></a></article>
    </div>
  </section>;
}

function Recognition() {
  return <section className="recognition-section section-pad" id="recognition">
    <div className="shell recognition-grid">
      <div className="recognition-copy">
        <SectionHeading number="07" eyebrow="RECOGNITION" title="A moment of gratitude. A reason to aim higher." />
        <div className="award-line"><span className="award-star">✳</span><span>PHOENIX AWARD <i /> JUNE 2026</span></div>
        <p className="recognition-lead">Alhamdulillah — I&apos;m grateful to receive Best Employee recognition at CJSS Technologies for my contribution to AI innovation and client projects.</p>
        <p>The award reflects the guidance, trust, and collaboration of the leadership, managers, mentors, and teammates I&apos;ve learned from. Every challenge and review has helped me grow as an engineer.</p>
        <p>It motivates me to keep experimenting, learning, and creating meaningful impact for CJSS and its clients.</p>
        <div className="recognition-contributions"><span>CLIENT DELIVERY</span><span>DOCUSIGN INTEGRATION</span><span>RAG SOLUTIONS</span><span>MULTI-AGENT ORCHESTRATION</span></div>
        <div className="client-recognition"><span className="mini-label">CLIENT RECOGNITION · CHANGI AIRPORT GROUP</span><h3>DocuSign merchant onboarding</h3><p>Recognized by Changi Airport Group for single-handedly delivering the DocuSign digital-signature onboarding flow for TREX, which has onboarded 200+ merchants through digitized, pre-populated merchant agreements.</p></div>
        <a className="text-link award-certificate-link" href={phoenixAward} target="_blank" rel="noreferrer">View award & certificate <FiArrowUpRight aria-hidden="true" /></a>
        <div className="award-credit">MOHAMMAD SOHAIL AHMED <span>·</span> CJSS TECHNOLOGIES</div>
      </div>
      <div className="recognition-photos">
        <figure className="award-main-photo"><img src={phoenixAward} alt="CJSS Technologies Phoenix Award and certificate of excellence awarded to Mohammad Sohail Ahmed" loading="lazy" /><figcaption>THE PHOENIX AWARD · EMPLOYEE OF THE MONTH</figcaption></figure>
        <figure className="award-moment-photo"><div className="award-moment-crop"><img src={awardMoment} alt="Mohammad Sohail Ahmed receiving the CJSS recognition award with colleagues" loading="lazy" /></div><figcaption>A SHARED MOMENT AT CJSS</figcaption></figure>
      </div>
    </div>
  </section>;
}

function Contact() {
  return <footer className="contact-section" id="contact"><div className="shell">
    <div className="contact-top"><span>08 / LET&apos;S CONNECT</span><span>HAVE AN IDEA OR OPPORTUNITY?</span></div>
    <h2>Let&apos;s build something <em>meaningful.</em></h2>
    <a className="contact-email" href="mailto:sohailahmed.mohammad01@gmail.com">sohailahmed.mohammad01@gmail.com <FiArrowRight aria-hidden="true" /></a>
    <div className="contact-bottom"><div><a href="https://www.linkedin.com/in/mohammad-sohail-ahmed/" target="_blank" rel="noreferrer">LinkedIn <FiExternalLink aria-hidden="true" /></a><a href="tel:+918106637318">+91 81066 37318 <FiArrowRight aria-hidden="true" /></a><a href={`${import.meta.env.BASE_URL}docs/resume.pdf`} download>Download résumé <FiDownload aria-hidden="true" /></a></div><span>HYDERABAD, INDIA</span></div>
    <div className="footer-fine"><span>© {new Date().getFullYear()} MOHAMMAD SOHAIL AHMED</span><span>DESIGNED WITH INTENTION · BUILT TO LAST</span><a href="#top">BACK TO TOP ↑</a></div>
  </div></footer>;
}

export default function App() {
  return <div className="site-page"><a className="skip-link" href="#about">Skip to content</a><Header /><main><Hero /><About /><Experience /><Work /><SkillsSection /><EducationSection /><CredentialsSection /><Recognition /></main><Contact /></div>;
}
