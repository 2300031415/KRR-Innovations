export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  iconName: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export const statsData: StatItem[] = [
  { value: "50+", label: "Successful Projects", sublabel: "Consulting & Dev Projects Delivered", iconName: "Layers" },
  { value: "100%", label: "Client Satisfaction", sublabel: "Highly rated consultancy & execution", iconName: "Smile" },
  { value: "4", label: "Core Divisions", sublabel: "IPR, Tech, Events & Skill Training", iconName: "Grid" },
  { value: "2021", label: "Established Year", sublabel: "Incubating ideas into global businesses", iconName: "Calendar" }
];

export const valuesData: ValueItem[] = [
  {
    title: "Innovation",
    description: "We constantly search for creative and modern approaches to solve business and technology bottlenecks.",
    iconName: "Lightbulb"
  },
  {
    title: "Integrity",
    description: "Transparent dealings, ethical advisory, and watertight confidentiality structures for all intellectual property.",
    iconName: "ShieldCheck"
  },
  {
    title: "Professionalism",
    description: "Dedicated teams, structured delivery milestones, and clear communications at every stage of collaboration.",
    iconName: "UserCheck"
  },
  {
    title: "Quality",
    description: "Refusing to compromise on code excellence, patent drafting rigor, or corporate event safety standards.",
    iconName: "Award"
  },
  {
    title: "Growth",
    description: "Propelling start-ups, students, and businesses upward through actionable knowledge and robust toolsets.",
    iconName: "TrendingUp"
  },
  {
    title: "Customer Commitment",
    description: "Building long-term client relationships through reliable support, maintenance, and responsive support structures.",
    iconName: "Heart"
  }
];

export const timelineData: TimelineItem[] = [
  {
    year: "2021",
    title: "Inception & Vision setup",
    description: "KRR Innovations Pvt. Ltd. was founded with the aim to provide affordable consultancy services to local businesses, start-ups, and innovators."
  },
  {
    year: "2022",
    title: "IPR and Event Launch",
    description: "Formed dedicated divisions for Intellectual Property Rights registration, helping local inventors patent their software and brand items."
  },
  {
    year: "2023",
    title: "Technology Advisory Expansion",
    description: "Started offering full-scale custom web, mobile, and automation solutions, taking early-stage ideas from layout design to deployment."
  },
  {
    year: "2024",
    title: "Academic & Institutional Training",
    description: "Launched campus innovation cells and faculty development training, teaching entrepreneurship skills to over 1000+ professionals and students."
  },
  {
    year: "2025",
    title: "Cross-Scale Enterprise Service",
    description: "Expanded portfolio to support scaleups and MSMEs with end-to-end legal filing, technology audits, and large-scale industrial expo coordination."
  }
];

export const featuresData: FeatureItem[] = [
  {
    title: "Innovation Driven",
    description: "We bring fresh, pioneering methodologies to your technology and business models to stay ahead.",
    iconName: "Cpu"
  },
  {
    title: "Experienced Professionals",
    description: "Our legal consultants, software architects, and coordinators have decades of verified industry expertise.",
    iconName: "Users"
  },
  {
    title: "End-to-End Support",
    description: "We handle everything from initial drafts, code architectures, designs, to final deployments and filings.",
    iconName: "Activity"
  },
  {
    title: "Startup Friendly",
    description: "Offering flexible MVPs, legal protections, and strategic coaching tailored specifically to new ventures.",
    iconName: "Rocket"
  },
  {
    title: "Business Consulting",
    description: "Detailed analysis of your processes to uncover efficiency bottlenecks and growth opportunities.",
    iconName: "Briefcase"
  },
  {
    title: "Technology Expertise",
    description: "Building applications on top of the latest, secure tech stacks like React, Next.js, and Cloud Infrastructure.",
    iconName: "Laptop"
  },
  {
    title: "Reliable Services",
    description: "A proven track record of successful filings, event management, and application uptime guarantees.",
    iconName: "BadgeCheck"
  },
  {
    title: "Customer Satisfaction",
    description: "Client relations are our top priority. We listen, adapt, and build structures matching your feedback.",
    iconName: "ThumbsUp"
  }
];
