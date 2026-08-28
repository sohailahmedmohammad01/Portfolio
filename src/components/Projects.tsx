import { FaArrowRight, FaBrain, FaHospital } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Healthcare Information System",
    period: "2026 - Present",
    icon: <FaHospital aria-hidden="true" />,
    description:
      "A modular backend covering registration, appointments, billing, pharmacy, laboratory, administration, and audit logging, secured with JWT and role-based access control.",
    outcome:
      "Designed relational models, validation, exception handling, and audit trails while supporting deployment troubleshooting and ongoing enhancements.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JPA / Hibernate", "JWT / RBAC"],
  },
  {
    number: "02",
    title: "AI Chatbot / Multi-Agent RAG Platform",
    period: "Independent project",
    icon: <FaBrain aria-hidden="true" />,
    description:
      "An end-to-end RAG pipeline for ingestion, embeddings, semantic retrieval, and grounded response generation across Spring Boot and FastAPI services.",
    outcome:
      "Combined Qdrant vector search, metadata filtering, RBAC, and context-aware generation to provide secure answers across specialized agents.",
    technologies: ["Spring Boot", "FastAPI", "Gemini", "Qdrant", "Vector Search"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title">Focused projects with practical depth.</h2>
          <p className="section-copy">Two systems that show how I approach secure architecture, backend ownership, and new technology with a production mindset.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-700">
                  {project.icon}
                </div>
                <span className="text-4xl font-bold text-slate-200">{project.number}</span>
              </div>

              <p className="mt-7 text-xs font-bold uppercase text-blue-700">{project.period}</p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-950">{project.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-slate-600">{project.description}</p>

              <div className="my-6 h-px bg-slate-200" />

              <div className="flex items-start gap-3 text-[15px] leading-7 text-slate-700">
                <FaArrowRight className="mt-1.5 shrink-0 text-blue-700" aria-hidden="true" />
                <p>{project.outcome}</p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
