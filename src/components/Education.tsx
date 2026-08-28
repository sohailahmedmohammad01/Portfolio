import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 border-y border-slate-200 bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.55fr_1.45fr] lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase text-blue-300">Education</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A strong computer science foundation.</h2>
        </div>

        <div className="rounded-lg border border-slate-700 bg-slate-900 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-xl" aria-hidden="true">
              <FaGraduationCap />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-bold">B.Tech, Computer Science & Engineering</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Rajiv Gandhi University of Knowledge Technologies (IIIT-RGUKT), Basar</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-blue-300">May 2024</span>
              </div>
              <p className="mt-5 border-t border-slate-700 pt-5 text-sm font-semibold text-slate-200">GPA: 8.9 / 10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
