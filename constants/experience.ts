import { TimelineViewerData } from '@/types/TimelineViewer.types';

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location?: string;
  type?: string;
  duration: string;
  techStack?: string[];
  points?: string[];
  metrics?: string;
}

export const experiencesTimeline: TimelineViewerData[] = [
  {
    title: 'Software Development Engineer (SDE) Intern · Chitralai',
    date: 'Jun 2026 – Present',
    description: 'Developed scalable full-stack features using React.js, TypeScript, Node.js, and Express.js with Docker.',
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
    duration: 'Jun 2026 – Present',
    type: 'Remote (Hyderabad, Telangana)',
    techStack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'Docker', 'Git', 'GitHub'],
    points: [
      'Developed scalable full-stack application features using React.js, TypeScript, Node.js, and Express.js.',
      'Built reusable REST APIs, authentication modules, and backend services following software engineering best practices.',
      'Collaborated with developers using Git, GitHub, and Docker to debug issues and deliver production-ready features.',
    ],
  },
  {
    id: 2,
    role: 'Java Full Stack Developer Intern (Virtual)',
    company: 'EduSkills',
    duration: 'Jul 2025 – Sep 2025',
    type: 'Remote',
    techStack: ['Java', 'SQL', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'DBMS', 'OOP'],
    points: [
      'Applied Java, OOP principles, Collections Framework, and Exception Handling to develop real-world solutions.',
      'Built full-stack applications using Java, SQL, and backend RESTful API integration.',
      'Strengthened problem-solving skills through hands-on database operations and system design.',
    ],
  },
  {
    id: 3,
    role: 'Student Coordinator',
    company: 'Training & Placement Office (TPO), PVPPCOE',
    duration: 'Jan 2025 – Jan 2026',
    type: 'Mumbai, Maharashtra',
    metrics: '2,600+ Hackathon registrations',
    points: [
      'Coordinated placement drives, mock interviews, and campus recruitment events for recruiters and students.',
      'Co-managed the QUASAR 3.0 National Hackathon with 2,600+ registrations, handling event logistics and coordination.',
    ],
  },
];