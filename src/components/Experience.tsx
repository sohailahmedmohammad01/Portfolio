import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBuilding,
  FaCode,
} from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "CJSS Technologies Private Ltd",
      location: "Hyderabad",
      position: "Software Engineer",
      period: "Feb 2024 – Present",
      client: "Changi Airport Group",
      project: "TREX Marketplace",
      role: "Software Developer",
      description:
        "TREX is the marketplace platform for IShopChangi merchants, enabling inventory, pricing, order, and user management for seamless retail operations.",

      responsibilities: [
        "Developed scalable backend services and APIs using Spring Boot and Java",
        "Built microservices and integrated RESTful APIs with enterprise systems",
        "Worked with AWS services including ECS, Lambda, S3, CloudWatch, and Auto Scaling",
        "Implemented CI/CD pipelines using Jenkins for automated deployments",
        "Optimized performance using scheduled jobs and efficient backend processing",
        "Collaborated in Agile teams with code reviews and technical discussions",
        "Implemented unit and integration testing using JUnit and Mockito",
        "Integrated SAP and Okta for secure enterprise workflows",
      ],

      technologies: [
        "Java 17",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "AWS",
        "ECS",
        "Lambda",
        "CloudWatch",
        "DynamoDB",
        "Jenkins",
        "JUnit",
        "Docker",
        "SAP",
        "Okta",
      ],
    },

    {
      company: "CJSS Technologies Private Ltd",
      location: "Hyderabad",
      position: "Junior Java Developer Intern",
      period: "Feb 2024 – Mar 2024",

      responsibilities: [
        "Assisted in backend development using Java and Spring Boot",
        "Developed microservices and integrated JPA for database operations",
        "Built frontend components using React JS",
        "Worked with MySQL for optimized relational data handling",
      ],

      technologies: [
        "Java",
        "Spring Boot",
        "ReactJS",
        "MySQL",
        "SAP Hybris",
      ],
    },

    {
      company: "Abhi Trainings.Org",
      location: "Hyderabad",
      position: "AWS Intern",
      period: "Sep 2023 – Dec 2023",

      responsibilities: [
        "Worked on enterprise-grade Java applications using Spring Boot and React JS",
        "Containerized microservices using Docker and deployed on AWS ECS",
        "Implemented CI/CD pipelines using Jenkins",
        "Integrated AWS S3 and IAM for secure cloud infrastructure",
        "Worked in Linux environments for scripting and automation",
      ],

      technologies: [
        "Java",
        "Spring Boot",
        "ReactJS",
        "MySQL",
        "Docker",
        "AWS ECS",
        "AWS S3",
        "IAM",
        "Jenkins",
        "Linux",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      style={{ fontFamily: "'serif', sans-serif" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-5">
            Work Experience
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Professional experience building scalable enterprise systems,
            cloud-native applications, and high-performance backend solutions.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Top Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl">
                      <FaBriefcase />
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">
                        {exp.position}
                      </h3>

                      <p className="text-gray-500 text-lg mt-1 flex items-center gap-2">
                        <FaBuilding className="text-blue-600" />
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 text-gray-600 text-[16px]">
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-600" />
                      {exp.location}
                    </p>

                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-600" />
                      {exp.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Client Info */}
              {exp.client && (
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                    <p className="text-gray-500 text-sm mb-1">Client</p>
                    <h4 className="font-semibold text-gray-800">
                      {exp.client}
                    </h4>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                    <p className="text-gray-500 text-sm mb-1">Project</p>
                    <h4 className="font-semibold text-gray-800">
                      {exp.project}
                    </h4>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                    <p className="text-gray-500 text-sm mb-1">Role</p>
                    <h4 className="font-semibold text-gray-800">
                      {exp.role}
                    </h4>
                  </div>
                </div>
              )}

              {/* Description */}
              {exp.description && (
                <p className="text-gray-600 leading-8 mb-8 text-[17px]">
                  {exp.description}
                </p>
              )}

              {/* Responsibilities */}
              <div className="mb-10">
                <h4 className="text-2xl font-bold text-gray-800 mb-5">
                  Key Responsibilities
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  {exp.responsibilities.map((responsibility, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:bg-blue-50 transition duration-300"
                    >
                      <FaCode className="text-blue-600 mt-1 shrink-0" />

                      <p className="text-gray-700 leading-7">
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-5">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-4">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 font-medium hover:bg-gray-100 transition duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}