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
      title: "CarDekho Car Price Prediction",
      description: "Machine learning model predicting used car prices using regression algorithms based on various vehicle features.",
      tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/raiaaditya/Car_Price_Predictor_Devops", // ADD_PROJECT_REPOSITORY_LINK_HERE - Update with actual repo URL
      featured: true
    },
    {
      id: 2,
      title: "Crime Data Analysis",
      description: "Python visualization dashboard analyzing crime patterns and trends to help understand regional safety metrics.",
      tags: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
      githubUrl: "https://github.com/raiaaditya/Crime_data_records", // ADD_PROJECT_REPOSITORY_LINK_HERE - Update with actual repo URL
      featured: true
    },
    {
      id: 3,
      title: "Swastify Fitness App",
      description: "Comprehensive Android fitness tracking app providing personalized workout plans and progress monitoring.",
      tags: ["Kotlin", "Android", "Firebase"],
      githubUrl: "https://github.com/raiaaditya/SwastifyApp", // ADD_PROJECT_REPOSITORY_LINK_HERE - Update with actual repo URL
      featured: true
    },
    {
      id: 4,
      title: "AI Pet Health Chatbot",
      description: "AI-powered chatbot application providing pet health queries, basic diagnostic info, and care recommendations.",
      tags: ["Python", "AI", "Flask", "NLP"],
      githubUrl: "https://github.com/raiaaditya", // ADD_PROJECT_REPOSITORY_LINK_HERE - Update with actual repo URL
      featured: false
    },
    {
      id: 5,
      title: "Traffic Signal Adjustment System",
      description: "Automated traffic signal timing system utilizing real-time traffic data and computer vision to optimize flow.",
      tags: ["Python", "Computer Vision", "IoT", "AI"],
      githubUrl: "https://github.com/raiaaditya", // ADD_PROJECT_REPOSITORY_LINK_HERE - Update with actual repo URL
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
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Timeline", href: "timeline" },
  { name: "Contact", href: "contact" }
];
