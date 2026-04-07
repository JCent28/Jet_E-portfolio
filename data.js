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
    ctaSecondary: { label: "Download CV", target: "cv_jethro.pdf" },
  },

  // ─────────────────────────────────────────────
  // 👤 ABOUT SECTION — EDIT HERE
  // ─────────────────────────────────────────────
  about: {
    bio: [
      "I'm a 4th-year Bachelor of Science in Information Technology student passionate about building robust, scalable applications — through various web development solutions.",
      "My journey in tech has taken me through Web development, REST APIs, Azure cloud services, and database engineering. I thrive at the intersection of clean code and great user experience.",
    ],
    education: {
      degree: "BS Information Technology",
      school: "Mapúa Malayan Colleges Laguna",
      year: "2021 - Present (4th Year)",
      honors: "Dean's Lister (3rd term 2022 - 2023)",
    },
    interests: ["Open Source", "Cloud Architecture", "UI/UX Design", "Web Dev", "AI/ML"],
    stats: [
      { value: 4, label: "Years of Study", suffix: "yrs" },
      { value: 20, label: "Projects Built", suffix: "+" },
      { value: 7, label: "Certifications", suffix: "" },
      { value: 15, label: "Tech Stack", suffix: "+" },
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
      title: "HDA1-R3: Microcontroller-Based Assistive Notification Device for Hemodialysis Patients",
      featured: true,
      description: "A patient monitoring system that tracks heart rate and oxygen saturation during dialysis, sending real-time alerts to nurses.",
      longDescription: "HDA1-R3 is a microcontroller-based assistive notification system designed for hemodialysis patients. It monitors vital signs—heart rate (BPM) and SpO₂—using a MAX30100 sensor. Data from the patient side (slave device) is wirelessly transmitted via ESP8266 modules to the nurse station (master device). Readings are displayed on an LCD, and abnormal values trigger alerts via LEDs and buzzer, enabling faster response times and reducing dependence on manual monitoring or patient calls. The system is programmed using Arduino IDE and C# for extended features.",
      tech: ["Arduino IDE", "C#", "ESP8266 Wi-Fi Module", "Arduino Uno R3", "MAX30100 Sensor", "LCD Display I2C 16x2", "Active Buzzer", "9V Battery"],
      images: ["img/hda1r3_1.jpg", "img/hda1r3_2.jpg", "img/hda1r3_3.jpg"],
      imageLabels: ["Image 1", "Image 2", "Image 3"],
      github: "#",
      demo: "#",
      category: "IoT / Embedded Systems",
    },
    {
      year: "4th Year",
      title: "Pet Food Dispenser",
      featured: false,
      description: "An IoT-enabled pet feeding system that automates meal delivery and sends notifications when supplies run low.",
      longDescription: "A pet food dispenser system built with Arduino and Xamarin for remote feeding control, portion scheduling, and supply monitoring. It includes a mobile app interface for adjusting feeding times, receiving alerts, and managing meal portions. The project highlights IoT integration, embedded systems, and mobile app development.",
      tech: ["Visual Studio", "Arduino IDE", "Xamarin", "ESP8266"],
      images: ["🐾", "img/pet_food_dispenser.jpg"],
      imageLabels: ["Pet Icon", "img/petDis1.jpg", "img/petDis2.jpg", "img/petDis3.jpg"],
      github: "#",
      demo: "#",
      category: "IoT / Embedded Systems",
    },
    // ── 3rd Year ──────────────────────────────
    {
      year: "3rd Year",
      title: "iLigtas Game",
      featured: false,
      description: "An educational app for IT Students to review significant and foundational IT topics.",
      longDescription: "A Xamarin C# app for IT students to review core topics like programming, networking, and databases, featuring lessons, quizzes, and progress tracking through an interactive interface.",
      tech: ["Xamarin", "C#", "MySQL"],
      images: ["🪝", "img/iLigtas.jpg", "img/iLigtas2.png",  "img/iLigtas1.jpg"],
      imageLabels: ["Hook Icon", "Image 1", "Image 2", "Image 3"],
      github: "#",
      demo: "#",
      category: "Mobile",
    },
    {
      year: "3rd Year",
      title: "Juan Remembers Memory Game",
      featured: false,
      description: "A fun memory game that challenges players to match cards and improve recall.",
      longDescription: "Juan Remembers is a memory-based mobile game where players test and improve their recall skills by matching cards or remembering sequences. It’s fun, educational, and challenges players to sharpen their memory while progressing through increasingly difficult levels.",
      tech: ["Xamarin", "C#", "MySQL"],
      images: ["🧠", "img/thirdyear.jpeg", "img/thirdyear1.jpeg", "img/thirdyear2.jpeg"],
      imageLabels: ["Brain Icon", "Image 1", "Image 2", "Image 3"],
      github: "#",
      demo: "#",
      category: "Mobile",
    },
    // ── 2nd Year ──────────────────────────────
    {
      year: "2nd Year",
      title: "Automated Plant Watering System",
      featured: false,
      description: "An IoT-based automated plant watering system that monitors moisture levels and schedules watering set by the user.",
      longDescription: "Developed using PHP and MySQL. Faculty can enter, update, and finalize grades per subject. Students get a login to view their own records. Includes automatic GPA calculation, Latin honors classification, and downloadable transcript generation.",
      tech: ["Xamarin", "C#", "MySQL"],
      images: ["🌿", "img/Green_Stream.png", "img/Green_Stream2.png" ],
      imageLabels: ["Music Icon", "Image 2", "Image 3"],
      github: "#",
      demo: "#",
      category: "Mobile",
    },
    {
      year: "2nd Year",
      title: "Music Playlist Manager",
      featured: false,
      description: "A Python Tkinter app that lets users play, pause, and skip songs from a playlist, showcasing playlist management using data structures.",
      longDescription: "This project is a music player application that allows users to play, pause, and skip tracks. It features a simple GUI built with Python and Tkinter, where users can select songs from a playlist. The application demonstrates the use of data structures to manage the playlist and track information",
      tech: ["Python", "Tkinter"],
      images: ["🎧", "img/playlistPic.png", "img/playlistPic2.png" ],
      imageLabels: ["Editor", "Search", "Tags"],
      github: "#",
      demo: "#",
      category: "Web",
    },
    // ── 1st Year ──────────────────────────────
    {
      year: "1st Year",
      title: "Color Guessing Game",
      featured: false,
      description: "A Python Tkinter game inspired by Filipino betting games where players guess colors using RGB values.",
      longDescription: "First major Simulates a color guessing game, drawing inspiration from classic Filipino betting games, where players must identify the correct color based on RGB values. The game is designed to enhance color recognition skills and understanding of RGB color models, potentially incorporating elements of chance or strategic wagers to amplify the traditional betting experience. project. A console-based Java application that allows librarians to add books, register borrowers, process borrow/return transactions, and generate simple reports. Data persisted in flat .txt files.",
      tech: ["Python", "Tkinter", "OOP"],
      images: ["🎨", "img/colorGamepic.png" ],
      imageLabels: ["Color Game","Game Screen"],
      github: "#",
      demo: "#",
      category: "Console",
    },
    {
      year: "1st Year",
      title: "4 Pics 1 Word using Python Tkinter",
      featured: false,
      description: "Python Tkinter game: Guess words from four images. Developed Python and UI skills.",
      longDescription: "This project introduced me to Python programming fundamentals, GUI development, and basic game logic implementation. It helped me understand event-driven programming and user interface design principles.",
      tech: ["Python", "Tkinter"],
      images: ["🎯", "img/pics1word.png"],
      imageLabels: ["Image 1", "Image 2"],
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
      company: "Biñan City Hall",
      period: "December 2025 – Present",
      location: "Biñan City, Philippines",
      description: "Contributed to a web-based educational gamification project by mapping math topic questions to pre-built interactive web game templates, analyzing each template's frontend structure to ensure proper content alignment, and creating designs based on supervisor-approved mappings. Also assisted in polishing the document tracking project by improving the Ul, responsive design, and fixing bugs. ",
      highlights: ["PHP", "CI4 Framework", "SQL Server"],
      icon: "💼",
    },
    {
      role: "Freelance Social Media Manager, Graphic Designer and Video Editor",
      company: "Self Employed",
      period: "2021 – Present",
      location: "Remote - Philippines",
      description: "Video Editor & Graphic Designer with 4 years of experience delivering high-impact visual content. Expert in tailoring media content for digital pla?orms to drive brand engagement. A collaboraBve professional commiCed to high-quality, deadline-driven results.",
      highlights: ["Canva", "Capcut", "Slack", "Meta Business Suite", "Photoshop"],
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
