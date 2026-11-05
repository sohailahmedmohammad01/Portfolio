import { FiCheckCircle, FiCpu, FiDatabase, FiGitBranch, FiLayers, FiShield, FiTool, FiUsers, FiZap } from "react-icons/fi";

const stats = [
  { value: "~3 yrs", label: "Java web applications & web services" },
  { value: "OCA", label: "Oracle Certified Java SE 8 Programmer" },
  { value: "200+", label: "merchants onboarded through a Java flow I own" },
  { value: "Aviation", label: "domain: Changi Airport Group platforms" },
];

const concepts = [
  { icon: FiLayers, title: "OOP & design patterns", text: "Encapsulated domain models, clear interfaces, and patterns chosen for the problem, not for show.", points: ["Encapsulation", "Inheritance", "Polymorphism", "SOLID", "Builder", "Factory", "Strategy", "Converter / Populator"], practice: "SAP Commerce populators & converters; TREX and Zaiqa domain models" },
  { icon: FiZap, title: "Concurrency & the JVM", text: "Safe parallel work and an understanding of what the JVM is doing underneath.", points: ["Threads", "ExecutorService", "CompletableFuture", "synchronized / volatile", "Heap & GC", "Profiling"], practice: "Backend and database bottlenecks traced with Dynatrace and Datadog" },
  { icon: FiShield, title: "Exceptions & robust code", text: "Failing clearly, validating early, and leaving an audit trail.", points: ["Checked vs unchecked", "Custom exceptions", "try-with-resources", "Validation", "Global error handling"], practice: "SmartHIS validations, exception handling, and audit logging" },
  { icon: FiCpu, title: "Modern Java (8 → 21)", text: "Expressive, declarative code with fewer moving parts.", points: ["Lambdas", "Streams API", "Optional", "Records", "Sealed types", "Pattern matching"], practice: "Zaiqa built on Java 21 and Spring Boot" },
];

const strengths = [
  { icon: FiLayers, title: "Java web apps & web services", text: "Spring Boot microservices with REST and GraphQL APIs for products, pricing, orders, merchants, contracts, and promotions." },
  { icon: FiTool, title: "Bug fixes, enhancements & performance tuning", text: "Resolve production defects across services, integrations, and databases; trace bottlenecks with Dynatrace and Datadog." },
  { icon: FiCpu, title: "Troubleshooting complex issues", text: "Cross-layer incidents between TREX and SAP Commerce Cloud, worked through to root cause." },
  { icon: FiShield, title: "Security in every layer", text: "Spring Security, JWT, role-based access control, and Okta authentication, plus audit logging." },
  { icon: FiCheckCircle, title: "Testing & code quality", text: "JUnit and Mockito tests, integration testing, release validation, and code reviews that mentor junior engineers." },
  { icon: FiDatabase, title: "Relational databases", text: "SQL with PostgreSQL and MySQL, JPA / Hibernate mappings, and Flyway-managed schema changes." },
  { icon: FiUsers, title: "Requirements, specs & delivery", text: "Two-week Agile sprints in Jira; requirements gathered with business stakeholders and documented in Confluence, plus the end-to-end BCRS demo." },
  { icon: FiGitBranch, title: "Deployments & production support", text: "Biweekly releases promoted DEV → QA → business sign-off → PROD, with Confluence release notes, Git, Maven, Jenkins CI/CD, and Docker." },
];

/** Featured Core Java block shown first inside the Skills section. */
export function CoreJavaFeature() {
  return <article className="java-feature" id="java" aria-labelledby="java-title">
    <div className="java-feature-head">
      <div>
        <span className="java-feature-label"><FiCpu aria-hidden="true" />PRIMARY LANGUAGE</span>
        <h3 id="java-title">Core Java, from fundamentals to production.</h3>
      </div>
      <p>Nearly three years of building Java web applications and web services for Changi Airport Group, grounded in object-oriented design, modern Java, and clean, testable code.</p>
    </div>

    <div className="java-stats" aria-label="Java at a glance">{stats.map((stat) => <div key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>

    <div className="java-concepts">{concepts.map(({ icon: Icon, title, text, points, practice }) => <div className="java-concept" key={title}>
      <div className="java-concept-top"><span className="java-concept-icon"><Icon aria-hidden="true" /></span><h4>{title}</h4></div>
      <p>{text}</p>
      <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
      <div className="java-practice"><span>IN PRACTICE</span>{practice}</div>
    </div>)}</div>
  </article>;
}

/** JD-aligned strengths, shown after the toolkit cards in the Skills section. */
export function JavaStrengths() {
  return <>
    <div className="java-subhead"><span>WHAT I BRING TO A JAVA TEAM</span><i /></div>
    <div className="java-strengths">{strengths.map(({ icon: Icon, title, text }) => <div className="java-strength" key={title}>
      <span className="java-strength-icon"><Icon aria-hidden="true" /></span>
      <div><strong>{title}</strong><p>{text}</p></div>
    </div>)}</div>
  </>;
}
