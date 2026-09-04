export interface PortfolioData {
  meta: Meta;
  market_positioning_notes: MarketPositioningNotes;
  summary: string;
  skills: Skills;
  projects: Project[];
  freelance_and_client_work: ClientWork[];
  performance_marketing: PerformanceMarketing;
  development: Development;
  experience: Experience[];
  education: Education[];
  certifications: string[];
}

export interface Meta {
  name: string;
  title: string;
  tagline: string;
  location: string;
  contact: Contact;
  positioning: string;
}

export interface Contact {
  phone: string;
  email: string;
  linkedin: string;
  portfolio_site_marketing_track: string;
  portfolio_site_primary: string;
}

export interface MarketPositioningNotes {
  key_findings: string[];
  how_this_portfolio_responds: string;
}

export interface Skills {
  languages_and_analysis: string[];
  ml_and_generative_ai: string[];
  bi_data_and_cloud: string[];
  development: string[];
  performance_marketing: string[];
}

export interface Project {
  id: string;
  name: string;
  type: string;
  category: string;
  problem: string;
  solution: string;
  tech_stack: string[];
  status: string;
  code_link: string;
  demo_link?: string;
}

export interface ClientWork {
  id: string;
  client: string;
  industry?: string;
  engagement_status: string;
  work_delivered: string;
  in_progress?: string;
  growth_plan_illustrative?: GrowthPlan;
  tech_stack: string[];
}

export interface GrowthPlan {
  disclaimer: string;
  funnel: string;
  simulated_projections: Record<string, any>;
  planned_dashboard: string;
}

export interface PerformanceMarketing {
  rationale: string;
  certifications: string[];
  in_progress: string[];
  applied_work: string;
}

export interface Development {
  rationale: string;
  full_stack_web: string[];
  mobile: string[];
  ai_integration: string;
  currently_deepening: string[];
}

export interface Experience {
  role: string;
  org: string;
  location?: string;
  dates: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  dates: string;
  grade: string;
}
