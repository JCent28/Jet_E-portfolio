// ============================================================
// 📁 data.js — EDIT ALL YOUR CONTENT HERE
// This is the single source of truth for the entire portfolio.
// ============================================================

const PORTFOLIO_DATA = {

  // ─────────────────────────────────────────────
  // 🏠 HERO SECTION — EDIT HERE
  // ─────────────────────────────────────────────
  hero: {
    greeting: "Hi, I'm",
    name: "Jethro Mirano",
    roles: ["Full-Stack Developer", "IT Student", "Cloud Enthusiast", "Problem Solver"],
    tagline: "Building intelligent systems & scalable web solutions.",
    cta: { label: "View My Work", target: "#projects" },
    ctaSecondary: { label: "Download CV", target: "#" },
  },

  // ─────────────────────────────────────────────
  // 👤 ABOUT SECTION — EDIT HERE
  // ─────────────────────────────────────────────
  about: {
    bio: [
      "I'm a 4th-year Bachelor of Science in Information Technology student passionate about building robust, scalable applications — from cloud-deployed APIs to mobile apps.",
      "My journey in tech has taken me through Android development, REST APIs, Azure cloud services, and database engineering. I thrive at the intersection of clean code and great user experience.",
    ],
    education: {
      degree: "BS Information Technology",
      school: "Mapúa Malayan Colleges Laguna",
      year: "2021 - Present (4th Year)",
      honors: "Dean's Lister",
    },
    interests: ["Open Source", "Cloud Architecture", "UI/UX Design", "Mobile Dev", "AI/ML"],
    stats: [
      { value: 4, label: "Years of Study", suffix: "yrs" },
      { value: 20, label: "Projects Built", suffix: "+" },
      { value: 8, label: "Certifications", suffix: "" },
      { value: 5, label: "Tech Stack", suffix: "+" },
    ],
  },

  // ─────────────────────────────────────────────
  // 🛠 SKILLS SECTION — EDIT HERE
  // ─────────────────────────────────────────────
  skills: [
    // --- Programming ---
    { name: "C# / ASP.NET", icon: "⚙️", level: 85, category: "Programming" },
    { name: "Java (Android)", icon: "📱", level: 80, category: "Programming" },
    { name: "PHP", icon: "🐘", level: 78, category: "Programming" },
    { name: "JavaScript", icon: "🟡", level: 82, category: "Programming" },
    { name: "Python", icon: "🐍", level: 70, category: "Programming" },
    // --- Web ---
    { name: "HTML / CSS", icon: "🌐", level: 90, category: "Web" },
    { name: "React", icon: "⚛️", level: 72, category: "Web" },
    { name: "REST API", icon: "🔗", level: 85, category: "Web" },
    { name: "ASP.NET Web API", icon: "🚀", level: 83, category: "Web" },
    // --- Tools & Cloud ---
    { name: "Azure", icon: "☁️", level: 75, category: "Tools" },
    { name: "MySQL", icon: "🗄️", level: 85, category: "Tools" },
    { name: "MongoDB", icon: "🍃", level: 72, category: "Tools" },
    { name: "Android Studio", icon: "🤖", level: 80, category: "Tools" },
    { name: "Git / GitHub", icon: "🐙", level: 88, category: "Tools" },
    { name: "Figma", icon: "🎨", level: 65, category: "Tools" },
  ],

  // ─────────────────────────────────────────────
  // 📜 CERTIFICATIONS — EDIT HERE
  // ─────────────────────────────────────────────
  certifications: [
    {
      title: "AWS academy graduate - cloud foundations",
      issuer: "AWS Training and Certification",
      date: "2023",
      badge: "☁️",
      color: "#0078d4",
      link: "https://www.credly.com/badges/c1e524fc-f0e4-4905-aabc-2a886a13bd6b/public_url",
    },
    {
      title: "Build a Secure Google Cloud Network Skill Badge",
      issuer: "Google Cloud",
      date: "2026",
      badge: "🔒",
      color: "#ff9900",
      link: "https://www.credly.com/badges/e5d5555d-dccc-4a35-a34a-cd00e82b901c/public_url",
    },
    {
      title: "Prepare Data for ML APIs on Google Cloud Skill Badge",
      issuer: "Google Cloud",
      date: "2026",
      badge: "📊",
      color: "#1877f2",
      link: "https://www.credly.com/badges/7810f461-b694-4e1b-94cf-257def2283a1/public_url",
    },
    {
      title: "Set Up an App Dev Environment on Google Cloud Skill Badge",
      issuer: "Google Cloud",
      date: "2026",
      badge: "⚙️",
      color: "#4285f4",
      link: "https://www.credly.com/badges/ae54f2e1-5e93-4afa-9b9c-48069fd10de6/public_url",
    },
    {
      title: "Generative AI for Beginners",
      issuer: "Great Learning Academy",
      date: "2024",
      badge: "🤖",
      color: "#c74634",
      link: "https://www.mygreatlearning.com/certificate/QVJLVJJT?referrer_code=GL1FFK-QO2MDA",
    },
    {
      title: "Cloud computing foundations",
      issuer: "Great Learning Academy",
      date: "2024",
      badge: "☁️",
      color: "#3ddc84",
      link: "https://www.mygreatlearning.com/certificate/IMNXNDWY?referrer_code=GL1FFKQO2MDA",
    },
    {
      title: "Introduction to firewall",
      issuer: "Great Learning Academy",
      date: "2024",
      badge: "🛡️",
      color: "#a435f0",
      link: "https://www.mygreatlearning.com/certificate/XNEMYKXS?referrer_code=GL1FFKQO2MDA",
    },
  ],

  // ─────────────────────────────────────────────
  // 💻 PROJECTS — EDIT HERE
  // Add/remove projects freely. featured: true highlights one.
  // ─────────────────────────────────────────────
  projects: [
    // ── 4th Year ──────────────────────────────
    {
      year: "4th Year",
      title: "Green Stairs System",
      featured: true, // ← FEATURED PROJECT
      description: "A smart campus system that incentivizes students to use stairs over elevators. Tracks stair usage, calculates calorie burns, and rewards eco-friendly behavior.",
      longDescription: "The Green Stairs System is a full-stack IoT-integrated platform developed as a thesis project. It uses RFID sensors on campus stairwells to log student stair usage in real-time. The backend is built on ASP.NET Web API deployed on Azure, with a MySQL database. A React dashboard shows analytics, leaderboards, and gamified achievements. Android app for students to track their stats and redeem points.",
      tech: ["ASP.NET Web API", "Azure", "MySQL", "React", "Android Java", "RFID"],
      images: ["img/project_1.jpg", "img/project_2.jpg", "img/project_3.jpg"],
      imageLabels: ["Dashboard", "Analytics", "Mobile App"],
      github: "#",
      demo: "#",
      category: "Full-Stack",
    },
    {
      year: "4th Year",
      title: "Azure-Deployed REST API Hub",
      featured: false,
      description: "A scalable, multi-service REST API architecture deployed on Microsoft Azure with CI/CD pipeline integration.",
      longDescription: "Designed and deployed a cloud-native REST API hub with multiple microservices using ASP.NET Web API. Configured Azure App Services, Azure SQL, and API Management. Implemented JWT authentication, rate limiting, Swagger documentation, and GitHub Actions for automated deployment.",
      tech: ["ASP.NET Web API", "Azure App Service", "Azure SQL", "JWT", "Swagger", "GitHub Actions"],
      images: ["☁️", "🔗", "📄"],
      imageLabels: ["Architecture", "Endpoints", "Docs"],
      github: "#",
      demo: "#",
      category: "Cloud",
    },
    // ── 3rd Year ──────────────────────────────
    {
      year: "3rd Year",
      title: "Campus Lost & Found App",
      featured: false,
      description: "Android mobile application for reporting and claiming lost items on campus with image upload and push notifications.",
      longDescription: "Built with Android Studio (Java) and a PHP REST API backend. Students can post lost or found items with photos, location tags, and descriptions. Features Firebase Cloud Messaging for real-time notifications when a match is found. MySQL database for storage.",
      tech: ["Android Studio", "Java", "PHP REST API", "MySQL", "Firebase FCM"],
      images: ["📱", "🗂️", "🔔"],
      imageLabels: ["Home Feed", "Item Detail", "Notifications"],
      github: "#",
      demo: "#",
      category: "Mobile",
    },
    {
      year: "3rd Year",
      title: "Inventory Management System",
      featured: false,
      description: "Web-based inventory tracking system with barcode scanning, low-stock alerts, and detailed reporting for small businesses.",
      longDescription: "A PHP + MySQL web application with a clean Bootstrap UI. Supports barcode input via webcam using QuaggaJS, automated email alerts for low stock, exportable PDF/CSV reports using FPDF and PhpSpreadsheet, and role-based user management.",
      tech: ["PHP", "MySQL", "Bootstrap", "QuaggaJS", "FPDF"],
      images: ["📦", "📈", "🔎"],
      imageLabels: ["Dashboard", "Reports", "Barcode Scan"],
      github: "#",
      demo: "#",
      category: "Web",
    },
    // ── 2nd Year ──────────────────────────────
    {
      year: "2nd Year",
      title: "Student Grade Portal",
      featured: false,
      description: "Web portal for faculty to manage and publish student grades with automated GPA computation and semester reports.",
      longDescription: "Developed using PHP and MySQL. Faculty can enter, update, and finalize grades per subject. Students get a login to view their own records. Includes automatic GPA calculation, Latin honors classification, and downloadable transcript generation.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      images: ["📊", "🎓", "📋"],
      imageLabels: ["Grade Entry", "Student View", "Reports"],
      github: "#",
      demo: "#",
      category: "Web",
    },
    {
      year: "2nd Year",
      title: "MongoDB Blog Engine",
      featured: false,
      description: "A NoSQL-powered blogging platform with tagging, search, and Markdown rendering built with Node.js and MongoDB.",
      longDescription: "Explores document-based storage with MongoDB Atlas. Blog posts support Markdown content, tags, categories, and full-text search. Built with Express.js REST API, EJS templating, and deployed on Render. Includes admin panel for post management.",
      tech: ["MongoDB", "Node.js", "Express.js", "EJS", "Markdown"],
      images: ["📝", "🔍", "🏷️"],
      imageLabels: ["Editor", "Search", "Tags"],
      github: "#",
      demo: "#",
      category: "Web",
    },
    // ── 1st Year ──────────────────────────────
    {
      year: "1st Year",
      title: "Library Book Tracker",
      featured: false,
      description: "Simple library borrowing system built in Java with file-based storage for tracking books and borrowers.",
      longDescription: "First major programming project. A console-based Java application that allows librarians to add books, register borrowers, process borrow/return transactions, and generate simple reports. Data persisted in flat .txt files.",
      tech: ["Java", "File I/O", "OOP"],
      images: ["📚", "👤", "📋"],
      imageLabels: ["Book List", "Borrower", "Transactions"],
      github: "#",
      demo: "#",
      category: "Console",
    },
    {
      year: "1st Year",
      title: "Personal Budget Calculator",
      featured: false,
      description: "A simple HTML/CSS/JS budget planner with income/expense tracking and a visual donut chart breakdown.",
      longDescription: "First web project. Pure vanilla HTML, CSS, and JavaScript with no frameworks. Users enter income and expense categories, and the app computes totals with a Chart.js donut visualization. Data saved to localStorage.",
      tech: ["HTML", "CSS", "JavaScript", "Chart.js"],
      images: ["💰", "📊", "📅"],
      imageLabels: ["Budget Form", "Chart", "Monthly View"],
      github: "#",
      demo: "#",
      category: "Web",
    },
  ],

  // ─────────────────────────────────────────────
  // 🏢 EXPERIENCE / PRACTICUM — EDIT HERE
  // ─────────────────────────────────────────────
  experience: [
    {
      role: "IT Intern (Practicum)",
      company: "TechCorp Philippines, Inc.",
      period: "June 2024 – August 2024",
      location: "Makati City, Philippines",
      description: "Assisted the backend team in maintaining and improving internal REST APIs using ASP.NET. Deployed updates to Azure staging environments and wrote unit tests using xUnit.",
      highlights: ["ASP.NET Web API", "Azure DevOps", "xUnit Testing", "SQL Server"],
      icon: "💼",
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 – Present",
      location: "Remote",
      description: "Built and deployed PHP/MySQL web applications for small local businesses including a POS system, an appointment booking site, and an events landing page.",
      highlights: ["PHP", "MySQL", "Bootstrap", "Vercel"],
      icon: "🧑‍💻",
    },
    {
      role: "Web Development Volunteer",
      company: "UPLB Computer Science Society",
      period: "2022 – 2023",
      location: "Los Baños, Philippines",
      description: "Maintained the organization's website and helped build event registration systems for campus tech events.",
      highlights: ["WordPress", "HTML/CSS", "Event Systems"],
      icon: "🌐",
    },
  ],

  // ─────────────────────────────────────────────
  // 📬 CONTACT — EDIT HERE
  // ─────────────────────────────────────────────
  contact: {
    email: "philipjethromirano@gmail.com",
    location: "Cabuyao City, Philippines",
    availability: "Open to full-time roles & internships",
    socials: [
      { label: "GitHub", url: "https://github.com/PJethroM", icon: "🐙" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/philip-jethro-mirano-90b830277/", icon: "💼" },
      { label: "Facebook", url: "https://www.facebook.com/jethro.mirano", icon: "📘" },
      { label: "Twitter/X", url: "https://twitter.com/", icon: "🐦" },
    ],
  },
};
