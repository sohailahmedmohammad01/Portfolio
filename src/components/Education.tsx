import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      title: "B.Tech – Computer Science and Engineering",
      college: "IIIT - Rajiv Gandhi University of Knowledge Technologies, Basar",
      gpa: "8.9 / 10",
      date: "July 2020 - May 2024",
    },
    {
      title: "Intermediate (12th) – MPC",
      college: "IIIT - Rajiv Gandhi University of Knowledge Technologies, Basar",
      gpa: "9.6 / 10",
      date: "July 2018 - March 2020",
    },
    {
      title: "10th Standard",
      college: "Mahindra Academy High School, Zaheerabad",
      gpa: "10 / 10",
      date: "March 2018",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      style={{ fontFamily: "'serif', sans-serif" }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-5">
            Education
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Academic foundation in computer science, software engineering, and
            modern technology systems.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl shrink-0">
                  <FaGraduationCap />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 leading-snug">
                    {edu.title}
                  </h3>

                  <p className="text-gray-500 mt-2 text-lg italic">
                    {edu.college}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4">
                  <span className="text-gray-600 font-semibold">
                    GPA / Score
                  </span>

                  <span className="text-blue-700 font-bold text-lg">
                    {edu.gpa}
                  </span>
                </div>

                <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4">
                  <span className="text-gray-600 font-semibold flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-600" />
                    Graduated
                  </span>

                  <span className="text-gray-800 font-semibold">
                    {edu.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}