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
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "Computer Vision", level: 88 },
    { name: "Natural Language Processing", level: 75 },
    { name: "TensorFlow/Keras", level: 85 },
    { name: "PyTorch", level: 80 }
  ],
  "Programming Languages": [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "C++", level: 75 },
    { name: "SQL", level: 80 }
  ],
  "Web Development": [
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "Express.js", level: 80 },
    { name: "Tailwind CSS", level: 90 }
  ],
  "Data Analytics & Visualization": [
    { name: "Power BI", level: 88 },
    { name: "Pandas", level: 90 },
    { name: "NumPy", level: 92 },
    { name: "Matplotlib/Seaborn", level: 85 },
    { name: "Excel", level: 80 }
  ],
  "Tools & Technologies": [
    { name: "Git & GitHub", level: 88 },
    { name: "Docker", level: 70 },
    { name: "Linux", level: 75 },
    { name: "OpenCV", level: 85 },
    { name: "Scikit-learn", level: 90 }
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
    title: "AI in Glass Casting - Internship",
    company: "Glass Manufacturing Company",
    location: "Location",
    duration: "Month Year - Month Year",
    type: "Internship",
    description: "Worked on developing an AI-powered system for detecting surface defects in glass manufacturing processes.",
    responsibilities: [
      "Developed CNN models for defect detection with 90%+ accuracy",
      "Implemented real-time image processing pipeline",
      "Collaborated with manufacturing team for data collection",
      "Optimized model for production deployment"
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision"]
  },
  {
    id: 2,
    title: "Google Cloud Career Launchpad - AI Leader",
    company: "Google Cloud",
    location: "Remote",
    duration: "Year",
    type: "Program",
    description: "Selected as an AI Leader in Google Cloud Career Launchpad program, focusing on cloud-based AI solutions and leadership development.",
    responsibilities: [
      "Completed advanced AI/ML training modules",
      "Built cloud-native AI applications",
      "Collaborated with peers on real-world projects",
      "Gained expertise in Google Cloud Platform services"
    ],
    technologies: ["Google Cloud Platform", "AI/ML", "Cloud Computing"]
  }
];

export const certifications = [
  {
    id: 1,
    name: "Google Cloud Career Launchpad - AI Leader",
    issuer: "Google Cloud",
    date: "Year",
    credential: "#XXXXXX"
  },
  {
    id: 2,
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "Year",
    credential: "#XXXXXX"
  },
  {
    id: 3,
    name: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "Year",
    credential: "#XXXXXX"
  }
  // Add more certifications as needed
];

export const achievements = [
  {
    id: 1,
    title: "Hackathon Winner - Women Safety Analytics",
    description: "Won first place in hackathon with innovative women safety solution",
    date: "Year"
  },
  {
    id: 2,
    title: "National Seminar Presentation",
    description: "Presented research on Sports Analytics using Computer Vision",
    date: "Year"
  },
  {
    id: 3,
    title: "Google Cloud AI Leader",
    description: "Selected for prestigious Google Cloud Career Launchpad program",
    date: "Year"
  }
];
