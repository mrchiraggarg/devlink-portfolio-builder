export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  bio: string;
  avatar?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  projects: Project[];
  socials: Social[];
  blogs: Blog[];
  skills: string[];
}

export type ThemeType = 'card' | 'terminal' | 'minimal';

export interface Theme {
  id: ThemeType;
  name: string;
  description: string;
  preview: string;
}