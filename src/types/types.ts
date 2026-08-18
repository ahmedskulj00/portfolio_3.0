export type SocialLabel = "GitHub" | "LinkedIn" | "Instagram";

export interface Person {
  name: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  photo: string;
  photoAlt: string;
  intro: string;
  about: string[];
  hobbies: string[];
}

export interface Social {
  label: SocialLabel;
  handle: string;
  href: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
}

export interface School {
  school: string;
  field: string;
  period: string;
  place: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface NavItem {
  id: string;
  label: string;
}