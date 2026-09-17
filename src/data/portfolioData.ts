import { WorkExperience, SkillItem, ProjectItem, ServiceItem } from '../types';

export const SITE_METADATA = {
  name: 'FROSH HUB',
  authorName: 'King-Frosh',
  tagline: 'Digital Technology Platform',
  title: 'Computer Science Graduate | IT Support Specialist | Web Developer',
  location: 'Nigeria / Remote Worldwide',
  email: 'contact@froshhub.tech',
  github: 'https://github.com/King-Frosh',
  linkedin: 'https://www.linkedin.com',
  phone: '+234 (Available on Request)',
  statusText: 'Open for IT Support Roles & Web Consulting Projects',
};

export const PROFESSIONAL_SUMMARY = 
  "A detail-oriented Computer Science graduate with hands-on experience in IT support and research consultancy. Combines strong analytical skills with a proven ability to multitask across technical and administrative functions. Adept at office management, graphics design, and web development, with a consistent record of delivering accurate, timely results in team driven environments.";

export const ABOUT_WRITEUP = {
  paragraph1:
    "FroshHub is a digital technology platform focused on creating practical, reliable, and user-friendly solutions that simplify everyday work and digital experiences.",
  paragraph2:
    "With a background in Computer Science, I bring a combination of technical knowledge, analytical thinking, creativity, and practical problem-solving to every project. My experience spans IT support, research and analysis, web design, graphics design, data analysis, and administrative support, allowing me to approach projects from both technical and user-focused perspectives.",
  paragraph3:
    "I am passionate about using technology to solve problems, improve processes, and create solutions that are both functional and easy to use. Whether it involves developing a website, analyzing information, designing digital content, or providing technical support, I focus on delivering accurate, timely, and quality results.",
  skillsList: [
    "Communication & Presentation",
    "Research & Analytical Thinking",
    "Graphics Design",
    "Computer Literacy",
    "Editing & Proofreading",
    "Data Analysis",
    "Web Design",
    "Microsoft Office Suite"
  ],
  conclusion:
    "FroshHub represents a commitment to learning, creativity, technology, and building solutions that make a meaningful difference."
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'briccs-int',
    role: 'IT / Technical Support Officer',
    company: 'BRICCS International Ideal Limited',
    duration: '2025 – Present',
    location: 'Nigeria',
    logo: '/briccs-logo.png',
    isCurrent: true,
    summary:
      'Spearheading technical operations, bulk SMS gateway monitoring, and Value-Added Services (VAS) infrastructure management across major Nigerian mobile network operators.',
    bulletPoints: [
      'Supported the operation and monitoring of bulk SMS and VAS delivery platforms, tracking message delivery rates and flagging errors for escalation.',
      'Assisted in the testing and QA of new VAS service features, logging bugs and verifying fixes on the platform.',
      'Coordinated with mobile network operators (Airtel, MTN, Glo, 9mobile) on technical issues including SMS error codes and Sender ID configurations.',
      'Maintained records of platform uptime, service logs, and client-facing delivery reports.'
    ],
    technologies: ['Bulk SMS Gateways', 'VAS Architecture', 'MTN / Airtel / Glo / 9mobile Interconnect', 'QA & Bug Tracking', 'System Logs Monitoring', 'Sender ID Management', 'PostgreSQL'],
    category: 'telecom'
  },
  {
    id: 'ibedc',
    role: 'IT / Technical Support Officer',
    company: 'Ibadan Electricity Distribution Company (IBEDC)',
    duration: 'Previous Role',
    location: 'Ibadan, Nigeria',
    isCurrent: false,
    summary:
      'Provided comprehensive end-user IT support, network administration, hardware troubleshooting, and enterprise administrative coordination in a high-volume utility environment.',
    bulletPoints: [
      'Provided technical support and ensured smooth day-to-day IT operations within the organization.',
      'Assisted in the management and maintenance of computing systems, networks, and office equipment.',
      'Produced and reviewed technical documents, reports, and correspondence using Microsoft Office Suite.',
      'Coordinated administrative tasks, contributing to efficient office management and workflow.'
    ],
    technologies: ['Network Troubleshooting', 'Hardware Maintenance', 'Windows Administration', 'Microsoft Office Suite', 'Technical Documentation', 'Office Management'],
    category: 'it-support'
  },
  {
    id: 'easytech',
    role: 'Research Associate / Scribe',
    company: 'Easytech Research Consult',
    duration: 'Research Consultancy',
    location: 'Nigeria',
    isCurrent: false,
    summary:
      'Delivered rigorous research consultancy, qualitative and desk-based data synthesis, professional scribing, and executive presentation design for corporate clients.',
    bulletPoints: [
      'Conducted desk-based research and synthesized findings into structured reports for client delivery.',
      'Served as a professional scribe, accurately recording, transcribing, and editing research outputs.',
      'Supported the design and layout of presentations and graphics materials for client engagements.',
      'Assisted with proof-reading and editorial review to ensure quality and consistency of all deliverables.'
    ],
    technologies: ['Desk Research', 'Professional Scribing', 'Data Synthesis', 'Graphics & Presentation Design', 'Editorial Review & Proofreading', 'Client Reporting'],
    category: 'research'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'comm-pres',
    name: 'Communication & Presentation',
    category: 'core',
    description: 'Articulating complex technical concepts to non-technical stakeholders, pitching solutions, delivering structured presentations, and cross-functional team coordination.',
    tools: ['PowerPoint', 'Keynote', 'Technical Scribing', 'Stakeholder Briefings'],
    proficiencyLevel: 'Expert',
    iconName: 'MessageSquare'
  },
  {
    id: 'research-analytics',
    name: 'Research & Analytical Thinking',
    category: 'analytical',
    description: 'Systematic desk-based research, hypothesis testing, root-cause diagnostics for IT issues, competitive benchmarking, and synthesizing complex information into actionable intelligence.',
    tools: ['Desk Research Methodologies', 'Root Cause Analysis', 'Literature Review', 'Structured Reporting'],
    proficiencyLevel: 'Expert',
    iconName: 'Search'
  },
  {
    id: 'graphics-design',
    name: 'Graphics Design',
    category: 'creative',
    description: 'Visual identity creation, marketing collateral, slide deck styling, digital assets, social media banners, and user-friendly interface assets.',
    tools: ['Figma', 'Adobe Photoshop', 'Canva', 'Vector Graphics', 'Branding Systems'],
    proficiencyLevel: 'Advanced',
    iconName: 'Palette'
  },
  {
    id: 'computer-literacy',
    name: 'Computer Literacy',
    category: 'technical',
    description: 'Comprehensive mastery of modern computing environments, operating systems (Windows, Linux), hardware maintenance, peripherals, system diagnostics, and cloud software.',
    tools: ['Windows OS', 'Linux CLI', 'Hardware Diagnostics', 'Peripheral Config', 'System Virtualization'],
    proficiencyLevel: 'Expert',
    iconName: 'Monitor'
  },
  {
    id: 'editing-proofreading',
    name: 'Editing & Proofreading',
    category: 'core',
    description: 'Meticulous grammatical, technical, and structural editorial review of enterprise reports, client deliverables, system documentation, and correspondence.',
    tools: ['Style Guides', 'Editorial QA', 'Grammarly', 'Document Versioning', 'Client Deliverable Polish'],
    proficiencyLevel: 'Expert',
    iconName: 'FileCheck'
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    category: 'analytical',
    description: 'Extracting, transforming, cleaning, and evaluating operational data, bulk message delivery metrics, financial reconciliations, and trend identification.',
    tools: ['Microsoft Excel (Formulas, Pivot Tables, Lookups)', 'PostgreSQL', 'Data Scrubbing', 'Spreadsheet Merging'],
    proficiencyLevel: 'Advanced',
    iconName: 'BarChart'
  },
  {
    id: 'web-design',
    name: 'Web Design & Development',
    category: 'technical',
    description: 'Crafting responsive, clean, and accessible web experiences using modern frontend frameworks, responsive CSS architectures, UI components, and API integration.',
    tools: ['HTML5 & CSS3', 'JavaScript / TypeScript', 'React & Next.js', 'Tailwind CSS', 'Vite & Git'],
    proficiencyLevel: 'Advanced',
    iconName: 'Globe'
  },
  {
    id: 'ms-office',
    name: 'Microsoft Office Suite',
    category: 'technical',
    description: 'Advanced utilization of Microsoft Word for technical reports, Excel for data models and reconciliations, PowerPoint for executive pitches, and Outlook for communication.',
    tools: ['Excel (Advanced)', 'Word (Technical Docs)', 'PowerPoint (Deck Design)', 'Outlook & OneDrive'],
    proficiencyLevel: 'Expert',
    iconName: 'Layout'
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'frosh-vas',
    title: 'FROSH-VAS Revenue & Delivery Console',
    subtitle: 'Bulk SMS & Telecommunications VAS Operations Platform',
    category: 'vas-telecom',
    description: 'A mission-critical operations dashboard built for monitoring telecommunication Value-Added Services (VAS), tracking message delivery success rates, and reconciling gross/net operator revenue.',
    longDescription: 'Designed to address real-world operational challenges in mobile telecommunications. It aggregates and audits transaction logs across Nigeria\'s tier-1 mobile network operators (MTN, Airtel, Glo, 9mobile). It provides instant visibility into delivery rates, highlights error codes for rapid escalation, manages Sender IDs, and equips finance teams with automated daily and monthly revenue share reports.',
    highlights: [
      'Multi-operator delivery tracking and error code diagnostics (Airtel, MTN, Glo, 9mobile)',
      'Service ID Registry with automated gross & net revenue calculation',
      'Transaction log inspection and high-volume dataset aggregation',
      'Real-time uptime and error rate monitoring with escalation triggers'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Drizzle ORM', 'Telecom Gateway APIs'],
    githubUrl: 'https://github.com/King-Frosh/FROSH-VAS',
    status: 'Active Production',
    badge: 'Flagship Telecom App',
    metrics: [
      { label: 'Telco Networks', value: '4 MNOs' },
      { label: 'Uptime Monitoring', value: '99.9%' },
      { label: 'Audit Speed', value: 'Sub-second' }
    ]
  },
  {
    id: 'frosh-merger',
    title: 'FROSH-MERGER (MergePress / SheetForge)',
    subtitle: 'Enterprise Spreadsheet Consolidator & File Optimizer',
    category: 'data',
    description: 'A high-performance utility designed to merge, clean, deduplicate, and optimize massive multi-operator Excel and CSV datasets into unified, audit-ready spreadsheets.',
    longDescription: 'Developed to eliminate hours of manual spreadsheet handling when combining operator logs and billing datasets. Features automatic header normalization, whitespace/newline flattening, empty column purging, index column stripping, and client-side ZIP bundle compression.',
    highlights: [
      'Automated multi-file spreadsheet merging with schema alignment',
      'Intelligent duplicate elimination and whitespace normalization',
      'Integrated in-browser client-side file compression utility',
      'Dark/Light modern UX designed for high-focus data analysts'
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'XLSX Parsing', 'JSZip / FileSaver'],
    githubUrl: 'https://github.com/King-Frosh/FROSH-MERGER',
    status: 'Open Source',
    badge: 'Popular Data Tool',
    metrics: [
      { label: 'Time Saved', value: '85%' },
      { label: 'Processing', value: '100% Client-Side' },
      { label: 'File Support', value: 'XLSX, CSV' }
    ]
  },
  {
    id: 'briccs-site',
    title: 'BRICCS International Corporate Portal',
    subtitle: 'Official Web Presence for Enterprise VAS & Messaging Provider',
    category: 'web',
    description: 'A modern, high-converting corporate website engineered for BRICCS International Ideal Limited to showcase enterprise messaging, VAS capabilities, and connectivity solutions.',
    longDescription: 'Built with modern frontend architecture to present enterprise solutions with high visual impact. Highlights include interactive service cards, transparent pricing calculators, client social proof, mobile-responsive layout, and seamless inquiry funnel.',
    highlights: [
      'Modern responsive design with dark and light theme support',
      'Interactive pricing calculator and enterprise service catalog',
      'Streamlined lead capture and corporate contact funnels',
      'Optimized performance score with zero layout shift'
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Custom CSS Architecture', 'Responsive UI', 'SEO Best Practices'],
    githubUrl: 'https://github.com/King-Frosh/BRICCS-SITE',
    status: 'Active Production',
    badge: 'Corporate Site',
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Device Support', value: 'Fully Responsive' },
      { label: 'Theme Modes', value: 'Light & Dark' }
    ]
  },
  {
    id: 'restaurant-builder',
    title: 'Restaurant Menu & Order Builder',
    subtitle: 'Interactive Point-of-Sale & Meal Customizer',
    category: 'web',
    description: 'A dynamic web application featuring real-time menu browsing, interactive meal customization, automated pricing calculations, and digital receipt generation.',
    longDescription: 'Created as an intuitive digital ordering engine for restaurants and food vendors. Users can customize toppings, review nutritional breakdowns, adjust quantities in real time, and generate itemized digital receipts ready for print or export.',
    highlights: [
      'Interactive item modal with ingredient and combo customizer',
      'Real-time cart state management with tax and discount calculators',
      'Instant digital receipt modal ready for printing or download',
      'Modern accessible user interface with smooth animations'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'State Management'],
    githubUrl: 'https://github.com/King-Frosh/restaurant-menu-order-builder',
    status: 'Completed',
    badge: 'Interactive Web App',
    metrics: [
      { label: 'State Sync', value: 'Instant' },
      { label: 'Checkout Flow', value: '1-Click Receipt' }
    ]
  },
  {
    id: 'research-consult',
    title: 'Easytech Research Synthesis & Scribe Engine',
    subtitle: 'Structured Reporting & Desk-Research Documentation System',
    category: 'tools',
    description: 'A methodical research compilation workflow designed to record, transcribe, cross-verify, and format executive intelligence reports and client presentations.',
    longDescription: 'Rooted in the hands-on scribing and research associate duties at Easytech Consult. Implements standardized editorial frameworks, citation verification, executive slide presentation layouts, and quality-control proofreading checklists.',
    highlights: [
      'Standardized desk research workflows and multi-source synthesis',
      'Editorial review checklists for zero-defect client deliverables',
      'Executive presentation template designs in PowerPoint and Word',
      'Client data confidentiality and structured records archive'
    ],
    technologies: ['MS Office Suite', 'Presentation Design', 'Research Methodology', 'Editorial QA', 'Data Scribing'],
    status: 'Completed',
    badge: 'Consultancy Framework',
    metrics: [
      { label: 'Accuracy Rate', value: '100%' },
      { label: 'Deliverables', value: 'Executive Grade' }
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'it-support',
    title: 'IT & Technical Operations Support',
    description: 'Ensuring business continuity with dependable IT diagnostics, hardware maintenance, network troubleshooting, and day-to-day computing systems management.',
    iconName: 'Server',
    deliverables: [
      'Hardware & software diagnostics and repairs',
      'Network connectivity & peripheral configuration',
      'System backups, updates, and security hygiene',
      'Helpdesk assistance & technical issue resolution'
    ]
  },
  {
    id: 'vas-telecom',
    title: 'VAS & Bulk SMS Operations',
    description: 'Monitoring telecommunication messaging platforms, managing Sender IDs, analyzing operator delivery rates, and diagnosing mobile network error codes.',
    iconName: 'Radio',
    deliverables: [
      'MNO Interconnect coordination (MTN, Airtel, Glo, 9mobile)',
      'Delivery rate monitoring & SLA tracking',
      'SMS error code escalation & root-cause analysis',
      'Sender ID configuration & QA testing'
    ]
  },
  {
    id: 'web-design-dev',
    title: 'Web Design & Frontend Development',
    description: 'Building modern, fast, responsive websites and web applications with clean code, intuitive user experiences, and search engine optimization.',
    iconName: 'Code',
    deliverables: [
      'Responsive web applications (React, Next.js, Vite)',
      'Landing pages and corporate portfolio portals',
      'UI/UX implementation with Tailwind CSS',
      'Performance tuning & cross-browser compatibility'
    ]
  },
  {
    id: 'data-automation',
    title: 'Data Analysis & Spreadsheet Automation',
    description: 'Consolidating disparate data streams into structured, actionable insights using advanced Excel formulas, pivot tables, and automated merge utilities.',
    iconName: 'FileSpreadsheet',
    deliverables: [
      'Automated multi-file Excel merging and deduplication',
      'Financial reconciliation and revenue share summaries',
      'Data cleaning, normalization, and validation',
      'Visual dashboards & executive KPI summaries'
    ]
  },
  {
    id: 'research-editorial',
    title: 'Research Consultancy & Editorial Review',
    description: 'Conducting in-depth desk research, serving as a professional scribe, and delivering publication-ready documentation with flawless proofreading.',
    iconName: 'BookOpen',
    deliverables: [
      'Desk-based research studies and market synthesis',
      'Accurate technical scribing and meeting transcripts',
      'Grammatical and structural proofreading for reports',
      'Executive slide presentation design & formatting'
    ]
  },
  {
    id: 'graphics-office',
    title: 'Graphics Design & Office Management',
    description: 'Creating high-impact visual graphics, digital collateral, branded materials, and streamlining administrative workflows for maximum productivity.',
    iconName: 'PenTool',
    deliverables: [
      'Branded digital graphics, logos, and banners',
      'Executive presentation decks and client pitches',
      'Professional document templates & forms',
      'Workflow coordination & administrative efficiency'
    ]
  }
];

export const CORE_PILLARS = [
  {
    title: 'Precision & Accuracy',
    description: 'Delivering meticulous, error-free results whether configuring telecommunication routes, verifying VAS fixes, or synthesizing executive research.',
    iconName: 'Target'
  },
  {
    title: 'Reliability & Uptime',
    description: 'Unwavering commitment to system stability, prompt incident resolution, proactive platform monitoring, and dependable technical support.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'User-Focused Solutions',
    description: 'Designing intuitive software interfaces, understandable documentation, and friction-free digital tools that make everyday work simpler.',
    iconName: 'Sparkles'
  },
  {
    title: 'Continuous Innovation',
    description: 'Combining Computer Science foundations with emerging web technologies and modern data tools to solve pressing operational challenges.',
    iconName: 'Cpu'
  }
];

export const STATS_HIGHLIGHTS = [
  { value: '4+', label: 'Mobile Network Operators', sub: 'MTN, Airtel, Glo, 9mobile' },
  { value: '99.9%', label: 'Platform Monitoring Uptime', sub: 'Real-time VAS & SMS SLA tracking' },
  { value: '100%', label: 'Commitment to Quality', sub: 'Accurate, timely, user-centered results' },
  { value: '3+', label: 'Industry Sectors', sub: 'Telecoms, Energy/Utility & Research' }
];
