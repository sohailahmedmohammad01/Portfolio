import { FiArrowUpRight, FiAward, FiBookOpen, FiCloud, FiCode, FiCpu, FiDatabase, FiLayers, FiTool } from "react-icons/fi";

const profileUrl = "https://www.linkedin.com/in/mohammad-sohail-ahmed/";

const skillGroups = [
  { icon: FiCode, title: "Languages & foundations", description: "The tools behind the implementation.", skills: ["Java", "SQL", "Python", "JavaScript"] },
  { icon: FiLayers, title: "Backend engineering", description: "Secure services and maintainable APIs.", skills: ["Spring Boot", "Spring MVC", "Spring Security", "JPA / Hibernate", "REST APIs", "GraphQL", "Microservices"] },
  { icon: FiDatabase, title: "SAP Commerce Cloud", description: "Enterprise commerce from catalog to checkout.", skills: ["OCC APIs", "Custom Extensions", "items.xml", "FlexibleSearch", "ImpEx", "Solr", "CronJobs", "Catalog Synchronization", "Backoffice"] },
  { icon: FiCloud, title: "Cloud & data", description: "Serverless workflows and dependable data layers.", skills: ["AWS Lambda", "AppSync", "ECS", "EC2", "S3", "DynamoDB", "PostgreSQL", "MySQL"] },
  { icon: FiCpu, title: "AI & intelligent systems", description: "Grounded answers and connected agents.", skills: ["RAG", "Qdrant", "Vector Search", "Embeddings", "Gemini", "Multi-Agent Systems", "FastAPI", "GitHub Copilot", "ChatGPT", "AI-Assisted Testing", "AI Code Review"] },
  { icon: FiTool, title: "Quality & delivery", description: "Ownership through testing, release, and production.", skills: ["Maven", "Docker", "Jenkins", "CI/CD", "CloudWatch", "Dynatrace", "Datadog", "JUnit", "Mockito", "Integration Testing", "Root-Cause Analysis", "Code Review", "Mentoring"] },
];

export function SkillsSection() {
  return <section className="skills-section section-pad" id="skills">
    <div className="shell">
      <div className="detail-section-top"><div className="section-heading"><div className="section-index"><span>02</span><span>SKILLS & EXPERTISE</span></div><h2>Technical depth.<br /><em>Practical range.</em></h2></div><p>From Java services and enterprise commerce to cloud infrastructure and applied AI — a toolkit shaped by the systems I build and support.</p></div>
      <div className="skill-card-grid">{skillGroups.map(({ icon: Icon, title, description, skills }, index) => <article className="skill-card" key={title}>
        <div className="skill-card-top"><span className="skill-icon"><Icon aria-hidden="true" /></span><span className="skill-number">0{index + 1}</span></div>
        <h3>{title}</h3><p>{description}</p><ul className="skill-pills">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
      </article>)}</div>
      <div className="ownership-note"><span className="ownership-dot" /><strong>End-to-end ownership</strong><span>API design · Integrations · Deployments · Production debugging · Release validation</span></div>
    </div>
  </section>;
}

export function EducationSection() {
  return <section className="education-section section-pad" id="education"><div className="shell">
    <div className="section-heading"><div className="section-index"><span>05</span><span>EDUCATION</span></div><h2>A foundation to<br /><em>keep building on.</em></h2></div>
    <div className="education-feature">
      <div className="education-seal" aria-hidden="true"><FiBookOpen /><span>IIIT · RGUKT</span><small>BASAR</small></div>
      <div className="education-degree"><span className="mini-label">BACHELOR OF TECHNOLOGY · 2020–2024</span><h3>Computer Science<br />& Engineering</h3><p>Rajiv Gandhi University of Knowledge Technologies</p><span className="education-location">IIIT-RGUKT, Basar</span><div className="education-dates"><span>2020 <i /></span><span>Graduated May 2024</span></div></div>
      <div className="education-result"><span>ACADEMIC RESULT</span><strong>8.9<small>/10</small></strong><p>Grade Point Average</p><div><FiAward aria-hidden="true" /><span>Class of 2024</span></div></div>
    </div>
  </div></section>;
}

const credentials = [
  { brand: "ORACLE", type: "Professional certification", title: "Oracle Certified Associate", subtitle: "Java SE 8 Programmer", detail: "Issued July 2025", id: "102042221OCAJSE8", tone: "oracle", href: profileUrl },
  { brand: "aws", type: "Professional certification", title: "AWS Certified", subtitle: "Cloud Practitioner", detail: "Amazon Web Services", tone: "aws" },
  { brand: "Pregrad", type: "Course certificate", title: "Data Science", subtitle: "Course Completion Certificate", detail: "Issued October 2022 · Pregrad", tone: "pregrad", href: profileUrl },
  { brand: "Python", type: "Course certificate", title: "Python Core", subtitle: "Programming foundations", detail: "Python Core certificate", tone: "python", href: profileUrl },
  { brand: "NPTEL", type: "Course", title: "Blockchain", subtitle: "Blockchain and Its Applications", detail: "National Programme on Technology Enhanced Learning", tone: "nptel" },
];

export function CredentialsSection() {
  return <section className="certifications-section section-pad" id="credentials"><div className="shell">
    <div className="detail-section-top"><div className="section-heading"><div className="section-index"><span>06</span><span>CREDENTIALS & CONTINUED LEARNING</span></div><h2>Knowledge, earned.<br /><em>Curiosity, ongoing.</em></h2></div><a className="text-link" href={profileUrl} target="_blank" rel="noreferrer">Explore my LinkedIn profile <FiArrowUpRight aria-hidden="true" /></a></div>
    <div className="credential-card-grid">{credentials.map((credential) => <article className={"credential-card credential-" + credential.tone} key={credential.title}>
      <div className="credential-card-brand"><strong>{credential.brand}</strong><FiAward aria-hidden="true" /></div>
      <span className="credential-type">{credential.type}</span><h3>{credential.title}</h3><p className="credential-subtitle">{credential.subtitle}</p>
      <div className="credential-card-meta"><p>{credential.detail}</p>{credential.id && <span>Credential ID: {credential.id}</span>}{credential.href && <a href={credential.href} target="_blank" rel="noreferrer">View on LinkedIn <FiArrowUpRight aria-hidden="true" /></a>}</div>
    </article>)}</div>
  </div></section>;
}
