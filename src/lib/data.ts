export const portfolioData = {
  hero: {
    name: "Aaditya Rai",
    titles: [
      "Data Scientist"
    ],
    tagline: "Solving real-world problems with data and software",
    githubUrl: "https://github.com/raiaaditya" // TODO: Replace with your GitHub profile URL
  },
  about: {
    paragraph1: "I am a passionate Computer Science student deeply interested in Data Analysis, Artificial Intelligence, and Software Development. I love turning complex data into actionable insights and building applications that solve real-world problems.",
    paragraph2: "With hands-on experience in Python, Machine Learning, and Android app development, I continuously strive to learn new technologies and apply them to create meaningful digital experiences. Whether it's training an ML model or developing a mobile app, I focus on writing clean, efficient, and scalable code."
  },
  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", level: 90 },
        { name: "C++", level: 75 },
        { name: "Java", level: 70 },
        { name: "Kotlin", level: 65 }
      ]
    },
    {
      category: "Data & AI",
      items: [
        { name: "Data Analysis", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Data Visualization", level: 85 }
      ]
    },
    {
      category: "Development",
      items: [
        { name: "Android Development", level: 70 },
        { name: "Git & GitHub", level: 80 },
        { name: "Flask", level: 70 },
        { name: "Linux", level: 65 }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "CarDekho Car Price Prediction", // TODO: Add project title here
      description: "Machine learning model predicting used car prices using regression algorithms based on various vehicle features.", // TODO: Add project description here
      tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/raiaaditya/Car_Price_Predictor_Devops", // TODO: Add project repository link here
      image: "/assets/images/cardekho.jpg", // TODO: Add project background image path here
      featured: true
    },
    {
      id: 2,
      title: "Crime Data Analysis", // TODO: Add project title here
      description: "Python visualization dashboard analyzing crime patterns and trends to help understand regional safety metrics.", // TODO: Add project description here
      tags: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
      githubUrl: "https://github.com/raiaaditya/Crime_data_records", // TODO: Add project repository link here
      image: "/assets/images/crime.jpg", // TODO: Add project background image path here
      featured: true
    },
    {
      id: 3,
      title: "Swastify Fitness App", // TODO: Add project title here
      description: "Comprehensive Android fitness tracking app providing personalized workout plans and progress monitoring.", // TODO: Add project description here
      tags: ["Kotlin", "Android", "Firebase"],
      githubUrl: "https://github.com/raiaaditya/SwastifyApp", // TODO: Add project repository link here
      image: "/assets/images/fitness.jpg", // TODO: Add project background image path here
      featured: true
    },
    {
      id: 4,
      title: "Packet Analyzer Tool", // TODO: Add project title here
      description: "Network traffic analysis tool extracting, decoding, and visualizing packet data to understand network behavior and security.", // TODO: Add project description here
      tags: ["Python", "Networking", "Wireshark", "Security"],
      githubUrl: "https://github.com/raiaaditya/packet-analyzer", // TODO: Add project repository link here
      image: "/assets/images/packet-analyzer.jpg", // TODO: Add project background image path here
      featured: false
    },
    {
      id: 5,
      title: "WhatsApp Chat Analysis", // TODO: Add project title here
      description: "An interactive Streamlit-based web app that analyzes WhatsApp chat data to generate insights like message statistics, user activity, word usage, emoji trends, and activity heatmaps.", // TODO: Add project description here
      tags: ["Python", "Data Visualization", "NLP", "WordCloud", "IoT", "AI"],
      githubUrl: "https://github.com/raiaaditya/whatsapp-chat-analysis", // TODO: Add project repository link here
      image: "/assets/images/whatsapp-chat-analysis.png", // TODO: Add project background image path here
      featured: false
    }
  ],
  timeline: [
    {
      year: "2025",
      title: "AI & Advanced Projects",
      description: "Developing AI chatbots and computer vision systems. Deepening knowledge in neural networks and NLP."
    },
    {
      year: "2024",
      title: "Data Analytics",
      description: "Completed advanced data analytics and visualization projects. Built dashboards and predictive models."
    },
    {
      year: "2023",
      title: "Machine Learning & Android",
      description: "Built initial ML models and data analysis projects. Created native Android apps utilizing Kotlin and Firebase."
    },
    {
      year: "2022",
      title: "Started CS Journey",
      description: "Began formal education in Computer Science. Focused on core programming with C++ and Python."
    }
  ],
  contact: {
    email: "rai.aaditya0306@gmail.com",
    linkedin: "https://www.linkedin.com/in/aadityarai03/", // TODO: Replace with your LinkedIn profile URL
    github: "https://github.com/raiaaditya" // TODO: Replace with your GitHub profile URL
  }
};

export const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Education", href: "education" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Timeline", href: "timeline" },
  { name: "Certifications", href: "certifications" },
  { name: "Contact", href: "contact" }
];
