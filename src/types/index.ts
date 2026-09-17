export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  logo?: string;
  isCurrent?: boolean;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
  category: 'it-support' | 'telecom' | 'research';
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'core' | 'technical' | 'analytical' | 'creative';
  description: string;
  tools: string[];
  proficiencyLevel: 'Expert' | 'Advanced' | 'Proficient';
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'vas-telecom' | 'web' | 'data' | 'tools';
  description: string;
  longDescription: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  status: 'Completed' | 'Active Production' | 'Open Source';
  metrics?: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}
