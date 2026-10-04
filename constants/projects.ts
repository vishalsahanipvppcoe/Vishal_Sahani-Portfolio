export interface Project {
  title: string;
  slug: string;
  subtitle: string;
  tagline?: string;
  overview?: string;
  description?: string;
  image?: string;
  number: string;
  badge?: string;
  techStack: string[];
  featuresTitle?: string;
  features: string[];
  challenges?: string[];
  learnings?: string[];
  architecture?: {
    flow: string[];
    services: string[];
  };
  feedback?: boolean;
  comingSoon?: boolean;
  links: {
    live?: string;
    github: string;
  };
}

export const projects: Project[] = [
  {
    title: 'CareerSkill Build',
    slug: 'careerskill-build',
    number: '01',
    subtitle: 'AI-Powered Career Intelligence SaaS',
    badge: 'Live',
    image: '/projects/careerskill.jpg',
    description:
      'A comprehensive career guidance platform with AI-powered resume analysis, skill gap detection, and personalized roadmaps for students and professionals.',
    tagline: 'AI-Powered Career Intelligence SaaS platform with Gemini & NVIDIA API integration',
    overview:
      'An AI-powered MERN SaaS platform for career guidance, recruitment, and learning management featuring role-based dashboards and resume analysis.',
    techStack: [
      'React.js',
      'Node.js',
      'Gemini API',
      'NVIDIA API',
      'MongoDB',
      'JWT Auth',
      'Docker',
      'Redis',
      'Razorpay',
    ],
    featuresTitle: 'KEY FEATURES',
    features: [
      'AI-powered resume analysis & skill recommendations',
      'Personalized career roadmaps and learning paths',
      'JWT authentication, RBAC & recruiter dashboards',
      'Scalable REST APIs with MongoDB analytics',
      'Integrated payment system with Razorpay',
    ],
    challenges: [
      'Handling real-time AI prompt responses with minimal latency',
      'Structuring flexible MongoDB schemas for multi-tenant recruiter analytics',
      'Ensuring secure payment webhooks and role-based access control',
    ],
    learnings: [
      'Practical LLM fine-tuning and prompt engineering workflows',
      'Production-grade MERN architecture and state synchronization',
      'Payment gateway lifecycle and error resilience',
    ],
    feedback: true,
    links: {
      live: 'https://studynotion-liard-zeta.vercel.app/',
      github: 'https://github.com/vishalsahanipvppcoe/Studynotion',
    },
  },
  {
    title: 'ConnectLocal',
    slug: 'connect-local',
    number: '02',
    subtitle: 'Hyperlocal Community Platform & Microservices Architecture',
    comingSoon: true,
    badge: 'Coming Soon',
    image: '/projects/connectlocal.jpg',
    description:
      'A community-driven platform to discover local services, events, and businesses with a scalable microservices backend and real-time features.',
    tagline: 'Microservices & vertical architecture platform for hyperlocal commerce, community feeds, and location discovery',
    overview:
      'A high-performance hyperlocal community platform designed with a vertical architecture flow connecting clients via API Gateway to dedicated services for businesses, activities, community feeds, and auth.',
    techStack: [
      'React.js',
      'Flutter',
      'Spring Boot',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Firebase',
      'Google Maps API',
      'JWT Auth',
      'Docker',
    ],
    featuresTitle: 'KEY FEATURES',
    features: [
      'API Gateway with request routing and rate limiting',
      'Hyperlocal offers, event discovery and merchant listings',
      'Real-time notifications with Firebase & Redis',
      'Community services, posts, and activity feeds',
      'Google Maps integration with location-based discovery',
    ],
    challenges: [
      'Designing low-latency API gateway routing and rate throttling across microservices',
      'Optimizing spatial queries and location radius calculations in PostgreSQL with Redis caching',
      'Structuring event-driven messaging patterns (Future: Kafka / Pub-Sub)',
    ],
    learnings: [
      'Microservices decomposition with dedicated vertical domain boundaries',
      'Redis caching strategies for frequent location-based catalog lookups',
      'Containerized deployment using Docker for reproducible local and cloud environments',
    ],
    architecture: {
      flow: [
        'Client (React / Flutter App)',
        'API Gateway (Routing & Throttling)',
        'Auth Service (JWT via Auth service)',
        'Business Service (Offers & Listings)',
        'Activity Service (Events & Feeds)',
        'Community Service (Profiles & Posts)',
      ],
      services: [
        'Spring Boot / Node.js backend services',
        'PostgreSQL for relational spatial data',
        'Redis for distributed caching',
        'Firebase for real-time push events',
        'Google Maps API for geospatial indexing',
        'Dockerized service environment',
      ],
    },
    feedback: true,
    links: {
      live: '#',
      github: 'https://github.com/vishalsahanipvppcoe/ConnectLocal',
    },
  },
  {
    title: 'RiskVision.ai',
    slug: 'risk-vision',
    number: '03',
    subtitle: 'Real-Time AI Violence Detection & Alert System',
    badge: 'Academic Project',
    image: '/projects/riskvision.jpg',
    description:
      'An AI-powered surveillance system for real-time violence detection using computer vision, with automated alerts, incident recording, and secure cloud storage.',
    tagline: 'Real-time AI violence detection from live video feeds with automated Firebase recording and Twilio alerts',
    overview:
      'An academic AI surveillance system integrating YOLO and OpenCV with a Python Flask backend for real-time violence detection from video feeds, automated incident recording with Firebase Storage, and Twilio APIs for automated SMS/call alerts with a React dashboard for real-time monitoring and incident management.',
    techStack: [
      'Python',
      'Flask',
      'YOLOv8',
      'OpenCV',
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Firebase',
      'Twilio',
      'Git',
    ],
    featuresTitle: 'KEY FEATURES',
    features: [
      'Real-time violence detection using YOLO & OpenCV',
      'Automated incident recording and secure storage',
      'Twilio integration for SMS/call alerts',
      'React dashboard for live monitoring and analytics',
      'Deployed with Firebase and scalable cloud architecture',
    ],
    challenges: [
      'Minimizing inference latency to achieve continuous real-time video stream processing with YOLO and OpenCV',
      'Handling asynchronous video snippet clipping and reliable upload to Firebase Storage upon threat detection',
      'Preventing alert fatigue while ensuring zero dropped emergency SMS/call notifications via Twilio APIs',
    ],
    learnings: [
      'Real-time computer vision inference pipelines and frame classification using OpenCV and YOLO models',
      'Cloud media storage integration with Firebase Storage for incident archival and evidence tracking',
      'Automated multi-channel emergency alert dispatch architecture using Twilio REST APIs in Flask',
    ],
    architecture: {
      flow: [
        'Video Feed / Camera Stream (OpenCV Ingestion)',
        'YOLO Inference Engine (Real-Time Violence Detection)',
        'Flask Backend (Incident Analysis & Event Dispatcher)',
        'Firebase Storage (Evidence Video Recording & Cloud Archival)',
        'Twilio API (Instant SMS & Automated Emergency Voice Calls)',
        'React + Vite Dashboard (Operator Real-Time Monitoring & Logs)',
      ],
      services: [
        'Python Flask REST backend handling video streams and model inference',
        'YOLO & OpenCV deep learning vision pipeline for frame analysis',
        'Firebase Cloud Storage & Firestore for incident logs and video clips',
        'Twilio Programmable Messaging & Voice API for emergency notifications',
        'React.js + Vite + Tailwind CSS operator dashboard',
      ],
    },
    feedback: true,
    links: {
      live: '#',
      github: 'https://github.com/vishalsahanipvppcoe/RiskVision',
    },
  },
];