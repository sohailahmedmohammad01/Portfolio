import {
  FaCertificate,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Oracle Certified Associate - Java SE 8 Developer",

      issuer: "Oracle",

      date: "July 2024",

      credentialId: "102042221OCAJSE8",

      description:
        "Validated expertise in Java programming, object-oriented concepts, exception handling, collections, Java APIs, lambda expressions, streams, and software development best practices.",

      skills: [
        "Java",
        "OOP",
        "Exception Handling",
        "Collections",
        "Streams",
        "Lambda Expressions",
        "Java API",
        "Functional Interfaces",
        "Inheritance",
        "Polymorphism",
      ],
    },

    {
      title: "AWS Certified Cloud Practitioner",

      issuer: "https://abhitrainings.in",

      date: "December 2023",

      description:
        "Comprehensive training covering AWS cloud services, architecture, deployment strategies, monitoring, and cloud-native infrastructure best practices.",

      skills: [
        "AWS",
        "EC2",
        "S3",
        "Lambda",
        "CloudWatch",
        "DynamoDB",
        "IAM",
        "Cloud Infrastructure",
      ],
    },

    {
      title: "Blockchain and its Applications",

      issuer: "NPTEL",

      date: "October 2023",

      credentialId: "NPTEL-2023-67890",

      description:
        "In-depth course focused on blockchain fundamentals, decentralized applications, smart contracts, and distributed ledger technologies.",

      skills: [
        "Blockchain",
        "Smart Contracts",
        "Cryptocurrency",
        "Distributed Systems",
        "DApps",
      ],
    },

    {
      title: "Python for Data Science",

      issuer: "PreGrad",

      date: "August 2023",

      credentialId: "PG-2023-11223",

      description:
        "Hands-on training in Python programming, data analysis, machine learning basics, and data visualization techniques.",

      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Data Analysis",
        "Data Visualization",
      ],
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      style={{ fontFamily: "'serif', sans-serif" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-5">
            Certifications
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Professional certifications and technical training focused on
            software engineering, cloud computing, Java development, and modern
            technologies.
          </p>
        </div>

        {/* Certifications */}
        <div className="space-y-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-3xl shrink-0">
                  <FaCertificate />
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-800 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap gap-6 mt-4 text-gray-600">
                    <p className="flex items-center gap-2">
                      <FaBuilding className="text-blue-600" />
                      {cert.issuer}
                    </p>

                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-600" />
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Credential */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-8">
                <p className="text-gray-500 text-sm mb-2">
                  Credential ID
                </p>

                <h4 className="text-lg font-semibold text-gray-800 tracking-wide">
                  {cert.credentialId}
                </h4>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  Overview
                </h4>

                <p className="text-gray-700 leading-8 text-[17px]">
                  {cert.description}
                </p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-5">
                  Skills Covered
                </h4>

                <div className="flex flex-wrap gap-3">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-[15px] font-medium hover:bg-gray-100 transition duration-300"
                    >
                      {skill}
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