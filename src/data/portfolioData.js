import { University } from "lucide-react";

export const personalInfo = {
  name: "Nishant Bayaskar",
  role: "ML Engineer | Data Scientist | Data Analyst",
  email: "sarikishor31032005@gmail.com",
  phone: "+91 8766098443",
  location: "India",
  bio: "Passionate AI/ML Engineer and Aspiring Data scientist specializing in Computer Vision, Deep Learning, and Data Analytics. Currently pursuing B.E. in Computer Science & Engineering at SSGMCE, Shegaon affiliated with SGBAU, Amravati. Experienced in building intelligent systems using cutting-edge technologies and frameworks.",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/alpha31032005",
    linkedin: "https://www.linkedin.com/in/nishant-bayaskar-ba1323262/",
    twitter: "https://twitter.com/yourusername",
    email: "sarikishor31032005@gmail.com"
  }
};

export const projects = [
  {
    id: 1,
    title: "GrievX",
    description: "An intelligent civic management system that automates complaint detection, categorization, and municipal analytics.",
    image: "/ProjectPic/GrievX.png",
    tags: ["Full stack", "Computer Vision", "NLP", "Deep Learning", "Python", "TensorFlow"],
    category: ["AI/ML", "Full Stack"],
    github: "https://github.com/alpha31032005/GrievX",
    demo: "https://civic-issue-detection.netlify.app",
    featured: true,
    highlights: [
      "Real-time civic issue classification using custom CNN and multilingual text classifier",
      "Image model detects potholes, garbage, fallen trees, and damaged electric poles",
      "Text classifier understands English, Hindi, and Marathi complaints",
      "Citizen portal to submit complaints with image/text and track status",
      "Admin dashboard with heatmaps, charts, complaint trends, and category-wise analytics",
      "Microservice architecture with separate ML service (FastAPI) and backend API (Node.js)",
      "JWT-based authentication with role-based access (Citizen/Admin)",
      "Built to be deployable on cloud with container-friendly structure"
    ]
  },
  {
    id: 2,
    title: "AI-Powered PPT Generator",
    description: "An automated tool that generates presentation slides from natural language text using advanced AI language models, saving time and enhancing presentation creation workflows.",
    image: "/ProjectPic/glass-defect.jpg",
    tags: ["AI", "NLP", "Generative AI", "Python", "OpenAI", "Automation"],
    category: "AI/ML",
    github: "https://github.com/alpha31032005/AI-powered-PPT-Generator",
    demo: null,
    featured: true,
    highlights: [
      "Generates structured PowerPoint slides directly from free-form text prompts",
      "Uses advanced language models to identify key points and slide hierarchy",
      "Outputs downloadable `.pptx` files usable in Microsoft PowerPoint or Google Slides",
      "Improves productivity for students, professionals, and educators",
      "Modular architecture for prompt processing, slide creation, and template support",
      "Supports customization of slide styles, headings, and content emphasis"
    ]
  },
  {
    id: 3,
    title: "Civic Issue Classification Model",
    description: "Lightweight ML system that classifies civic issues such as potholes, garbage, fallen trees, and electric poles using image inputs.",
    image: "/ProjectPic/civic-issue-classification.jpg",
    tags: ["ML", "Computer Vision", "TensorFlow", "Python", "SentenceTransformer"],
    category: "AI/ML",
    github: "https://github.com/alpha31032005/civic-issue-detection-system",
    demo: "https://civic-issue-detection.netlify.app",
    featured: true,
    highlights: [
      "Custom CNN model trained for multi-class civic issue detection from images",
      "Supports key issue categories historically found in citizen complaints",
      "Pre-processing pipeline to improve image quality and model accuracy",
      "Modular Python codebase for training, evaluation, and inference"
    ]
  },
  {
    id: 4,
    title: "Car Price Prediction",
    description: "A machine learning model that predicts the resale price of cars based on key features using regression algorithms and real-world automotive data.",
    image: "/ProjectPic/car-price.jpg",
    tags: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis", "Regression", "EDA"],
    category: "AI/ML",
    github: "https://github.com/alpha31032005/Car_Price_Prediction",
    demo: "https://car-price-prediction45.streamlit.app/",
    featured: false,
    highlights: [
      "R² score of 0.94 on test data",
      "Built a regression model to estimate car resale prices using features like mileage, year, and engine size",
      "Performed Exploratory Data Analysis (EDA) to uncover feature relationships and outliers",
      "Implemented model training, validation, and evaluation with metrics like RMSE and R²",
      "Cleaned and preprocessed dataset including handling missing values and encoding categorical features",
      "Compared multiple regression algorithms to find the best-performing model",
      "Packaged code for reuse and integration into web or backend applications"
    ]
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    description: "An intelligent recommendation engine that suggests movies to users based on past preferences and ratings using collaborative and content-based filtering techniques.",
    image: "/ProjectPic/movie-recommendation.jpg",
    tags: ["Machine Learning", "Recommendation Systems", "Python", "Data Science", "Pandas", "Scikit-Learn"],
    category: "AI/ML",
    github: "https://github.com/alpha31032005/Movie_Recommendation_System",
    demo: null,
    featured: false,
    highlights: [
      "Built a movie recommendation system using user ratings and movie metadata",
      "Implemented collaborative filtering to capture user similarity and preferences",
      "Used content-based filtering to recommend movies with similar features",
      "Performed data preprocessing, feature extraction, and model evaluation",
      "Explored hybrid approaches to improve recommendation quality"
    ]
  }//,
  // {
  //   id: 6,
  //   title: "MERN Stack Projects",
  //   description: "Collection of full-stack web applications built with MongoDB, Express.js, React, and Node.js.",
  //   image: "/projects/mern-projects.jpg",
  //   tags: ["React", "Node.js", "MongoDB", "Express"],
  //   category: "Full Stack",
  //   github: "https://github.com/yourusername/mern-projects",
  //   demo: null,
  //   featured: false,
  //   highlights: [
  //     "E-commerce platform with payment integration",
  //     "Social media dashboard",
  //     "Task management system"
  //   ]
  // }
];

