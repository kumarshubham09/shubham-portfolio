// Resume data for Shubham Kumar - Frontend Developer
// Sourced from public/Shubham_Kumar_Resume_Frontend_Developer.pdf

export const profile = {
  name: 'Shubham Kumar',
  roles: [
    'Frontend Developer',
    'React.js & Next.js Specialist',
    'TypeScript & JavaScript Engineer',
    'UI/UX & Web Performance Enthusiast',
  ],
  tagline:
    'Frontend Developer with 1+ year of production experience building clean, semantic, standards-based web interfaces with HTML5, CSS3, JavaScript, React.js, Next.js and TypeScript.',
  location: 'New Delhi, India',
  email: 'shubham.kumar.frontend@gmail.com',
  phone: '+91-9262919936',
  resumeUrl: '/Shubham_Kumar_Resume_Frontend_Developer.pdf',
  avatar: '/avatar.jpg',
  // Hero badge + contact card par dikhta hai, zarurat ho to badal do
  status: 'Open to new opportunities',
  responseTime: 'Within a day or two',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shubham-kumar-437380253', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com/kumarshubham09', icon: 'github' },
    { label: 'HackerRank', url: 'https://www.hackerrank.com/shubhamjma07?hr_r=1', icon: 'hackerrank' },
  ],
};

export const about = {
  paragraphs: [
    'Frontend Developer with 1+ year of production experience building clean, semantic, standards-based web interfaces with HTML5, CSS3 and JavaScript, alongside React.js, Next.js and TypeScript.',
    'Focused on modular, reusable code architecture, web performance and SEO best practices, and cross-browser reliability. Comfortable acting as a technical point of contact across designers, business analysts and backend engineers in Agile/Scrum, sprint-based teams — gathering requirements, executing, and delivering features on schedule.',
    'Actively engaged in problem-solving and competitive programming with a 5-Star rating on HackerRank and over 200+ algorithmic problems solved on LeetCode.',
  ],
  stats: [
    { value: '1+ Yr', label: 'Production Experience' },
    { value: '15+', label: 'Production UI Components' },
    { value: '40%', label: 'Page Speed Improvement' },
    { value: '200+', label: 'LeetCode Problems Solved' },
  ],
};

export const coreStrengths = [
  {
    title: 'Clean, Semantic HTML5 & CSS3',
    description: 'Strong focus on web standards, accessible markup, and cross-browser compatibility verified through manual and cross-device testing.',
    tag: 'Web Standards',
  },
  {
    title: 'Component-Driven Architecture',
    description: 'Built shared, reusable React component and styling systems that cut new page development time by 35% with modularity and reusability.',
    tag: 'Modularity',
  },
  {
    title: 'SCSS Modules & Tailwind CSS',
    description: 'Deep pre-processor experience with SCSS Modules (Sass syntax) paired with Tailwind CSS for scalable, maintainable styling systems.',
    tag: 'Modern CSS',
  },
  {
    title: 'Performance & Lighthouse SEO',
    description: 'Lazy loading, code splitting, asset compression, and Next.js SSR/SSG driving 40% faster load times and 30% SEO gains.',
    tag: 'Speed & SEO',
  },
  {
    title: 'Strong JavaScript & TypeScript',
    description: 'Solid ES6+ fundamentals applied through React.js and TypeScript in production; equally comfortable working in vanilla JS and DOM contexts.',
    tag: 'Core JS/TS',
  },
  {
    title: 'Agile & Cross-Functional Teamwork',
    description: 'Technical touchpoint between UX designers, BAs, and backend engineers across 10+ Agile release cycles from specs to deployment.',
    tag: 'Agile / Scrum',
  },
  {
    title: 'Testing & Quality Discipline',
    description: 'Rigorous manual and cross-browser testing, ESLint standards, and structured code reviews with zero critical production incidents.',
    tag: 'QA & Review',
  },
];

