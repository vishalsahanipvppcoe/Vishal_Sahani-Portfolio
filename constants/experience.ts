import { TimelineViewerData } from '@/types/TimelineViewer.types';

export interface ExperienceDeliverable {
  title: string;
  description: string;
  icon: 'monitor' | 'server' | 'database' | 'bot' | 'shield';
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  type?: string;
  duration: string;
  techStack?: string[];
  points?: string[];
  deliverables?: ExperienceDeliverable[];
  metrics?: string;
}

export const experiencesTimeline: TimelineViewerData[] = [
  {
    title: 'Software Development Engineer (SDE) Intern · Chitralai',
    date: 'Jun 2026 – Sep 2026',
    description: 'Developed scalable full-stack features using React 18, TypeScript, Node.js, Express, AWS, Redis, and Docker.',
    latest: true,
  },
  {
    title: 'Java Full Stack Developer Intern · EduSkills',
    date: 'Jul 2025 – Sep 2025',
    description: 'Developed Java and SQL backend applications with RESTful APIs, OOP principles, and database management.',
  },
  {
    title: 'Student Coordinator · Training & Placement Office (TPO), PVPPCOE',
    date: 'Jan 2025 – Jan 2026',
    description: 'Coordinated placement drives and co-managed QUASAR National Hackathon with 2,600+ registrations.',
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Software Development Engineer (SDE) Intern',
    company: 'Chitralai',
    companyUrl: 'https://chitralai.com',
    duration: 'Jun 2026 – Sep 2026',
    type: 'Remote (Hyderabad), Telangana',
    techStack: [
      'React 18',
      'TypeScript',
      'Node.js',
      'Express.js',
      'AWS (EC2, S3, DynamoDB, SQS)',
      'Redis',
      'Docker',
      'GitHub Actions CI/CD',
      'Tailwind CSS',
    ],
    points: [
      'Developed and maintained full-stack application features using React, Node.js, and Express.js.',
      'Engineered scalable RESTful APIs, backend integrations, and performance optimizations.',
      'Collaborated with cross-functional teams to test, debug, and deploy production-ready updates.',
    ],
  },
  {
    id: 2,
    role: 'Java Full Stack Developer Intern (Virtual)',
    company: 'EduSkills',
    duration: 'Jul 2025 – Sep 2025',
    type: 'Remote',
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
    points: [
      'Built full-stack applications with Java, SQL, and backend RESTful API integration.',
      'Applied OOP principles, Collections Framework, and database design for real-world tasks.',
      'Strengthened backend problem-solving through hands-on system architecture and DB optimization.',
    ],
  },
  {
    id: 3,
    role: 'Student Coordinator',
    company: 'TPO, PVPPCOE',
    companyUrl: 'https://pvppcoe.ac.in',
    duration: 'Jan 2025 – Jan 2026',
    type: 'Mumbai, Maharashtra',
    techStack: ['Leadership', 'Communication', 'Event Management'],
    points: [
      'Managed placement drives, mock interview sessions, and campus recruitment operations.',
      'Co-organized QUASAR 2.0 National Hackathon with 2,800+ registrations and live coordination.',
      'Facilitated direct coordination between corporate recruiters, student candidates, and faculty.',
    ],
  },
];