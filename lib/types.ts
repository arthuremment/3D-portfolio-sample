export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number;
  category: string;
}

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
}