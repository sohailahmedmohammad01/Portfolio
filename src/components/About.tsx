import profileImg from "../images/Logo.jpeg";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      style={{ fontFamily: "'serif', sans-serif" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-5">
            About Me
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Backend-focused Software Engineer passionate about building
            scalable enterprise systems, cloud-native applications,
            AI-powered solutions, and modern web platforms.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-gray-200 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">

          <div className="grid lg:grid-cols-3">

            {/* Left Profile Section */}
            <div className="bg-gray-50 border-r border-gray-200 p-10 flex flex-col items-center text-center lg:pl-14">

              <div className="relative mb-8">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-52 h-52 rounded-full object-cover object-top shadow-lg border-4 border-white"
                />
              </div>

              <h1 className="text-3xl xl:text-3xl font-bold text-gray-800 whitespace-nowrap leading-none">
                Mohammad Sohail Ahmed
              </h1>

              <p className="text-xl text-gray-500 mt-4">
                Software Engineer
              </p>

              <div className="w-20 h-[2px] bg-blue-600 rounded-full my-8"></div>

              {/* Contact Info */}
              <div className="space-y-5 w-full">

                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4">
                  <FaEnvelope className="text-blue-600 text-lg shrink-0" />

                  <a
                    href="mailto:sohailahmed.mohammad01@gmail.com"
                    className="text-gray-700 hover:text-blue-600 transition text-sm"
                  >
                    sohailahmed.mohammad01@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4">
                  <FaPhoneAlt className="text-blue-600 text-lg shrink-0" />

                  <a
                    href="tel:+918106637318"
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    +91 81066 37318
                  </a>
                </div>

                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4">
                  <FaLinkedin className="text-blue-600 text-lg shrink-0" />

                  <a
                    href="https://www.linkedin.com/in/mohammad-sohail-ahmed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition text-sm"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4">
                  <FaMapMarkerAlt className="text-blue-600 text-lg shrink-0" />

                  <span className="text-gray-700">
                    Hyderabad, India
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="lg:col-span-2 p-10 lg:p-14">

              <div className="mb-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Professional Summary
                </h3>

                <div className="space-y-6 text-gray-700 leading-9 text-[18px]">

                  <p>
                    Backend-focused Software Engineer with 3+ years of
                    experience building scalable microservices, cloud-native
                    applications, and enterprise-grade platforms using Java,
                    Spring Boot, AWS, and modern distributed system
                    architectures.
                  </p>

                  <p>
                    Experienced in designing high-performance REST APIs,
                    event-driven systems, secure authentication workflows,
                    observability solutions, and scalable backend services
                    for enterprise commerce platforms including
                    Changi Airport Group (iShopChangi).
                  </p>

                  <p>
                    Skilled in cloud infrastructure, Docker-based deployment,
                    CI/CD automation, distributed tracing, monitoring, and
                    performance optimization using tools such as Datadog,
                    Dynatrace, Jenkins, ECS, Lambda, and CloudWatch.
                  </p>

                  <p>
                    Passionate about AI-powered backend systems and modern
                    engineering practices, with hands-on experience building
                    Retrieval-Augmented Generation (RAG) applications,
                    multi-agent architectures, vector databases, semantic
                    search pipelines, and LLM-based enterprise solutions.
                  </p>

                  <p>
                    Strong believer in clean architecture, maintainable code,
                    continuous learning, and building impactful systems that
                    align technology with business goals.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}