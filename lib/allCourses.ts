export interface CourseItem {
  name: string;
  slug: string;
  badge?: string;
}

export interface CourseCategory {
  id: string;
  label: string;
  color: string;
  icon: string;
  description: string;
  subcategories: {
    name: string;
    courses: CourseItem[];
  }[];
}

export const allCourseCategories: CourseCategory[] = [
  {
    id: "technical",
    label: "Technical Courses",
    color: "from-blue-500 to-indigo-600",
    icon: "Code",
    description: "Industry-ready technical training with live projects, certifications, and placement support.",
    subcategories: [
      {
        name: "Data & AI",
        courses: [
          { name: "Data Analytics", slug: "data-analytics", badge: "Popular" },
          { name: "Data Science", slug: "data-science", badge: "Hot" },
          { name: "Artificial Intelligence (AI)", slug: "artificial-intelligence", badge: "Trending" },
          { name: "Machine Learning (ML)", slug: "machine-learning" },
          { name: "Deep Learning", slug: "deep-learning" },
          { name: "Power BI", slug: "power-bi", badge: "Popular" },
          { name: "Tableau", slug: "tableau" },
          { name: "SQL & Database Management", slug: "sql-database" },
        ],
      },
      {
        name: "Programming",
        courses: [
          { name: "Python Programming", slug: "python-programming", badge: "Popular" },
          { name: "Java Programming", slug: "java-programming" },
          { name: "C/C++ Programming", slug: "c-cpp-programming" },
          { name: "MATLAB", slug: "matlab" },
        ],
      },
      {
        name: "Web & App Development",
        courses: [
          { name: "Full Stack Web Development", slug: "fullstack-web", badge: "Hot" },
          { name: "MERN Stack Development", slug: "mern-stack", badge: "Popular" },
          { name: "Front-End Development", slug: "frontend-development" },
          { name: "Back-End Development", slug: "backend-development" },
          { name: "Android App Development", slug: "android-development" },
          { name: "UI/UX Design", slug: "ui-ux-design" },
        ],
      },
      {
        name: "Cloud & Security",
        courses: [
          { name: "Cloud Computing", slug: "cloud-computing" },
          { name: "AWS Cloud", slug: "aws-cloud", badge: "Hot" },
          { name: "Microsoft Azure", slug: "microsoft-azure" },
          { name: "DevOps", slug: "devops", badge: "Trending" },
          { name: "Cyber Security", slug: "cyber-security" },
          { name: "Ethical Hacking", slug: "ethical-hacking" },
          { name: "Software Testing & QA", slug: "software-testing" },
        ],
      },
      {
        name: "Digital & Marketing",
        courses: [
          { name: "Digital Marketing", slug: "digital-marketing" },
        ],
      },
      {
        name: "IoT & Embedded",
        courses: [
          { name: "Internet of Things (IoT)", slug: "iot-training" },
          { name: "Embedded Systems", slug: "embedded-systems" },
        ],
      },
      {
        name: "Mechanical & CAD",
        courses: [
          { name: "AutoCAD", slug: "autocad" },
          { name: "SolidWorks", slug: "solidworks" },
          { name: "CATIA", slug: "catia" },
        ],
      },
      {
        name: "Industrial & Electronics",
        courses: [
          { name: "PLC & SCADA", slug: "plc-scada" },
          { name: "Industrial Automation", slug: "industrial-automation" },
          { name: "VLSI Design", slug: "vlsi-design" },
        ],
      },
    ],
  },
  {
    id: "non-technical",
    label: "Non-Technical Courses",
    color: "from-purple-500 to-pink-600",
    icon: "Briefcase",
    description: "Business, management, and professional skills for a well-rounded career.",
    subcategories: [
      {
        name: "HR & Management",
        courses: [
          { name: "Human Resource (HR)", slug: "human-resource" },
          { name: "Talent Acquisition & Recruitment", slug: "talent-acquisition" },
          { name: "Operations Management", slug: "operations-management" },
          { name: "Supply Chain Management", slug: "supply-chain" },
          { name: "Project Management", slug: "project-management" },
          { name: "Customer Relationship Management (CRM)", slug: "crm" },
        ],
      },
      {
        name: "Sales, Marketing & Business",
        courses: [
          { name: "Sales & Marketing", slug: "sales-marketing" },
          { name: "Business Development", slug: "business-development" },
          { name: "Digital Sales", slug: "digital-sales" },
          { name: "Retail Management", slug: "retail-management" },
          { name: "Market Research", slug: "market-research" },
          { name: "Entrepreneurship Development", slug: "entrepreneurship" },
          { name: "Business Analytics", slug: "business-analytics" },
        ],
      },
      {
        name: "Finance",
        courses: [
          { name: "Finance & Accounting", slug: "finance-accounting" },
          { name: "Investment Banking Basics", slug: "investment-banking" },
          { name: "Banking & Financial Services", slug: "banking-financial" },
        ],
      },
      {
        name: "Content & PR",
        courses: [
          { name: "Content Writing", slug: "content-writing" },
          { name: "Social Media Management", slug: "social-media" },
          { name: "Public Relations (PR)", slug: "public-relations" },
          { name: "Event Management", slug: "event-management" },
        ],
      },
    ],
  },
  {
    id: "employability",
    label: "Employability Programs",
    color: "from-green-500 to-teal-600",
    icon: "Award",
    description: "Sharpen aptitude, communication, and interview skills to get hired faster.",
    subcategories: [
      {
        name: "Aptitude & Reasoning",
        courses: [
          { name: "Quantitative Aptitude", slug: "quantitative-aptitude" },
          { name: "Verbal Ability", slug: "verbal-ability" },
          { name: "Logical Reasoning", slug: "logical-reasoning" },
        ],
      },
      {
        name: "Soft Skills & Personality",
        courses: [
          { name: "Soft Skills Development", slug: "soft-skills" },
          { name: "Communication Skills", slug: "communication-skills" },
          { name: "Personality Development", slug: "personality-development" },
          { name: "Leadership & Team Management", slug: "leadership" },
          { name: "Corporate Etiquette", slug: "corporate-etiquette" },
        ],
      },
      {
        name: "Career Preparation",
        courses: [
          { name: "Interview Preparation", slug: "interview-preparation", badge: "Popular" },
          { name: "Resume Building", slug: "resume-building", badge: "Popular" },
          { name: "Group Discussion (GD) Preparation", slug: "gd-preparation" },
          { name: "Campus Recruitment Training (CRT)", slug: "crt" },
        ],
      },
    ],
  },
  {
    id: "biotech",
    label: "Biotechnology",
    color: "from-emerald-500 to-cyan-600",
    icon: "FlaskConical",
    description: "Cutting-edge life sciences and biomedical training programs.",
    subcategories: [
      {
        name: "Life Sciences",
        courses: [
          { name: "Bioinformatics", slug: "bioinformatics" },
          { name: "Genomics", slug: "genomics" },
          { name: "Proteomics", slug: "proteomics" },
          { name: "Cell Culture Techniques", slug: "cell-culture" },
          { name: "Bioethics", slug: "bioethics" },
          { name: "Digital Pathology", slug: "digital-pathology" },
          { name: "Biomedical Data Analysis", slug: "biomedical-data" },
          { name: "Pharmaceutical Biotechnology", slug: "pharma-biotech" },
        ],
      },
    ],
  },
  {
    id: "chemical",
    label: "Chemical Engineering",
    color: "from-orange-500 to-red-600",
    icon: "Beaker",
    description: "Comprehensive chemical and process engineering training for industry readiness.",
    subcategories: [
      {
        name: "Core Chemical Engineering",
        courses: [
          { name: "Introduction to Chemical Engineering", slug: "intro-chemical-eng" },
          { name: "Engineering Chemistry", slug: "engineering-chemistry" },
          { name: "Material Balance", slug: "material-balance" },
          { name: "Energy Balance", slug: "energy-balance" },
          { name: "Fluid Mechanics", slug: "fluid-mechanics" },
          { name: "Heat Transfer", slug: "heat-transfer" },
          { name: "Mass Transfer", slug: "mass-transfer" },
          { name: "Mechanical Operations", slug: "mechanical-operations" },
          { name: "Thermodynamics", slug: "thermodynamics" },
          { name: "Chemical Reaction Engineering", slug: "chemical-reaction-eng" },
          { name: "Process Calculations", slug: "process-calculations" },
        ],
      },
      {
        name: "Process & Plant",
        courses: [
          { name: "Process Equipment", slug: "process-equipment" },
          { name: "Process Instrumentation", slug: "process-instrumentation" },
          { name: "Process Control", slug: "process-control" },
          { name: "Process Safety Management", slug: "process-safety" },
          { name: "Chemical Plant Operations", slug: "plant-operations" },
          { name: "Process Flow Diagrams (PFD)", slug: "pfd" },
          { name: "Piping & Instrumentation Diagrams (P&ID)", slug: "pid" },
        ],
      },
      {
        name: "Environmental & Specialised",
        courses: [
          { name: "Environmental Engineering", slug: "environmental-eng" },
          { name: "Water & Wastewater Treatment", slug: "water-treatment" },
          { name: "Air Pollution Control", slug: "air-pollution" },
          { name: "Industrial Quality Control", slug: "industrial-qc" },
          { name: "Petroleum Refining", slug: "petroleum-refining" },
          { name: "Petrochemical Engineering", slug: "petrochemical" },
          { name: "Fertilizer Technology", slug: "fertilizer-tech" },
          { name: "Polymer Technology", slug: "polymer-tech" },
          { name: "Pharmaceutical Process Engineering", slug: "pharma-process" },
          { name: "Food Process Engineering", slug: "food-process" },
          { name: "Corrosion Engineering", slug: "corrosion-eng" },
          { name: "Chemical Plant Design", slug: "plant-design" },
        ],
      },
    ],
  },
];

export const totalCourseCount = allCourseCategories.reduce(
  (acc, cat) =>
    acc +
    cat.subcategories.reduce((a, sub) => a + sub.courses.length, 0),
  0
);
