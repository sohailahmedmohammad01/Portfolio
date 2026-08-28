import { FaArrowRight, FaEnvelope, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "sohailahmed.mohammad01@gmail.com",
    href: "mailto:sohailahmed.mohammad01@gmail.com",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    value: "mohammad-sohail-ahmed",
    href: "https://www.linkedin.com/in/mohammad-sohail-ahmed/",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+91 81066 37318",
    href: "tel:+918106637318",
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="scroll-mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let&apos;s build something dependable.</h2>
            <p className="section-copy">The fastest way to reach me is by email. You can also connect with me on LinkedIn.</p>
          </div>

          <div className="space-y-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex min-h-16 items-center gap-4 rounded-lg border border-slate-200 bg-white px-4 py-3 transition hover:border-blue-300 hover:shadow-sm sm:px-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700" aria-hidden="true">{contact.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase text-slate-500">{contact.label}</span>
                  <span className="block break-words text-sm font-semibold text-slate-900 sm:text-base">{contact.value}</span>
                </span>
                <FaArrowRight className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} Mohammad Sohail Ahmed</p>
          <p>Backend Software Engineer in Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
