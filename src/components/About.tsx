import { FaArrowRight, FaDownload, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import profileImg from "../images/photo_sohail.jpg";

const strengths = ["Java & Spring Boot", "SAP Commerce Cloud", "AWS & Microservices", "AI-integrated systems"];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 overflow-hidden border-b border-slate-200 bg-white pt-16">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase text-blue-800">
            <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
            Backend Software Engineer
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] text-slate-950 sm:text-6xl lg:text-7xl">
            Mohammad<br />Sohail Ahmed
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            I build dependable backend systems for enterprise commerce, from Java and Spring Boot services to SAP Commerce Cloud extensions and AWS workloads.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              View selected work
              <FaArrowRight aria-hidden="true" />
            </a>
            <a
              href="/docs/resume.pdf"
              download
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <FaDownload aria-hidden="true" />
              Download resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" aria-hidden="true" />
              Hyderabad, India
            </span>
            <a
              href="https://www.linkedin.com/in/mohammad-sohail-ahmed/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-slate-800 transition hover:text-blue-700"
            >
              <FaLinkedinIn className="text-blue-700" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
          <div className="absolute -left-5 top-8 hidden h-full w-full rounded-lg border border-blue-200 bg-blue-50 lg:block" aria-hidden="true" />
          <img
            src={profileImg}
            alt="Mohammad Sohail Ahmed"
            className="relative aspect-[4/5] w-full rounded-lg border border-slate-200 object-cover object-[50%_35%] shadow-xl"
          />
          <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-slate-200 bg-white p-4 shadow-lg sm:left-8 sm:right-8">
            <p className="text-xs font-bold uppercase text-blue-700">Current focus</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">Enterprise commerce, cloud services, and applied AI</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-slate-200 px-5 sm:grid-cols-4 sm:divide-y-0 lg:px-8">
          {strengths.map((strength) => (
            <div key={strength} className="flex min-h-20 items-center justify-center px-3 py-5 text-center text-sm font-semibold text-slate-700">
              {strength}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
