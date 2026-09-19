import { TimelineViewerData } from '@/types/TimelineViewer.types';

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  score: string;
  location: string;
  duration: string;
}

export interface CertificationItem {
  title: string;
  organization: string;
  logo?: string;
  link?: string;
}

export const education: TimelineViewerData[] = [
  {
    title:
      "Bachelor of Engineering (B.E.) in Information Technology · Vasantdada Patil Pratishthan's College of Engineering (University of Mumbai)",
    date: 'Aug 2023 – May 2027',
    description: `Pursuing B.E. in Information Technology with a strong CGPA of 8.30. Specializing in full-stack web systems (MERN), Java, DSA, DBMS, and AI API integrations.`,
    latest: true,
  },
];

export const educationData: EducationItem[] = [
  {
    institution: "Vasantdada Patil Pratishthan's College of Engineering (University of Mumbai)",
    degree: 'B.E. in Information Technology',
    field: 'Information Technology',
    score: 'CGPA: 8.30',
    location: 'Mumbai, Maharashtra',
    duration: 'Aug 2023 – May 2027',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    organization: 'Simplilearn',
    title: 'Full Stack Java',
    logo: '/simplilearn-transparent.png',
  },
  {
    organization: 'NPTEL, IIT Kharagpur',
    title: 'Database Management Systems (DBMS)',
    logo: '/nptel-clean.png',
  },
  {
    organization: 'QUASAR National Hackathon',
    title: 'QUASAR 3.0 & 4.0 (2,600+ Registrations)',
    logo: '/quasar-clean.png',
  },
];