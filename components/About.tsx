"use client";

import { motion } from "framer-motion";

type TimelineEvent = {
  year: string;
  title: string;
  desc: string;
  img: string;
};

/* ===================== DATA ===================== */

const school: TimelineEvent[] = [
  {
    year: "2010 — 2022",
    title: "ICSE | ISC",
    desc: "St. Xaviers Institution",
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQHCqC1EokZHgA/company-logo_200_200/company-logo_200_200/0/1686644200230/st_xaviers_institution_logo?e=1768435200&v=beta&t=RUUwvSJBodnjhjjp2qZZJek4cNVyGsU2b1gT952u2Js",
  },
];

const college: TimelineEvent[] = [
  {
    year: "2022 — 2026",
    title: "BTech Computer Science",
    desc: "Guru Nanak Institute of Technology",
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQGVdTueWoZ0Eg/company-logo_200_200/company-logo_200_200/0/1660843902959?e=1768435200&v=beta&t=LL5E8swTRKyF9BJl3QOKthyM8BBxviOAGasrfvlxwOI",
  },
];

const partTime: TimelineEvent[] = [
  {
    year: "Apr 25 - Sep 25",
    title: "Lead Organizer",
    desc: "MetaMorph 2K25 - Kolkata",
    img: "https://media.licdn.com/dms/image/v2/D560BAQHxrktwDs6A_Q/company-logo_200_200/B56Zc7Fc5_GQAI-/0/1749042976718/metamorph2k25_logo?e=1768435200&v=beta&t=Zkox3Tf3nXux6TJLLD-mDWX4aw8bwEGeRm2vu3eZOW0",
  },
  {
    year: "Oct 25 — Current",
    title: "Design Engineer",
    desc: "Aesthe UI - Kolkata",
    img: "/6b550514-8849-4ede-97af-6851930db5d9.jpg",
  },
];

const fullTime: TimelineEvent[] = [
  {
    year: "TBD — TBD",
    title: "Graduate Engineer",
    desc: "LTI Mindtree - Kolkata | IND",
    img: "https://media.licdn.com/dms/image/v2/D560BAQHRJlE4tggqhA/company-logo_200_200/B56ZpPN4bnHkAM-/0/1762265630823?e=1768435200&v=beta&t=UY6xwT2TacdlfaJuo2qRpvV3S_nAx-1_k_378GObtYA",
  },
  {
    year: "SOMEDAY",
    title: "Simulations Engineer",
    desc: "Mercedes AMG F1 Team - Brackley | GBR",
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQHJcGYv75GXkA/company-logo_200_200/B4DZt4.udgK0AI-/0/1767261268241/mercedes_amg_petronas_formula_one_team_logo?e=1769040000&v=beta&t=pcZCfeoLZ9vUhgRvbKoXJw6cl2hpfNDKGThJLayKV3c",
  },
  // {
  //   year: "TBD — TBD",
  //   title: "Analyst",
  //   desc: "Deloitte - Kolkata",
  //   img: "https://media.licdn.com/dms/image/v2/C560BAQGNtpblgQpJoQ/company-logo_200_200/company-logo_200_200/0/1662120928214/deloitte_logo?e=1768435200&v=beta&t=8PcNYdv9Arc2VHs7X9qWqolDQL5cVrfJBMneQbTH9io",
  // },
  // {
  //   year: "TBD — TBD",
  //   title: "Systems Engineer",
  //   desc: "Cisco - Bangalore",
  //   img: "https://media.licdn.com/dms/image/v2/D560BAQFYnR_Zrm87Dg/company-logo_200_200/B56ZnMyVr4HUAI-/0/1760077372453/cisco_logo?e=1768435200&v=beta&t=4pgdL0IUn999RCJEEOp_V5CMX9E1UW1kzc0oP-1-L6w",
  // },
  // {
  //   year: "TBD — TBD",
  //   title: "Cloud Engineer",
  //   desc: "Oracle - Bangalore",
  //   img: "https://media.licdn.com/dms/image/v2/D4E0BAQHYCgYovUuPtQ/company-logo_200_200/company-logo_200_200/0/1665755678957/oracle_logo?e=1768435200&v=beta&t=boy0NsYfiEswktedjkcb3i0lycIa2NJqvAjBcM0h3zU",
  // },
  // {
  //   year: "TBD — TBD",
  //   title: "Simulations Engineer",
  //   desc: "Red Bull Racing - Milton Keynes",
  //   img: "https://media.licdn.com/dms/image/v2/D4E0BAQGdoPXbob8xcw/company-logo_200_200/B4EZrAjNZVHcAM-/0/1764167047811/red_bull_racing_logo?e=1768435200&v=beta&t=QLXM5tEvcLFH8xF0rqOfJzDYJ0tTtaAmUZzoI-8Dgy4",
  // },
];

/* ===================== COMPONENTS ===================== */

function Timeline({
  title,
  items,
}: {
  title: string;
  items: TimelineEvent[];
}) {
  return (
    <div>
      <p className="text-2xl sm:text-3xl pb-6">{title}</p>

      <div className="relative border-l-2 border-rose-200 ml-4">
        {items.map((event, idx) => (
          <motion.div
            key={idx}
            className="mb-8 ml-6 flex items-start gap-6 px-6 py-4 rounded-2xl bg-slate-900/80 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            {/* Timeline Dot */}
            <span className="absolute -left-5 top-4 w-4 h-4 bg-rose-200 rounded-full border-2 border-gray-950 drop-shadow-[0_0_20px_rgb(255,46,158)]" />

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-sm sm:text-lg font-semibold text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)]">
                {event.year} : {event.title}
              </h3>
              <p className="text-rose-100 mt-1 text-sm sm:text-base">
                {event.desc}
              </p>
            </div>

            {/* Logo */}
            {event.img && (
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
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
  );
}

/* ===================== MAIN ===================== */

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 px-4 sm:px-8 overflow-hidden min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/vc.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl  text-rose-100 drop-shadow-[0_0_20px_rgb(255,46,158)] mb-20 text-center">
          Get to know about me
        </h2>

        {/* 2 x 2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Timeline title="Story About School" items={school} />
          <Timeline title="Story About College" items={college} />
          <Timeline title="Part-time Work" items={partTime} />
          <Timeline title="Full-time Work" items={fullTime} />
        </div>
      </div>
    </section>
  );
}
