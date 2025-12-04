"use client";

import { motion } from "framer-motion";

type TimelineEvent = {
  year: string;
  title: string;
  desc: string;
  img: string;
};

const edu: TimelineEvent[] = [
  { year: "2010 — 2020", title: "ICSE", desc: "St. Xaviers Instituition", img: "https://media.licdn.com/dms/image/v2/D4D0BAQHCqC1EokZHgA/company-logo_200_200/company-logo_200_200/0/1686644200230/st_xaviers_institution_logo?e=1766620800&v=beta&t=eBIm5aSlNP38PVof3GUJUMAUm2gbiUjKH-fPX5q4VL8" },
  { year: "2020 — 2022", title: "ISC (Science)", desc: "St. Xaviers Instituition", img: "https://media.licdn.com/dms/image/v2/D4D0BAQHCqC1EokZHgA/company-logo_200_200/company-logo_200_200/0/1686644200230/st_xaviers_institution_logo?e=1766620800&v=beta&t=eBIm5aSlNP38PVof3GUJUMAUm2gbiUjKH-fPX5q4VL8" },
  { year: "2022 — 2026", title: "BTech CSE", desc: "Guru Nanak Institute of Technology", img: "https://media.licdn.com/dms/image/v2/C4D0BAQGVdTueWoZ0Eg/company-logo_200_200/company-logo_200_200/0/1660843902959?e=1766620800&v=beta&t=ImWDDdW8EJTqm1vIWlpP9cfV6r77MP87qBH8FW5vce0" },
];

const work: TimelineEvent[] = [
  { year: "Dec 24 — Apr 25", title: "SDE Intern", desc: "Noi Software Pvt. Ltd.", img: "https://media.licdn.com/dms/image/v2/D560BAQGujC47m2JDKg/company-logo_200_200/B56Zop.jTWHkAI-/0/1761640855544?e=1766620800&v=beta&t=sS_TcCNrpGTzw_yGalg5WikroeGByw2DIorp8xIGcU0" },
  { year: "Oct 25 — Current", title: "Design Engineer", desc: "Aesthe UI", img: "https://media.licdn.com/dms/image/v2/D560BAQEOILTh5nHGIQ/company-logo_200_200/B56Zn5GVyyJkAI-/0/1760820815056/divsculpt1_logo?e=1766620800&v=beta&t=Q7mcPGOhS2GxGJL7sXqGkwzpdyysMTjHzSKvbnrkHK0"},
  { year: "TBD - TBD", title: "Analyst Trainee", desc: "Cognizant Technology Solutions", img: "https://media.licdn.com/dms/image/v2/D4E0BAQFZH4svu5BTZA/company-logo_200_200/B4EZk_EfNgHgAM-/0/1757699778309/cognizant_logo?e=1766620800&v=beta&t=y-MW-F5X3vtJzDWFUochauNdlVcv91K-haa0EB5a8ok"},
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 px-4 sm:px-8 overflow-hidden min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/vc.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-100 drop-shadow-[0_0_20px_rgb(255,46,158)] mb-12 sm:mb-20 md:mb-32 text-center">
          Get to know about me
        </h2>

        {/* Grid for timelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Education */}
          <div>
            <p className="text-2xl sm:text-3xl pb-6 sm:pb-10">Education</p>
            <div className="relative border-l-2 border-rose-200 ml-3 sm:ml-4">
              {edu.map((event, idx) => (
                <motion.div
                  key={idx}
                  className="mb-8 sm:mb-10 ml-4 sm:ml-6 flex items-start gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-900/80 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  {/* Circle */}
                  <span className="absolute -left-4 sm:-left-5 top-3 sm:top-4 w-3 h-3 sm:w-4 sm:h-4 bg-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)] rounded-full border-2 border-gray-950"></span>

                  {/* Left Content */}
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-lg font-semibold text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)]">
                      {event.year} : {event.title}
                    </h3>
                    <p className="text-rose-100 mt-1 text-xs sm:text-base">{event.desc}</p>
                  </div>

                  {/* Right Image */}
                  {event.img && (
                    <div className="w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <p className="text-2xl sm:text-3xl pb-6 sm:pb-10">Work Experience</p>
            <div className="relative border-l-2 border-rose-200 ml-3 sm:ml-4">
              {work.map((event, idx) => (
                <motion.div
                  key={idx}
                  className="mb-8 sm:mb-10 ml-4 sm:ml-6 flex items-start gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-900/80 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  {/* Circle */}
                  <span className="absolute -left-4 sm:-left-5 top-3 sm:top-4 w-3 h-3 sm:w-4 sm:h-4 bg-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)] rounded-full border-2 border-gray-950"></span>

                  {/* Left Content */}
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-lg font-semibold text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)]">
                      {event.year} : {event.title}
                    </h3>
                    <p className="text-rose-100 mt-1 text-xs sm:text-base">{event.desc}</p>
                  </div>

                  {/* Right Image */}
                  {event.img && (
                    <div className="w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
