import type { JSX } from "react";

import {
  FaJava,
  FaAws,
  FaDocker,
  FaReact,
  FaCode,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaServer,
  FaTools,
  FaCogs,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJenkins,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPython,
  SiAmazoncloudwatch,
  SiDatadog,
  SiDynatrace,
  SiJunit5,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: ["Java", "Python", "C", "SQL", "JavaScript"],
    },

    {
      title: "Backend & Distributed Systems",
      icon: <FaServer />,
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Hibernate",
        "JPA",
        "REST APIs",
        "Microservices",
        "System Design",
        "Event-Driven Architecture",
      ],
    },

    {
      title: "Cloud & Infrastructure",
      icon: <FaCloud />,
      skills: [
        "AWS",
        "Lambda",
        "AppSync",
        "CloudWatch",
        "Serverless",
        "Distributed Systems",
        "High Availability",
      ],
    },

    {
      title: "DevOps & CI/CD",
      icon: <FaTools />,
      skills: [
        "Docker",
        "Jenkins",
        "CI/CD",
        "Deployment Automation",
      ],
    },

    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: [
        "MySQL",
        "DynamoDB",
        "SQL",
        "NoSQL",
        "Data Modelling",
        "Query Optimization",
      ],
    },

    {
      title: "Frontend",
      icon: <FaReact />,
      skills: ["ReactJS", "JavaScript", "HTML5", "CSS3"],
    },

    {
      title: "Testing & Quality",
      icon: <FaCogs />,
      skills: [
        "JUnit",
        "Mockito",
        "Unit Testing",
        "Integration Testing",
        "TDD",
      ],
    },

    {
      title: "Observability & Reliability",
      icon: <FaProjectDiagram />,
      skills: [
        "Dynatrace",
        "Datadog",
        "Monitoring",
        "Logging",
        "Distributed Tracing",
        "Performance Monitoring",
        "SLA/SLO",
      ],
    },

    {
      title: "AI / LLM Systems",
      icon: <FaBrain />,
      skills: [
        "RAG",
        "Multi-Agent Systems",
        "Qdrant",
        "Embeddings",
        "Gemini AI",
        "Semantic Search",
        "LLM Orchestration",
        "Metadata Filtering",
      ],
    },

    {
      title: "Engineering Practices",
      icon: <FaTools />,
      skills: [
        "Agile",
        "API Design",
        "Production Debugging",
        "Performance Optimization",
        "Incident Management",
        "Scalable System Design",
      ],
    },
  ];

  const techIcons: Record<string, JSX.Element> = {
    Java: <FaJava />,
    Python: <SiPython />,
    C: <FaCode />,
    SQL: <FaDatabase />,
    JavaScript: <SiJavascript />,

    "Spring Boot": <SiSpringboot />,
    "Spring MVC": <SiSpringboot />,
    Hibernate: <FaServer />,
    JPA: <FaDatabase />,
    "REST APIs": <FaDatabase />,
    Microservices: <FaProjectDiagram />,
    "System Design": <FaProjectDiagram />,
    "Event-Driven Architecture": <FaProjectDiagram />,

    AWS: <FaAws />,
    Lambda: <FaCloud />,
    AppSync: <FaCloud />,
    CloudWatch: <SiAmazoncloudwatch />,
    Serverless: <FaCloud />,
    "Distributed Systems": <FaProjectDiagram />,
    "High Availability": <FaServer />,

    Docker: <FaDocker />,
    Jenkins: <SiJenkins />,
    "CI/CD": <FaTools />,
    "Deployment Automation": <FaTools />,

    MySQL: <SiMysql />,
    DynamoDB: <FaDatabase />,
    NoSQL: <FaDatabase />,
    "Data Modelling": <FaDatabase />,
    "Query Optimization": <FaDatabase />,

    ReactJS: <FaReact />,
    HTML5: <SiHtml5 />,
    CSS3: <SiCss3 />,

    JUnit: <SiJunit5 />,
    Mockito: <FaCogs />,
    "Unit Testing": <FaCogs />,
    "Integration Testing": <FaCogs />,
    TDD: <FaCogs />,

    Dynatrace: <SiDynatrace />,
    Datadog: <SiDatadog />,
    Monitoring: <FaProjectDiagram />,
    Logging: <FaProjectDiagram />,
    "Distributed Tracing": <FaProjectDiagram />,
    "Performance Monitoring": <FaProjectDiagram />,
    "SLA/SLO": <FaProjectDiagram />,

    RAG: <FaBrain />,
    "Multi-Agent Systems": <FaBrain />,
    Qdrant: <FaDatabase />,
    Embeddings: <FaBrain />,
    "Gemini AI": <FaBrain />,
    "Semantic Search": <FaBrain />,
    "LLM Orchestration": <FaBrain />,
    "Metadata Filtering": <FaBrain />,

    Agile: <FaTools />,
    "API Design": <FaCode />,
    "Production Debugging": <FaTools />,
    "Performance Optimization": <FaTools />,
    "Incident Management": <FaTools />,
    "Scalable System Design": <FaProjectDiagram />,
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      style={{ fontFamily: "'serif', sans-serif" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-5">
            Skills
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Expertise in scalable backend systems, cloud-native infrastructure,
            AI-driven applications, enterprise solutions, and modern frontend
            technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {category.title}
                  </h3>

                  {/* <p className="text-gray-500 text-sm mt-1">
                    Technologies & Expertise
                  </p> */}
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition duration-300"
                  >
                    <span className="text-blue-700 text-lg">
                      {techIcons[skill]}
                    </span>

                    <span className="text-gray-700 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { value: "2.5+", label: "Years Experience" },
            { value: "20+", label: "Technologies" },
            { value: "8+", label: "Enterprise Modules" },
            { value: "5+", label: "Projects Delivered" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-4xl font-bold text-blue-700 mb-3">
                {item.value}
              </h3>

              <p className="text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}