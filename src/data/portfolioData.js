export const personalInfo = {
  name: "Nishant Bayaskar",
  role: "ML Engineer | AI Developer | Data Analyst | Full Stack Learner",
  email: "sarikishor31032005@gmail.com",
  phone: "+91 8766098443",
  location: "India",
  bio: "Passionate ML Engineer and AI Developer specializing in Computer Vision, Deep Learning, and Data Analytics. Currently pursuing B.E. in Computer Science & Engineering at SGBAU. Experienced in building intelligent systems using cutting-edge technologies and frameworks.",
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
    title: "Civic Issue Detection Project",
    description: "An AI-powered system to detect and classify civic issues from images using computer vision and deep learning techniques.",
    image: "/projects/civic-detection.jpg",
    tags: ["Computer Vision", "Deep Learning", "Python", "TensorFlow"],
    category: "AI/ML",
    github: "https://github.com/yourusername/civic-detection",
    demo: "https://civic-detection-demo.com",
    featured: true,
    highlights: [
      "Real-time civic issue detection with 92% accuracy",
      "Multi-class classification for various civic problems",
      "Integration with municipal reporting systems"
    ]
  },
  {
    id: 2,
    title: "Glass Surface Defect Detection",
    description: "Automated defect detection system for glass manufacturing using advanced image processing and ML algorithms.",
    image: "/projects/glass-defect.jpg",
    tags: ["Computer Vision", "CNN", "OpenCV", "Quality Control"],
    category: "AI/ML",
    github: "https://github.com/yourusername/glass-defect",
    demo: null,
    featured: true,
    highlights: [
      "Reduced manual inspection time by 70%",
      "Detected 8 different types of defects",
      "Implemented as internship project at AI in Glass Casting"
    ]
  },
  {
    id: 3,
    title: "Women Safety Analytics",
    description: "Hackathon-winning project for real-time women safety monitoring using AI-powered threat detection and alert systems.",
    image: "/projects/women-safety.jpg",
    tags: ["AI", "Computer Vision", "IoT", "React", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/yourusername/women-safety",
    demo: "https://women-safety-demo.com",
    featured: true,
    highlights: [
      "Won Best Innovation Award at Hackathon",
      "Real-time threat detection and emergency alerts",
      "Integrated GPS tracking and SOS features"
    ]
  },
  {
    id: 4,
    title: "Car Price Prediction",
    description: "Machine learning model to predict car prices based on various features using regression algorithms and ensemble methods.",
    image: "/projects/car-price.jpg",
    tags: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis"],
    category: "AI/ML",
    github: "https://github.com/yourusername/car-price-prediction",
    demo: null,
    featured: false,
    highlights: [
      "R² score of 0.94 on test data",
      "Feature engineering and optimization",
      "Web interface for predictions"
    ]
  },
  {
    id: 5,
    title: "Sports Analytics with Computer Vision",
    description: "Comprehensive sports analytics system using YOLO for object detection, XGBoost for predictions, and OpenPose for pose estimation.",
    image: "/projects/sports-analytics.jpg",
    tags: ["YOLO", "XGBoost", "OpenPose", "Computer Vision"],
    category: "AI/ML",
    github: "https://github.com/yourusername/sports-analytics",
    demo: null,
    featured: true,
    highlights: [
      "Presented at National Seminar",
      "Player tracking and action recognition",
      "Performance metrics analysis"
    ]
  },
  {
    id: 6,
    title: "MERN Stack Projects",
    description: "Collection of full-stack web applications built with MongoDB, Express.js, React, and Node.js.",
    image: "/projects/mern-projects.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    github: "https://github.com/yourusername/mern-projects",
    demo: null,
    featured: false,
    highlights: [
      "E-commerce platform with payment integration",
      "Social media dashboard",
      "Task management system"
    ]
  }
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
    institution: "Sant Gadge Baba Amravati University (SGBAU)",
    location: "Amravati, Maharashtra",
    duration: "2021 - 2025",
    score: "X.XX CGPA",
    description: "Specialization in Machine Learning, Artificial Intelligence, and Data Science. Active participant in hackathons and technical events.",
    highlights: [
      "Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, Data Structures",
      "Final Year Project: [Your FYP Title]",
      "Academic Achievements: [Mention any awards/scholarships]"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Your College Name",
    location: "Your City",
    duration: "2019 - 2021",
    score: "XX%",
    description: "Science stream with Mathematics and Computer Science."
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Your School Name",
    location: "Your City",
    duration: "Completed 2019",
    score: "XX%",
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
