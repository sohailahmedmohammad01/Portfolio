import { useState } from "react";

import {
  FaGithub,
  FaBrain,
  FaBuilding,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(0);

  const projects = [
    {
      title:
        "AI Chatbot with Multi-Agent Orchestration using RAG (Gemini + Qdrant)",

      icon: <FaBrain />,

      shortDescription:
        "Enterprise-grade multi-agent RAG architecture powered by Gemini AI and Qdrant vector database.",

      fullDescription:
        "Designed and developed an end-to-end AI-powered Retrieval-Augmented Generation (RAG) platform using Spring Boot, Python FastAPI, Gemini AI, and Qdrant. The system follows a scalable microservices-based architecture with dedicated agents for ingestion, embeddings, retrieval, and response generation.",

      technologies: [
        "Spring Boot",
        "Python FastAPI",
        "Gemini AI",
        "Qdrant",
        "RAG",
        "Microservices",
        "Semantic Search",
        "Vector Database",
        "Embeddings",
        "REST APIs",
      ],

      features: [
        "Designed a multi-agent architecture for document ingestion, retrieval, embeddings, and response synthesis",
        "Implemented secure document ingestion pipeline with file upload, Base64 decoding, chunking, and metadata enrichment",
        "Integrated Gemini embedding models for semantic vector generation",
        "Stored embeddings in Qdrant vector database with metadata-based filtering",
        "Built role-aware semantic retrieval using vector similarity and payload filtering",
        "Implemented RAG-based contextual response generation grounded strictly on retrieved documents",
        "Optimized retrieval performance using structured filtering and vector indexing",
        "Developed scalable APIs and backend orchestration using Spring Boot and FastAPI",
      ],

      github: "https://github.com/",
    },

    {
      title: "CONNECT – Enterprise Workforce & Business Operations Platform",

      icon: <FaBuilding />,

      shortDescription:
        "Full-stack enterprise platform for HR operations, recruitment, vendor management, and employee learning.",

      fullDescription:
        "Designed and developed CONNECT, a scalable enterprise-grade business operations platform supporting HR management, recruitment workflows, vendor operations, employee learning, timesheets, invoices, and asset management. Built using Spring Boot microservices architecture with secure role-based access and enterprise authentication.",

      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "ReactJS",
        "MySQL",
        "Azure AD",
        "RBAC",
        "REST APIs",
        "JWT",
        "AWS",
      ],

      features: [
        "Designed scalable microservices architecture for enterprise workforce operations",
        "Implemented employee lifecycle management and recruitment workflows",
        "Built vendor invoice management and timesheet processing modules",
        "Developed secure role-based access control (RBAC) across multiple enterprise roles",
        "Integrated Microsoft Authentication (Azure AD) for centralized enterprise login",
        "Built asset management modules for tracking and operational efficiency",
        "Designed gamified learning platform to improve employee engagement and skill development",
        "Optimized MySQL relational schema design for scalable reporting and performance",
      ],

      github: "https://github.com/",
    },
    {
      title: "Student Attendance Management System",

      icon: <FaProjectDiagram />,

      shortDescription:
        "AI-powered face recognition attendance system for automated student tracking and monitoring.",

      fullDescription:
        "Developed an intelligent attendance management system using facial recognition technology to automate student attendance tracking. The system detects and recognizes student faces in real-time, reducing manual effort and improving attendance accuracy and efficiency.",

      technologies: [
        "Python",
        "OpenCV",
        "Flask",
        "TensorFlow",
        "SQLite",
        "Machine Learning",
        "Face Recognition",
      ],

      features: [
        "Implemented real-time face detection and recognition using OpenCV and TensorFlow",
        "Automated attendance marking based on facial recognition",
        "Built attendance history and student tracking modules",
        "Generated daily and monthly attendance reports",
        "Improved attendance accuracy and minimized manual intervention",
        "Developed secure backend services using Flask",
        "Integrated database storage for attendance records and analytics",
        "Enabled export functionality for attendance reports and monitoring",
      ],

      github: "https://github.com/yourusername/attendance-system",
    },
    {
      title: "Face Recognition Attendance Management System",

      icon: <FaProjectDiagram />,

      shortDescription:
        "AI-powered attendance tracking system using real-time face recognition technology.",

      fullDescription:
        "Designed and developed an intelligent attendance management system using computer vision and machine learning techniques for automated student attendance tracking. The system detects and recognizes faces in real-time, reducing manual effort while improving accuracy, efficiency, and monitoring capabilities.",

      technologies: [
        "Python",
        "OpenCV",
        "Flask",
        "TensorFlow",
        "SQLite",
        "Machine Learning",
        "Face Recognition",
        "Computer Vision",
      ],

      features: [
        "Implemented real-time face detection and recognition using OpenCV and TensorFlow",
        "Automated attendance marking based on facial recognition",
        "Built attendance history and analytics tracking modules",
        "Generated daily and monthly attendance reports",
        "Improved attendance accuracy while minimizing manual intervention",
        "Developed backend APIs and attendance workflows using Flask",
        "Integrated database storage for attendance records and reporting",
        "Enabled export functionality for attendance reports and monitoring",
      ],

      github: "https://github.com/yourusername/attendance-system",
    }

  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      style={{ fontFamily: "'serif', sans-serif" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-5">
            Projects
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Enterprise-grade applications, AI-powered systems, and scalable
            full-stack platforms built using modern technologies and cloud-native
            architectures.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedProject(
                  selectedProject === index ? null : index
                )
              }
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-3xl shrink-0">
                  {project.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-800 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-lg mt-3 leading-7">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Expanded Content */}
              {selectedProject === index && (
                <div className="mt-10">
                  {/* Description */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">
                      Project Overview
                    </h4>

                    <p className="text-gray-700 leading-8 text-[17px]">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-gray-800 mb-5">
                      Key Features & Responsibilities
                    </h4>

                    <div className="grid md:grid-cols-2 gap-4">
                      {project.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:bg-gray-100 transition duration-300"
                        >
                          <FaCode className="text-blue-600 mt-1 shrink-0" />

                          <p className="text-gray-700 leading-7">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-gray-800 mb-5">
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 font-medium hover:bg-gray-100 transition duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-300 font-medium"
                    >
                      <FaGithub />
                      View Project
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}