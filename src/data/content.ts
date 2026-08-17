import { Job, NavItem, Person, School, SkillGroup, Social } from "@/types/types";

export const person: Person = {
  name: "Ahmed Škulj",
  initials: "AŠ",
  role: "Frontend Developer",
  location: "Bosnia and Herzegovina",
  email: "skuljahmed00@gmail.com",
  photo: "/ahmed_skulj_photo.jpg",
  photoAlt: "Portrait of Ahmed Škulj",
  intro:
    "I build fast, accessible interfaces with React and Next.js — from player platforms used by thousands to data visualisation tools and reservation systems.",
  about: [
    "I'm a software engineer with a Bachelor's degree in Software Engineering and five years of professional experience across agencies, startups and product teams.",
    "Most of my work sits on the frontend: rebuilding legacy pages into modern Next.js apps, leading feature work end to end, and reviewing pull requests so quality and deadlines both survive. I've mentored juniors and interns at two companies, and I like that part as much as the code.",
  ],
  hobbies: ["Football", "Basketball", "Gaming"],
};

export const socials: Social[] = [
  { label: "GitHub", handle: "ahmedskulj00", href: "https://github.com/ahmedskulj00" },
  { label: "LinkedIn", handle: "ahmedskulj", href: "https://www.linkedin.com/in/ahmedskulj/" },
  { label: "Instagram", handle: "ahmedskulj00", href: "https://www.instagram.com/ahmedskulj00/" },
];

export const experience: Job[] = [
  {
    company: "ZenDev",
    role: "Software Engineer",
    period: "Nov 2025 — Present",
    current: true,
    points: [
      "Work with an insurance industry client on legacy codebases, focused on performance and long-term maintainability.",
    ],
  },
  {
    company: "Pickleball.com",
    role: "Software Engineer",
    period: "Mar 2024 — Oct 2025",
    points: [
      "Led the Players platform: modern redesign, stats and video pages, and data accuracy across the section.",
      "Led a major frontend project for the reservations system, covering architecture, implementation and performance.",
      "Refactored legacy player code onto the Next.js App Router, and mentored junior developers through reviews and pairing.",
    ],
  },
  {
    company: "Social Explorer",
    role: "Software Developer",
    period: "Sep 2022 — Feb 2024",
    points: [
      "Built features for Vizualist, an app for creating charts, surveys, maps, templates and data stories.",
      "Shipped an image parser for stories that gave screen reader users proper image descriptions.",
      "Worked directly with the AARP client — development, PR reviews and communication — alongside intern mentoring.",
    ],
  },
  {
    company: "Viberate",
    role: "Software Developer",
    period: "May 2022 — Jul 2022",
    points: [
      "Worked on the social side of a global music artist database, integrating Instagram and Spotify data.",
      "Used SQL to extend and correct the artist dataset in an English-speaking international team.",
    ],
  },
  {
    company: "Purple Key",
    role: "Junior Software Developer",
    period: "Dec 2021 — May 2022",
    points: [
      "Built landing pages in React and CSS at a creative agency, and picked up a lot of UX/UI along the way.",
      "Designed and built the company's new homepage, and converted a WordPress site into a fully customisable React app.",
    ],
  },
  {
    company: "Mistral Technologies",
    role: "Junior Software Developer",
    period: "Aug 2021 — Nov 2021",
    points: [
      "First professional project: an insurance platform built on microservices, where I worked on the React frontend.",
      "Learned Agile and JIRA, and wrote unit tests that pushed me toward properly reusable components.",
    ],
  },
];

export const education: School[] = [
  {
    school: "University of Zenica",
    field: "Software Engineering, Bachelor's Degree",
    period: "Oct 2019 — Jul 2022",
    place: "Zenica",
  },
  {
    school: 'Grammar School "Muhsin Rizvić"',
    field: "General programme",
    period: "Sep 2015 — Jun 2019",
    place: "Kakanj",
  },
];

export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    group: "Backend & data",
    items: ["Node.js", "MongoDB", "SQL", "C++"],
  },
  {
    group: "Ways of working",
    items: ["Git", "Code review", "Unit testing", "Agile / JIRA", "Mentoring"],
  },
];

export const languages: string[] = ["Bosnian — native", "English — professional"];

export const nav: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
