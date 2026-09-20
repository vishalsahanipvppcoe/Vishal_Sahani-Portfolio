export interface Project {
  title: string;
  slug: string;
  subtitle: string;
  tagline?: string;
  overview?: string;
  number: string;
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
    live: string;
    github: string;
  };
}

export const projects: Project[] = [
  {
    title: 'CareerSkill Build',
    slug: 'careerskill-build',
    number: '1',
    subtitle: 'AI-Powered Career Intelligence SaaS',
    tagline: 'AI-Powered Career Intelligence SaaS platform with Gemini & NVIDIA API integration',
    overview: 'An AI-powered MERN SaaS platform for career guidance, recruitment, and learning management featuring role-based dashboards and resume analysis.',
    techStack: [
      'React.js',
      'Node.js',
      'Gemini API',
      'NVIDIA API',
      'MongoDB',
      'JWT Authentication',
      'Docker',
      'Redis',
      'Razorpay',
    ],
    featuresTitle: 'Features:',
    features: [
      'AI-powered MERN SaaS platform for career guidance and learning management',
      'Integrated Google Gemini API & NVIDIA API for resume analysis and skill-gap detection',
      'Developed JWT authentication, RBAC, recruiter dashboards, and Razorpay payments',
      'Scalable REST APIs with MongoDB-backed analytics tracking',
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
    number: '2',
    subtitle: 'Hyperlocal Community Platform & Microservices Architecture',
    comingSoon: true,
    tagline: 'Microservices & vertical architecture platform for hyperlocal commerce, community feeds, and location discovery',
    overview: 'A high-performance hyperlocal community platform designed with a vertical architecture flow connecting clients via API Gateway to dedicated services for businesses, activities, community feeds, and auth.',
    techStack: [
      'Spring Boot',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Firebase',
      'Google Maps API',
      'JWT Authentication',
      'Docker',
    ],
    featuresTitle: 'System Architecture & Highlights:',
    features: [
      'API Gateway with request routing, rate limiting & throttling for resilient service communication',
      'Business Service managing hyperlocal offers, catalog indexing, and merchant listings',
      'Activity & Community Services handling event discovery, posts, and real-time feeds',
      'Integrated Google Maps API for geolocation discovery, Redis caching & Firebase real-time notifications',
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
        'Client (React / Android Java/Kotlin)',
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
      live: 'https://connectlocal.vercel.app',
      github: 'https://github.com/vishalsahanipvppcoe/ConnectLocal',
    },
  },
];