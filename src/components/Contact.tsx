import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "suhailahmed.mohammad@gmail.com",
      link: "mailto:suhailahmed.mohammad@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91-8106637318",
      link: "tel:+918106637318",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "mohammad-sohail-ahmed",
      link: "https://www.linkedin.com/in/mohammad-sohail-ahmed/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "sohailahmed-1469",
      link: "https://github.com/sohailahmed-1469",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      style={{ fontFamily: "'serif', sans-serif" }}
    >
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-700 text-xl group-hover:bg-gray-200 transition">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="text-gray-800 font-semibold">
                    {item.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}