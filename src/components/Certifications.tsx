import { FaAward, FaCertificate } from "react-icons/fa";

const credentials = [
  { type: "Certification", title: "Oracle Certified Associate (OCA)", detail: "Java SE 8 Programmer" },
  { type: "Certification", title: "AWS Certified Cloud Practitioner", detail: "Cloud fundamentals and AWS services" },
  { type: "Course", title: "Blockchain and Its Applications", detail: "NPTEL" },
  { type: "Recognition", title: "CJSS Innovation Best Employee Award", detail: "AI-driven innovation and technology initiatives" },
];

export default function Certifications() {
  return (
    <section id="credentials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Credentials & recognition</p>
          <h2 className="section-title">Continued learning, recognized impact.</h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
          {credentials.map((credential) => (
            <article key={credential.title} className="flex gap-4 bg-white p-6 sm:p-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700" aria-hidden="true">
                {credential.type === "Recognition" ? <FaAward /> : <FaCertificate />}
              </span>
              <div>
                <p className="text-xs font-bold uppercase text-blue-700">{credential.type}</p>
                <h3 className="mt-1 font-bold text-slate-950">{credential.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{credential.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
