export interface ServiceDetail {
  title: string;
  description: string;
  iconName: string;
  path: string;
  tagline: string;
  overview: string;
  features: string[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    title: "Intellectual Property Rights (IPR)",
    description: "Secure your creations, build brand value, and establish market monopoly with our comprehensive trademark, patent, copyright, and design registration services.",
    iconName: "ShieldAlert",
    path: "/services/ipr",
    tagline: "Protecting Your Inventions & Safeguarding Your Brand Equity",
    overview: "In today's highly competitive market, safeguarding intellectual property is vital for business success. KRR Innovations Pvt. Ltd. provides end-to-end IPR services ranging from initial search to final registration and protection. We bridge the gap between innovators, legal structures, and registration authorities.",
    features: [
      "Trademark Registration & Brand Protection",
      "Patent Filing & Patentability Searches (National & International)",
      "Copyright Registration for Software, Literature, & Artworks",
      "Design Registration for unique shapes, configurations & ornaments",
      "IP Portfolio Audit, Monitoring, & Strategic Consulting",
      "IPR Awareness Workshops and Training Programs for institutions"
    ],
    benefits: [
      "Legally block competitors from copying your unique innovations & brand assets.",
      "Increase the financial valuation of your company through registered IP assets.",
      "License or franchise your IP to create recurring royalty streams.",
      "Gain consumer trust by displaying registered marks and patent badges."
    ],
    process: [
      { step: "01", title: "Consultation & Search", desc: "We evaluate your concept, logo, or invention and run exhaustive searches to ensure uniqueness." },
      { step: "02", title: "Documentation & Drafting", desc: "Our experienced IP specialists draft patent specifications or compile trademark applications." },
      { step: "03", title: "Filing", desc: "We submit applications to the Controller General of Patents, Designs, and Trademarks." },
      { step: "04", title: "Prosecution & Approval", desc: "We handle office actions, reply to examination reports, and represent you until registration is granted." }
    ],
    faqs: [
      { question: "What is the difference between a Patent and a Trademark?", answer: "A Patent protects new, useful inventions, systems, and technical processes. A Trademark protects brand identifiers like company names, logos, slogans, and designs." },
      { question: "How long does Trademark registration take?", answer: "Trademark applications can be filed within 24 hours to obtain the 'TM' symbol. The absolute registration certificate usually takes between 6 to 12 months, subject to examinations and public opposition." },
      { question: "Why is patent drafting critical?", answer: "Patent drafting forms the legal boundaries of your invention. A poorly drafted patent can leave loopholes for competitors. Our technical experts ensure watertight claims." }
    ]
  },
  {
    title: "Technology Consultancy & Development",
    description: "Accelerate your growth. We research, design, and manufacture IoT-enabled devices, smart farming tech, and build enterprise software and automation systems.",
    iconName: "Code2",
    path: "/services/technology",
    tagline: "Engineering IoT Systems, Smart Agriculture & Enterprise Software Solutions",
    overview: "KRR Innovations Pvt. Ltd. is legally chartered to carry on the business of researching, designing, developing, and manufacturing Internet of Things (IoT) devices, information & communication technology (ICT) enabled devices, and electrical equipment. We build systems to foster smart farming, modern agriculture, smart irrigation, and aqua farming, as well as digital tools for healthcare, home care, and process automation.",
    features: [
      "Internet of Things (IoT) & Smart Enabled Device Development",
      "Smart Farming, Agri-Tech, Irrigation & Aqua-Culture Systems",
      "Healthcare & Home Care Automation Solutions",
      "Custom Software & Web Application Development (React, Next.js, Node.js)",
      "Mobile Applications (iOS & Android) with IoT Integration",
      "IT Strategy, Cloud Infrastructures, and Digital Transformation Consultancy"
    ],
    benefits: [
      "Reduce operating costs by automating manual, repetitive business processes.",
      "Achieve high user engagement with beautifully styled, responsive user interfaces.",
      "Ensure robust security with enterprise-grade encryption and architectural design.",
      "Scale operations seamlessly with modern cloud platforms and microservices."
    ],
    process: [
      { step: "01", title: "Requirement Discovery", desc: "We analyze your operations and define software requirements, wireframes, and UI flows." },
      { step: "02", title: "Architecture & Design", desc: "Our technical architects select the optimal tech stack and design database schemas." },
      { step: "03", title: "Agile Development", desc: "Our developers build features in iterative sprints, providing regular review demos." },
      { step: "04", title: "QA & Deployment", desc: "We run extensive unit, integration, and security testing before launching your app to cloud servers." }
    ],
    faqs: [
      { question: "What technologies do you specialize in?", answer: "We build modern applications using React, TypeScript, Next.js, Node.js, Python, Flutter, Tailwind CSS, and cloud platforms like AWS and Google Cloud." },
      { question: "Can you help digitize legacy manual processes?", answer: "Yes, our team specializes in business automation. We analyze your workflows, identify bottlenecks, and create custom web tools or integrations to optimize operations." },
      { question: "Do you offer post-deployment support?", answer: "We offer monthly maintenance, monitoring, security updates, and performance tuning contracts to ensure your systems run smoothly." }
    ]
  },
  {
    title: "Siri Events",
    description: "End-to-end management of industrial expos, MSME meets, business conferences, educational programs, and professional networking meetups.",
    iconName: "CalendarDays",
    path: "/services/events",
    tagline: "Connecting Businesses, Fostering Innovation & Building Communities",
    overview: "Siri Events is the premium events management division of KRR Innovations. We design and coordinate high-impact business conferences, expos, and startup summits that foster corporate partnerships, drive industry networking, and promote community growth.",
    features: [
      "Industrial Expos & MSME Trade Fairs",
      "National & International Business Conferences",
      "Startup Meetups, Pitch Days, & Investor Networking",
      "Corporate Team Building & Professional Workshops",
      "Educational Summits & Campus Technology Festivals",
      "Hybrid & Virtual Event Management Infrastructure"
    ],
    benefits: [
      "Boost brand visibility by showcasing your products directly to active industry buyers.",
      "Establish direct contacts with investors, mentors, and corporate partners.",
      "Deliver stress-free events with our complete vendor coordination and production teams.",
      "Acquire high-quality leads and customer insights in professional settings."
    ],
    process: [
      { step: "01", title: "Concept & Planning", desc: "We outline the theme, target audience, layout designs, and financial budgets." },
      { step: "02", title: "Marketing & Outreach", desc: "We run omni-channel campaigns to secure high-quality delegates, sponsors, and speakers." },
      { step: "03", title: "Production & Setup", desc: "We organize the physical venue setup, audio-visual components, and digital registrations." },
      { step: "04", title: "Execution", desc: "Our on-ground execution team runs the schedules, hosts, and networking sessions seamlessly." }
    ],
    faqs: [
      { question: "What size of events can you manage?", answer: "We manage events of all scales, ranging from intimate corporate board workshops (20-50 people) to massive industrial trade expos (5000+ visitors)." },
      { question: "Do you manage virtual or hybrid events?", answer: "Yes, we integrate virtual conferencing platforms with physical events, creating a hybrid experience where remote audiences can interact in real-time." },
      { question: "How do you help event sponsors?", answer: "We curate custom branding activations, VIP lounge networking slots, and digital banner setups to maximize ROI for sponsoring entities." }
    ]
  },
  {
    title: "Skill Development Training",
    description: "Nurturing the next generation of innovators. Professional training in entrepreneurship, leadership, digital skills, and startup mentoring.",
    iconName: "GraduationCap",
    path: "/services/training",
    tagline: "Empowering Students, Professionals & Leaders for the Future Economy",
    overview: "Continuous learning and professional skill enhancement are critical in the face of rapid technological advances. Our skill development training programs are carefully designed to bridge the academic-industry gap and equip individuals with real-world skills.",
    features: [
      "Entrepreneurship Development Programs (EDPs) for Aspiring Founders",
      "Leadership & High-Performance Team Management Training",
      "Digital Skills Mastery (Full Stack Dev, SEO, Digital Marketing)",
      "Hands-on Design Thinking & Innovation Workshops",
      "One-on-One Startup Mentoring and Pitch Coaching",
      "Institutional Faculty Development Programs (FDPs)"
    ],
    benefits: [
      "Bridge the practical knowledge gap to enhance job placement and performance.",
      "Cultivate an entrepreneurial mindset to successfully launch and fund new ventures.",
      "Earn industry-recognized certification credentials upon training completion.",
      "Join an exclusive alumni network of consultants, leaders, and startup founders."
    ],
    process: [
      { step: "01", title: "Skill-Gap Assessment", desc: "We consult with organizations or colleges to find exact skill shortages." },
      { step: "02", title: "Curriculum Customization", desc: "Our subject experts build hands-on curriculum modules and practical exercises." },
      { step: "03", title: "Interactive Delivery", desc: "We conduct sessions via workshops, live coding, case studies, and team sprints." },
      { step: "04", title: "Evaluation & Certification", desc: "Students complete capstone projects and undergo evaluations to receive credentials." }
    ],
    faqs: [
      { question: "Are your programs suitable for colleges?", answer: "Yes! We run specialized student bootcamps and faculty development programs aligned with national education frameworks to boost university innovation cultures." },
      { question: "Who are the trainers?", answer: "Our courses are taught by active industry practitioners, certified technology consultants, legal specialists, and experienced startup founders." },
      { question: "Is there placement assistance?", answer: "Yes, for our comprehensive technology and digital bootcamps, we connect top-performing students with our recruitment partners and local startups." }
    ]
  }
];