export const skills = [
  {
    category: 'Markup & Styling',
    items: [
      { name: 'HTML5 (Semantic & Accessible)', level: 95 },
      { name: 'CSS3 & Responsive Design', level: 95 },
      { name: 'SCSS Modules (Sass Syntax)', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Cross-browser Compatibility', level: 92 },
    ],
  },
  {
    category: 'Scripting & Languages',
    items: [
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'TypeScript', level: 86 },
      { name: 'Python', level: 78 },
      { name: 'Java & C++ (DSA & OOP)', level: 82 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React.js', level: 94 },
      { name: 'Next.js (SSR / SSG)', level: 88 },
      { name: 'Node.js', level: 80 },
      { name: 'Django REST Framework & MySQL', level: 75 },
    ],
  },
  {
    category: 'Testing, QA & Core Concepts',
    items: [
      { name: 'Manual & Cross-Browser Testing', level: 92 },
      { name: 'Performance Optimization & Lighthouse', level: 94 },
      { name: 'SEO Best Practices', level: 90 },
      { name: 'ESLint & Code Review Discipline', level: 90 },
      { name: 'REST API Integration', level: 92 },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code & Chrome DevTools', level: 94 },
      { name: 'Figma (Design Handoff)', level: 85 },
      { name: 'Linux / Terminal', level: 80 },
      { name: 'Vercel / Netlify Deployments', level: 88 },
    ],
  },
];

export const services = [
  {
    icon: '⚡',
    title: 'Web Performance & Lighthouse SEO',
    text: 'Code splitting, asset compression, lazy loading, and Next.js SSR/SSG driving 40% faster load times and 30% SEO gains.',
  },
  {
    icon: '🧩',
    title: 'Component-Driven Architecture',
    text: 'Shared, reusable React component systems with SCSS Modules and Tailwind CSS that reduce new page development time by 35%.',
  },
  {
    icon: '🎨',
    title: 'Responsive & Semantic Markup',
    text: 'Pixel-perfect, standards-based HTML5 & CSS3 interfaces built from Figma specs with 100% cross-browser reliability.',
  },
  {
    icon: '🔗',
    title: 'REST API Integration & Validation',
    text: 'Connecting client interfaces with REST endpoints, robust client-side validation, error handling, and smooth state updates.',
  },
  {
    icon: '🖥️',
    title: 'Full Stack & Admin Portals',
    text: 'Building responsive enterprise dashboards and CRM portals with React.js, Node.js, Django, and MySQL schemas.',
  },
  {
    icon: '🤝',
    title: 'Agile Delivery & Code Quality',
    text: 'Collaboration across bi-weekly Agile/Scrum sprints, ESLint adherence, and disciplined code reviews with zero critical production bugs.',
  },
];

export const projects = [
  {
    title: 'ProX PC Official Website',
    subtitle: 'Public-Facing E-Commerce Website',
    period: 'Aug 2025 – Present',
    description:
      "Led frontend development of the company's public-facing e-commerce website (proxpc.com), serving 5,000+ monthly visitors with 99.9% uptime across all major browsers and devices.",
    highlights: [
      'Serving 5,000+ monthly visitors with 99.9% uptime across all major browsers and devices.',
      'Built a shared, reusable component and styling system (SCSS + Tailwind CSS), cutting new page development time by 35%.',
      'Implemented responsive, cross-device inquiry forms with client-side validation, increasing form completion rate by 20%.',
      'Improved page load speed by 40% and SEO performance by 30% through image optimization and code splitting — verified via Google Lighthouse audits.',
    ],
    tags: ['React.js', 'SCSS Modules', 'Tailwind CSS', 'Performance & SEO', 'Lighthouse Audits', 'E-Commerce'],
    category: 'Frontend',
    live: 'https://proxpc.com',
    code: 'https://github.com/kumarshubham09',
    // Screenshots: files ko public/projects/ mai rakho aur paths yaha list karo.
    // Pehli image cover banti hai; ek se zyada ho to card mai gallery (arrows + dots) dikhti hai.
    images: ['/projects/prox-website.png', '/projects/prox-gpu-servers.jpg'],
    color: '#3b82f6',
    isLiveUrl: true,
  },
  {
    title: 'ProX – Product & CRM Admin Portal',
    subtitle: 'Lead Tracking & IT Hardware Management Portal',
    period: 'June 2026 – Present',
    description:
      'Developed a full-stack admin and CRM web application using React.js, Node.js, Django and MySQL to manage leads, products, pricing and blog content for an IT hardware business.',
    highlights: [
      'Designed the MySQL schema and REST APIs (Django REST Framework) for CRUD operations across 880+ products in categories like CPU, GPU, RAM, SSD, HDD, Motherboard and PSU.',
      'Built a Lead Management module capturing customer details (name, mobile, email), device requirements and workstation technical specs.',
      'Implemented pricing management with inline cost-price editing and auto-calculated margin, GST and selling price.',
      'Developed search, status filters, pagination and bulk Excel import/export for product listings, with image upload support for products like cabinets.',
      'Created a Blog Publishing module to publish content live on the company website.',
      'Built a responsive React.js UI with sidebar navigation, secure login/logout authentication, Call History and User Tracker modules for sales activity monitoring.',
    ],
    tags: ['React.js', 'Node.js', 'Django REST Framework', 'MySQL', 'Admin Dashboard', 'CRM'],
    category: 'Full Stack',
    live: '#',
    code: 'https://github.com/kumarshubham09',
    images: [],
    color: '#7c5cff',
    isLiveUrl: false,
  },
];

export const experience = [
  {
    type: 'work',
    title: 'Junior Frontend Developer',
    org: 'ProX Infotech Pvt. Ltd.',
    location: 'New Delhi',
    period: 'March 2025 – Present',
    summary:
      'Promoted from Frontend Developer Intern within 6 months based on consistent delivery, code quality, and measurable impact on production systems.',
    points: [
      'Promoted from Frontend Developer Intern within 6 months based on consistent delivery, code quality, and measurable impact on production systems.',
      'Built and maintained 15+ production-grade UI components and 20+ responsive web forms using HTML5, CSS3, SCSS Modules, Tailwind CSS, React.js and TypeScript — reducing UI bug reports by 40% and form submission errors by 30%.',
      'Converted UI/UX design specifications into clean, semantic, cross-browser-compatible markup, ensuring consistent rendering across 5 internal and client-facing workflows.',
      'Identified and resolved usability and interface issues in existing screens through systematic debugging and code review, improving overall interface quality across 2 sprint cycles.',
      'Integrated 10+ REST API endpoints with client-side validation and error handling, cutting API-related frontend issues by 25%.',
      'Collaborated directly with UX designers, business analysts and backend engineers in bi-weekly Agile/Scrum sprints, delivering features on time across 10+ release cycles with zero critical production incidents.',
    ],
  },
  {
    type: 'work',
    title: 'Frontend Developer Intern',
    org: 'ProX Infotech Pvt. Ltd.',
    location: 'New Delhi',
    period: 'Sept 2024 – Feb 2025',
    summary:
      'Contributed to core UI components, responsive layout implementations, and API integrations leading to an accelerated full-time promotion in 6 months.',
    points: [
      'Developed responsive UI components using React.js, HTML5, and CSS3/SCSS.',
      'Assisted in integrating client-side validation for lead generation forms and user flows.',
      'Maintained consistent code quality, passing ESLint and team peer reviews, leading to early promotion to Junior Frontend Developer.',
    ],
  },
  {
    type: 'education',
    title: 'Master of Computer Applications (MCA)',
    org: 'Birla Institute of Technology, Mesra (Lalpur Campus)',
    location: 'Ranchi, Jharkhand',
    period: '2022 – 2024',
    grade: 'CGPA: 7.93',
    summary:
      'Birla Institute of Technology, Mesra (Lalpur Campus), Ranchi, Jharkhand · CGPA: 7.93 · 2022–2024',
    points: [
      'Degree: Master of Computer Applications (MCA)',
      'Institution: Birla Institute of Technology, Mesra (Lalpur Campus), Ranchi, Jharkhand',
      'Academic Record: CGPA 7.93 (2022–2024)',
      'Key focus: Web Application Architectures, Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms.',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'T.N.B. College',
    location: 'Bhagalpur, Bihar',
    period: '2017 – 2020',
    grade: 'Percentage: 76.28%',
    summary:
      'T.N.B. College, Bhagalpur, Bihar · 76.28% · 2017–2020',
    points: [
      'Degree: Bachelor of Computer Applications (BCA)',
      'Institution: T.N.B. College, Bhagalpur, Bihar',
      'Academic Record: 76.28% (2017–2020)',
      'Core foundations: Computer Science fundamentals, C/C++, Java, Data Structures, Software Engineering.',
    ],
  },
];

export const faq = [
  {
    q: 'What kind of roles are you looking for?',
    a: 'Frontend developer roles centred on React.js, Next.js and TypeScript, on product teams that care about performance, clean UI and shipping on schedule.',
  },
  {
    q: 'What does your core stack look like?',
    a: 'Semantic HTML5, CSS3, SCSS Modules and Tailwind CSS for styling; JavaScript (ES6+) and TypeScript with React.js and Next.js for the app layer. Git, Chrome DevTools, Figma handoff and Vercel/Netlify round it out.',
  },
  {
    q: 'Can you work beyond the frontend?',
    a: 'Yes. The ProX admin and CRM portal is full-stack: I designed the MySQL schema and built REST APIs with Django REST Framework alongside Node.js and a React.js UI.',
  },
  {
    q: 'How do you approach performance?',
    a: 'Lazy loading, code splitting, image and asset compression, and Next.js SSR/SSG, all verified with Google Lighthouse. On proxpc.com that delivered 40% faster page loads and a 30% SEO improvement.',
  },
  {
    q: 'How do you work with a team?',
    a: 'In bi-weekly Agile/Scrum sprints, as a technical point of contact between UX designers, business analysts and backend engineers. 10+ release cycles so far with zero critical production incidents.',
  },
  {
    q: 'Where are you based?',
    a: 'New Delhi, India. Email is the quickest way to reach me, and I usually reply within a day or two.',
  },
];

export const achievements = [
  {
    platform: 'HackerRank',
    title: '5-Star Java & SQL, 4-Star Problem Solving',
    metric: 'Top 10%',
    metricLabel: 'Participants Globally',
    description:
      'Earned 5-Star ratings in Java and SQL, and a 4-Star rating in Problem Solving on HackerRank — placing in the top 10% of participants globally.',
    badges: ['5★ Java', '5★ SQL', '4★ Problem Solving', 'Top 10% Global'],
    url: 'https://www.hackerrank.com/shubhamjma07?hr_r=1',
    icon: '⭐',
  },
  {
    platform: 'LeetCode',
    title: '200+ Problems Solved & 30+ Day Streak',
    metric: '200+',
    metricLabel: 'DSA Problems Solved',
    description:
      'Solved 200+ problems on LeetCode across Arrays, Trees, Dynamic Programming and Graph algorithms, earning 2 skill badges and maintaining a 30+ day problem-solving streak.',
    badges: ['Arrays', 'Trees', 'Dynamic Programming', '2 Skill Badges', '30+ Day Streak'],
    url: 'https://leetcode.com',
    icon: '💡',
  },
  {
    platform: 'Production Impact',
    title: 'Lighthouse Performance & Production Metrics',
    metric: '40% / 30%',
    metricLabel: 'Speed & SEO Boost',
    description:
      'Cut page load times by 40% and boosted SEO by 30% verified via Google Lighthouse audits at ProX Infotech; built reusable system reducing new page build time by 35%.',
    badges: ['40% Faster Loads', '30% SEO Gains', '35% Dev Time Cut', '99.9% Uptime'],
    icon: '🚀',
  },
];
