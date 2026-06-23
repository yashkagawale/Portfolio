/**
 * @copyright 2025 yashkagawale
 * @license Apache-2.0
 */

const experiences = [
  {
    company: "Techap Solutions",
    role: "Junior Software Engineer | Remote",
    duration: "Sep 2025 - Present",
    points: [
      "Developing responsive front-end interfaces using React.js, HTML, CSS, and Bootstrap.",
      "Building React Native UI flows and integrating APIs for smooth mobile functionality.",
      "Collaborating with backend teams to improve component reusability, performance, and maintainability.",
    ],
  },
  {
    company: "E-Revbay Private Limited",
    role: "Tech Intern | In-office",
    duration: "Dec 2024 - May 2025",
    points: [
      "Contributed to UI/UX and front-end process optimization for insurance and finance projects.",
      "Supported end-to-end delivery for projects such as Q Finance and Auto-Loans through testing and issue analysis.",
      "Assisted BRD and flow-diagram documentation, and contributed to automation initiatives using Azure AI.",
    ],
  },
];

// Quick switch: "corporate" or "neon"
const EXPERIENCE_STYLE = "corporate";

const styleConfig = {
  corporate: {
    kicker: "Career Journey",
    rail: "md:before:bg-zinc-700",
    node: "border-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.15)]",
    card:
      "bg-zinc-800/50 ring-zinc-50/5 hover:bg-zinc-800/70 hover:ring-sky-400/30",
    roleBadge: "bg-zinc-700 text-zinc-200",
    durationBadge: "bg-sky-400/15 text-sky-300",
    bullet: "bg-sky-400",
  },
  neon: {
    kicker: "Neon Timeline",
    rail:
      "md:before:bg-gradient-to-b md:before:from-cyan-400/70 md:before:via-sky-500/40 md:before:to-fuchsia-500/70",
    node: "border-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.22),0_0_24px_rgba(56,189,248,0.35)]",
    card:
      "bg-gradient-to-br from-cyan-500/8 via-sky-500/8 to-fuchsia-500/8 ring-cyan-300/20 hover:ring-cyan-300/45 hover:shadow-[0_0_28px_rgba(34,211,238,0.18)]",
    roleBadge: "bg-cyan-400/15 text-cyan-200 border border-cyan-300/30",
    durationBadge:
      "bg-fuchsia-400/15 text-fuchsia-200 border border-fuchsia-300/30",
    bullet: "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]",
  },
};

const Experience = () => {
  const activeStyle = styleConfig[EXPERIENCE_STYLE] ?? styleConfig.corporate;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="mb-8 md:mb-10">
          <p className="text-sky-400 text-sm tracking-wider uppercase mb-2">
            {activeStyle.kicker}
          </p>
          <h2 className="headline-2">Professional Experience</h2>
        </div>

        <div
          className={
            "grid gap-6"
          }
        >
          {experiences.map(({ company, role, duration, points }, key) => (
            <article key={key}>
              <div
                className={
                  "group p-6 md:p-7 rounded-2xl ring-1 ring-inset backdrop-blur-sm transition-all " +
                  activeStyle.card
                }
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="title-1">{company}</h3>
                  <div className="flex items-center gap-2">
                    <span
                      className={
                        "text-xs font-medium px-3 py-1 rounded-full " +
                        activeStyle.roleBadge
                      }
                    >
                      {role}
                    </span>
                    <span
                      className={
                        "text-xs font-medium px-3 py-1 rounded-full " +
                        activeStyle.durationBadge
                      }
                    >
                      {duration}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 mb-4 leading-relaxed">Key contributions</p>

                <ul className="grid gap-2.5 text-zinc-400 text-sm leading-relaxed">
                  {points.map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span
                        className={
                          "mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 " +
                          activeStyle.bullet
                        }
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