export const skills = {
  "Machine Learning & AI": [
    { name: "Machine Learning" },
    { name: "Deep Learning" },
    { name: "Computer Vision" },
    { name: "Natural Language Processing" },
    { name: "TensorFlow/Keras" },
    { name: "Gen-AI" }
  ],
  "Programming Languages": [
    { name: "Python" },
    { name: "JavaScript" },
    { name: "Java" },
    { name: "SQL" }
  ],
  "Data Analytics & Visualization": [
    { name: "Power BI" },
    { name: "Pandas" },
    { name: "NumPy" },
    { name: "Matplotlib/Seaborn" },
    { name: "Excel" }
  ]
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    University: "Sant Gadge Baba Amravati University (SGBAU)",
    institution: "Shri Sant Gajanan Maharaj College of Engineering",
    location: "Shegaon, Maharashtra",
    duration: "2022 - 2026",
    score: "8.12 CGPA",
    description: "Specialization in Machine Learning, Artificial Intelligence, and Data Science. Active participant in hackathons and technical events.",
    highlights: [
      "Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, Data Structures",
      "Final Year Project: Smart Civic Issue Reporting & Detection using ML for Urban Management",
      "Academic Achievements: In top 10% of the class"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "New English Junior College",
    location: "Wardha, Maharashtra",
    duration: "2021 - 2022",
    score: "76.17%",
    description: "Science stream with Mathematics and Biology."
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "New English High School",
    location: "Wardha, Maharashtra",
    duration: "2019 - 2020",
    score: "92.40%",
    description: "Foundation in science and mathematics."
  }
];

export const experience = [
  {
    id: 1,
    title: "Seeking Professional Opportunities",
    company: "Available for Full-time Roles",
    location: "Open to Relocation",
    duration: "Graduating 2026",
    type: "Career Starter",
    description: "Enthusiastic Computer Science graduate seeking to leverage strong foundation in Machine Learning, AI, and Full-Stack Development to contribute to innovative projects and gain hands-on professional experience.",
    responsibilities: [
      "Actively building practical AI/ML projects to strengthen portfolio",
      "Continuously learning cutting-edge technologies and industry best practices",
      "Open to internships, entry-level positions, and collaborative opportunities",
      "Ready to contribute to impactful projects in AI/ML, Data Science, or Data Analytics"
    ],
    technologies: ["Python", "TensorFlow", "Node.js", "Machine Learning", "Computer Vision"]
  }
];

export const certifications = [
  {
    id: 1,
    name: "Google Cloud Career Launchpad - AI Leader",
    issuer: "Google Cloud",
    date: "19 July 2025",
    credential: "oqAc5n98"
  },
  {
    id: 2,
    name: "The Joy of computing using Python",
    issuer: "NPTEL",
    date: "Jul-Oct 2023",
    credential: "NA"
  },
  {
    id: 3,
    name: "TalentNext - Database Solutions",
    issuer: "Wipro",
    date: "Jul-Oct 2025",
    credential: "TNext_SE_25_DB_251840109"
  },
  {
    id: 4,
    name: "Introduction to MS Excel",
    issuer: "SimpliLearn powered by Microsoft",
    date: "17 Aug 2025",
    credential: "8804596"
  },
  {
    id: 5,
    name: "Python from A to Z with Devtown",
    issuer: "Google Developers Student Club",
    date: "Jan-Apr 2024",
    credential: "NA"
  },
  {
    id: 6,
    name: "Android Development using Kotlin",
    issuer: "Google Developers Student Club",
    date: "13 March 2024",
    credential: "NA"
  },
  //{
  //   id: 7,
  //   name: "Python Programing",
  //   issuer: "Codsoft",
  //   date: "Nov-Dec 2023",
  //   credential: "50a9abf"
  // }
  // Add more certifications as needed
];

export const achievements = [
  {
    id: 1,
    title: "Hackathon RunnerUp - Smart Appointment Scheduler for Healthcare",
    description: 'Won third place in hackathon with innovative "Hospital Management" solution',
    date: "2024"
  },
  {
    id: 2,
    title: "Google Cloud AI Leader",
    description: "Selected for prestigious Google Cloud Career Launchpad program",
    date: "2025"
  }//,
  // {
  //   id: 3,
  //   title: "National Seminar Presentation",
  //   description: "Presented research on Sports Analytics using Computer Vision",
  //   date: "Year"
  // }
];
