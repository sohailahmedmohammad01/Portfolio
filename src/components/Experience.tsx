import { FaBuilding, FaCheck, FaMapMarkerAlt } from "react-icons/fa";

const roles = [
  {
    period: "Aug 2026 - Present",
    title: "Software Engineer",
    project: "iShopChangi - SAP Commerce Cloud",
    points: [
      "Deliver backend enhancements across catalog, product, pricing, promotions, orders, customers, and checkout.",
      "Translate business requirements into OCC APIs, custom extensions, items.xml models, populators, converters, and commerce processes.",
      "Own FlexibleSearch, ImpEx, Solr, CronJobs, catalog synchronization, Backoffice operations, and release validation.",
    ],
    technologies: ["Java", "Spring", "SAP Commerce Cloud", "OCC", "Solr"],
  },
  {
    period: "Jan 2024 - Jul 2026",
    title: "Software Engineer",
    project: "TREX - Cloud-Native Marketplace Platform",
    points: [
      "Delivered Java and Spring Boot microservices plus REST and GraphQL APIs for core marketplace workflows.",
      "Built AWS Lambda and AppSync workflows and Dockerized ECS services backed by DynamoDB and relational databases.",
      "Used Dynatrace, Datadog, tracing, and log analysis to resolve production issues, then supported reviews and debugging for junior engineers.",
    ],
    technologies: ["Spring Boot", "AWS", "ECS", "DynamoDB", "Datadog"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Building systems that hold up in production.</h2>
            <p className="section-copy">
              Nearly three years delivering enterprise commerce platforms for Changi Airport Group, from requirements and integrations through deployment and root-cause analysis.
            </p>

            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start gap-3">
                <FaBuilding className="mt-1 text-blue-700" aria-hidden="true" />
                <div>
                  <p className="font-bold text-slate-900">CJSS Technologies Pvt. Ltd.</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                    <FaMapMarkerAlt aria-hidden="true" /> Hyderabad, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-9">
            {roles.map((role, index) => (
              <article key={role.project} className={index === roles.length - 1 ? "relative" : "relative pb-12"}>
                <span className="absolute -left-[2.05rem] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-blue-700 sm:-left-[2.8rem]" aria-hidden="true" />
                <p className="text-sm font-bold text-blue-700">{role.period}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">{role.title}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">Client: Changi Airport Group | {role.project}</p>

                <ul className="mt-5 space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] leading-7 text-slate-600">
                      <FaCheck className="mt-1.5 shrink-0 text-blue-700" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {role.technologies.map((technology) => (
                    <span key={technology} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                      {technology}
                    </span>
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
