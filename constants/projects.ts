export const projects = [
  {
    title: "AI Placement Platform (MERN + Gemini AI)",
    slug: "ai-placement-platform",
    tagline:
      "AI-powered platform to evaluate placement readiness with real-time interview feedback.",

    overview:
      "Built a full-stack platform to assess student placement readiness using DSA, aptitude, and project evaluation. Integrated Gemini API to simulate real interview scenarios and generate personalized improvement insights.",

    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Gemini API",
    ],

    features: [
      "AI-based interview feedback using Gemini API",
      "Multi-factor scoring system (DSA, aptitude, projects)",
      "Personalized improvement suggestions",
      "Real-time performance tracking dashboard",
    ],

    challenges: [
      "Designing a fair scoring algorithm combining multiple metrics",
      "Handling real-time AI responses efficiently",
      "Structuring dynamic evaluation data in backend",
    ],

    learnings: [
      "Practical experience with LLM integration in real-world apps",
      "Improved backend system design and data modeling",
      "Built scalable evaluation logic for performance tracking",
    ],

    feedback: false,

    links: {
      live: "#",
      github: "#",
    },
  },

  {
    title: "StudyNotion – Full Stack EdTech Platform",
    slug: "studynotion",
    tagline:
      "Production-level EdTech platform with authentication, payments, and role-based access.",

    overview:
      "Developed a scalable MERN-based EdTech platform supporting students and instructors with secure authentication, course management, and integrated payments using Razorpay.",

    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Razorpay",
      "Cloudinary",
    ],

    features: [
      "JWT authentication with OTP verification",
      "Role-based system (Student, Instructor, Admin)",
      "Course management with cart and wishlist",
      "Secure Razorpay payment integration",
      "Cloudinary-based media storage",
    ],

    challenges: [
      "Implementing secure OTP authentication flow",
      "Designing scalable REST APIs",
      "Integrating payment gateway securely",
    ],

    learnings: [
      "Strong understanding of full-stack MERN architecture",
      "Real-world experience with payment systems",
      "Improved backend API design and database structuring",
    ],

    feedback: true,

    links: {
      live: "https://m-three-red.vercel.app/",
      github: "https://github.com/vishalsahanipvppcoe/StudyNotion",
    },
  },

  {
    title: "Wanderlust – Property Listing Platform",
    slug: "wanderlust",
    tagline:
      "Full-stack property listing platform with authentication and review system.",

    overview:
      "Built a backend-focused property listing platform with authentication, CRUD operations, and user-generated reviews using MVC architecture.",

    techStack: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "EJS",
    ],

    features: [
      "User authentication and authorization",
      "CRUD operations for property listings",
      "Review and rating system",
      "Role-based access control",
    ],

    challenges: [
      "Implementing MVC architecture in backend",
      "Designing secure authorization system",
      "Managing complex CRUD operations",
    ],

    learnings: [
      "Strong backend fundamentals and API design",
      "Hands-on experience with MVC pattern",
      "Improved database handling and application structure",
    ],

    feedback: false,

    links: {
      live: "#",
      github: "https://github.com/vishalsahanipvppcoe/wanderlust",
    },
  },
];