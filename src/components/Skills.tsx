import { FaBrain, FaCloud, FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

const skillGroups = [
  { icon: <FaCode />, title: "Languages", skills: ["Java", "SQL", "Python", "JavaScript"] },
  {
    icon: <FaServer />,
    title: "Backend & Commerce",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "JPA / Hibernate", "REST / GraphQL", "Microservices", "SAP Commerce Cloud", "OCC", "FlexibleSearch", "ImpEx", "Solr"],
  },
  { icon: <FaCloud />, title: "Cloud & Data", skills: ["AWS Lambda", "AppSync", "ECS", "EC2", "S3", "DynamoDB", "PostgreSQL", "MySQL"] },
  { icon: <FaTools />, title: "Quality & Observability", skills: ["Docker", "Jenkins", "CI/CD", "CloudWatch", "Dynatrace", "Datadog", "JUnit", "Mockito", "Integration Testing"] },
  { icon: <FaBrain />, title: "AI & Integrated Development", skills: ["RAG", "Qdrant", "Vector Search", "Embeddings", "Gemini", "Multi-Agent Systems", "GitHub Copilot", "ChatGPT"] },
  { icon: <FaDatabase />, title: "Engineering Ownership", skills: ["API Design", "Production Debugging", "Root-Cause Analysis", "Deployments", "Code Review", "Mentoring"] },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="section-kicker">Technical toolkit</p>
            <h2 className="section-title">Backend first, with end-to-end ownership.</h2>
            <p className="section-copy">A practical stack shaped by enterprise commerce, cloud deployment, observability, testing, and AI-integrated engineering.</p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700" aria-hidden="true">{group.icon}</span>
                  <h3 className="font-bold text-slate-950">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="text-sm leading-6 text-slate-600">{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
