export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  duration: string;
  level: string;
  icon: string;
  color: string;
  highlights: string[];
  curriculum: { module: string; topics: string[] }[];
  outcomes: string[];
  category: string;
}

export const courses: Course[] = [
  {
    slug: "business-analyst",
    title: "Business Analyst Training",
    shortTitle: "Business Analyst",
    description:
      "Master the skills to bridge the gap between business needs and technology solutions. Learn requirements gathering, process modeling, and stakeholder management.",
    longDescription:
      "Our Business Analyst Training program equips you with the tools and techniques used by top BAs in the industry. From requirements elicitation to Agile methodologies, you'll gain hands-on experience through real-world case studies.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    icon: "Briefcase",
    color: "from-blue-500 to-indigo-600",
    category: "Business",
    highlights: [
      "Industry-recognized certification preparation",
      "Live project experience",
      "Resume & interview coaching",
      "100% placement assistance",
    ],
    curriculum: [
      {
        module: "Business Analysis Fundamentals",
        topics: [
          "BA roles & responsibilities",
          "Business process modeling",
          "Stakeholder identification",
          "Requirements elicitation techniques",
        ],
      },
      {
        module: "Requirements Engineering",
        topics: [
          "Functional & non-functional requirements",
          "Use cases & user stories",
          "BRD & FRD documentation",
          "Requirements traceability matrix",
        ],
      },
      {
        module: "Agile & Scrum",
        topics: [
          "Agile methodology",
          "Scrum framework",
          "Sprint planning & retrospectives",
          "Product backlog management",
        ],
      },
      {
        module: "Tools & Techniques",
        topics: ["JIRA", "Confluence", "MS Visio", "SQL basics for BAs"],
      },
    ],
    outcomes: [
      "Conduct effective stakeholder interviews",
      "Create professional BRD/FRD documents",
      "Work in Agile/Scrum teams",
      "Ready for BA roles in IT companies",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development Training",
    shortTitle: "Web Development",
    description:
      "Learn modern web development from scratch. Build stunning, responsive websites with HTML, CSS, JavaScript, and modern frameworks.",
    longDescription:
      "A comprehensive web development course that takes you from basics to building full-featured websites. Ideal for beginners and those looking to formalize their web skills.",
    duration: "4 Months",
    level: "Beginner",
    icon: "Globe",
    color: "from-green-500 to-teal-600",
    category: "Development",
    highlights: [
      "Build 5+ real-world projects",
      "Hands-on coding every session",
      "GitHub portfolio setup",
      "Job-ready in 4 months",
    ],
    curriculum: [
      {
        module: "HTML & CSS Fundamentals",
        topics: [
          "Semantic HTML5",
          "CSS3 & Flexbox",
          "CSS Grid",
          "Responsive design",
        ],
      },
      {
        module: "JavaScript Essentials",
        topics: [
          "ES6+ features",
          "DOM manipulation",
          "Async/Await & Promises",
          "Fetch API",
        ],
      },
      {
        module: "Version Control & Tools",
        topics: [
          "Git & GitHub",
          "VS Code setup",
          "Browser DevTools",
          "Deployment basics",
        ],
      },
      {
        module: "Capstone Project",
        topics: [
          "Full website build",
          "Performance optimization",
          "SEO basics",
          "Portfolio presentation",
        ],
      },
    ],
    outcomes: [
      "Build fully responsive websites",
      "Write clean, maintainable JavaScript",
      "Deploy projects to the web",
      "Ready for junior frontend roles",
    ],
  },
  {
    slug: "java-fullstack",
    title: "Java Full Stack Development",
    shortTitle: "Java Full Stack",
    description:
      "Become a complete Java developer. Master Spring Boot for the backend and React for the frontend, and build enterprise-grade applications.",
    longDescription:
      "This rigorous program covers the entire Java ecosystem — from core Java fundamentals to building microservices with Spring Boot and modern UIs with React.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    icon: "Code",
    color: "from-orange-500 to-red-600",
    category: "Development",
    highlights: [
      "Core Java to Spring Boot",
      "REST API development",
      "Database integration",
      "Real-time project experience",
    ],
    curriculum: [
      {
        module: "Core Java",
        topics: [
          "OOP concepts",
          "Collections framework",
          "Exception handling",
          "Multithreading",
        ],
      },
      {
        module: "Spring Framework",
        topics: [
          "Spring Boot",
          "Spring MVC",
          "Spring Security",
          "Spring Data JPA",
        ],
      },
      {
        module: "Frontend with React",
        topics: [
          "React fundamentals",
          "Hooks & state management",
          "API integration",
          "Material UI",
        ],
      },
      {
        module: "Database & Deployment",
        topics: [
          "MySQL & PostgreSQL",
          "Hibernate ORM",
          "Docker basics",
          "AWS deployment",
        ],
      },
    ],
    outcomes: [
      "Build enterprise Java applications",
      "Design RESTful APIs",
      "Integrate frontend with backend",
      "Ready for full-stack Java roles",
    ],
  },
  {
    slug: "mern-stack",
    title: "MERN Stack Development",
    shortTitle: "MERN Stack",
    description:
      "Master the most in-demand JavaScript stack. Build full-stack web apps with MongoDB, Express.js, React, and Node.js.",
    longDescription:
      "The MERN stack is powering thousands of startups and enterprises. This course gives you deep expertise in every layer — from database to UI — using JavaScript throughout.",
    duration: "5 Months",
    level: "Intermediate",
    icon: "Layers",
    color: "from-purple-500 to-pink-600",
    category: "Development",
    highlights: [
      "Full JavaScript stack",
      "Build 3 complete apps",
      "Authentication & authorization",
      "Cloud deployment",
    ],
    curriculum: [
      {
        module: "MongoDB & Database Design",
        topics: [
          "NoSQL concepts",
          "MongoDB CRUD",
          "Schema design",
          "Mongoose ODM",
        ],
      },
      {
        module: "Node.js & Express.js",
        topics: [
          "Node.js runtime",
          "Express routing",
          "Middleware",
          "REST API design",
        ],
      },
      {
        module: "React.js",
        topics: [
          "Components & props",
          "State & lifecycle",
          "Redux Toolkit",
          "React Router",
        ],
      },
      {
        module: "Fullstack Integration",
        topics: [
          "JWT authentication",
          "File uploads",
          "WebSockets",
          "Vercel & Render deployment",
        ],
      },
    ],
    outcomes: [
      "Build and deploy full MERN apps",
      "Implement secure authentication",
      "Manage application state",
      "Ready for Node.js/React roles",
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics Training",
    shortTitle: "Data Analytics",
    description:
      "Turn raw data into actionable insights. Learn Python, SQL, Excel, and visualization tools to kick-start your data career.",
    longDescription:
      "Data is the new oil. This program teaches you everything from data cleaning and analysis to visualization and storytelling — skills that every organization needs.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    icon: "BarChart2",
    color: "from-cyan-500 to-blue-600",
    category: "Data",
    highlights: [
      "Python for data analysis",
      "SQL querying mastery",
      "Excel & Google Sheets",
      "Dashboard creation",
    ],
    curriculum: [
      {
        module: "Foundations of Data Analytics",
        topics: [
          "Data types & structures",
          "Statistics fundamentals",
          "Excel advanced functions",
          "SQL basics to advanced",
        ],
      },
      {
        module: "Python for Analytics",
        topics: [
          "Pandas & NumPy",
          "Data cleaning techniques",
          "EDA (Exploratory Data Analysis)",
          "Matplotlib & Seaborn",
        ],
      },
      {
        module: "Data Visualization",
        topics: [
          "Storytelling with data",
          "Tableau basics",
          "Power BI introduction",
          "Dashboard design principles",
        ],
      },
      {
        module: "Capstone Project",
        topics: [
          "End-to-end analytics project",
          "Presenting findings",
          "Portfolio development",
          "Industry case studies",
        ],
      },
    ],
    outcomes: [
      "Analyze large datasets confidently",
      "Create compelling visualizations",
      "Write advanced SQL queries",
      "Ready for data analyst roles",
    ],
  },
  {
    slug: "power-bi",
    title: "Power BI Training",
    shortTitle: "Power BI",
    description:
      "Become a Power BI expert. Learn to build interactive dashboards and reports that drive business decisions.",
    longDescription:
      "Power BI is Microsoft's leading business intelligence tool. This course takes you from zero to building stunning, interactive reports used by Fortune 500 companies.",
    duration: "2 Months",
    level: "Beginner",
    icon: "PieChart",
    color: "from-yellow-500 to-orange-600",
    category: "Data",
    highlights: [
      "Hands-on dashboard building",
      "DAX formula mastery",
      "Real business datasets",
      "Microsoft certification prep",
    ],
    curriculum: [
      {
        module: "Power BI Fundamentals",
        topics: [
          "Power BI Desktop setup",
          "Data sources & connectors",
          "Power Query Editor",
          "Data transformation",
        ],
      },
      {
        module: "Data Modeling",
        topics: [
          "Relationships & cardinality",
          "Star schema design",
          "DAX basics",
          "Calculated columns & measures",
        ],
      },
      {
        module: "Visualizations & Reports",
        topics: [
          "Charts, tables & KPIs",
          "Slicers & filters",
          "Custom visuals",
          "Report formatting",
        ],
      },
      {
        module: "Advanced & Publishing",
        topics: [
          "Advanced DAX",
          "Row-level security",
          "Power BI Service",
          "Sharing & collaboration",
        ],
      },
    ],
    outcomes: [
      "Build professional BI dashboards",
      "Write DAX formulas confidently",
      "Connect to multiple data sources",
      "Ready for BI analyst roles",
    ],
  },
  {
    slug: "iot-training",
    title: "IoT Training",
    shortTitle: "IoT",
    description:
      "Explore the Internet of Things. Learn to connect devices, collect sensor data, and build smart systems using Arduino, Raspberry Pi, and cloud platforms.",
    longDescription:
      "IoT is transforming industries from healthcare to manufacturing. This course gives you practical skills to design, build, and deploy IoT solutions.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    icon: "Cpu",
    color: "from-green-600 to-emerald-700",
    category: "Technology",
    highlights: [
      "Hands-on hardware projects",
      "Cloud IoT integration",
      "Sensor & actuator programming",
      "Industry application focus",
    ],
    curriculum: [
      {
        module: "IoT Fundamentals",
        topics: [
          "IoT architecture",
          "Communication protocols (MQTT, HTTP)",
          "Edge computing",
          "Security in IoT",
        ],
      },
      {
        module: "Hardware Programming",
        topics: [
          "Arduino programming",
          "Raspberry Pi setup",
          "Sensors & actuators",
          "Circuit design basics",
        ],
      },
      {
        module: "Cloud & Data",
        topics: [
          "AWS IoT Core",
          "Data visualization",
          "Alerts & automation",
          "MQTT broker setup",
        ],
      },
      {
        module: "Capstone Project",
        topics: [
          "Smart home project",
          "Industrial monitoring",
          "Data pipeline setup",
          "Project documentation",
        ],
      },
    ],
    outcomes: [
      "Design and prototype IoT systems",
      "Program Arduino & Raspberry Pi",
      "Integrate with cloud platforms",
      "Ready for IoT engineering roles",
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
