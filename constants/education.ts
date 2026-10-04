import { TimelineViewerData } from '@/types/TimelineViewer.types';

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  score?: string;
  icon: 'grad' | 'book' | 'school';
}

export interface CertificationDetail {
  edition: string;
  role: string;
  icon?: string;
}

export interface CertificationItem {
  title: string;
  organization: string;
  logo?: string;
  link?: string;
  badge?: string;
  details?: CertificationDetail[];
}

export const education: TimelineViewerData[] = [
  {
    title:
      "Bachelor of Engineering (B.E.) in Information Technology · Vasantdada Patil Pratishthan's College of Engineering (University of Mumbai)",
    date: 'Aug 2023 – May 2027',
    description: `Pursuing B.E. in Information Technology with a strong CGPA of 8.30. Specializing in full-stack web systems (MERN), Java, DSA, DBMS, and AI API integrations.`,
    latest: true,
  },
  {
    title: 'Higher Secondary Certificate (HSC) · Elphinstone College',
    date: '2021 – 2023',
    description: 'Higher Secondary Education in Science and Technology.',
  },
  {
    title: 'Secondary School Certificate (SSC) · Sainath School, Vashi, Navi Mumbai',
    date: '2019 – 2021',
    description: 'Foundational secondary school education.',
  },
];

export const educationData: EducationItem[] = [
  {
    institution: "Vasantdada Patil Pratishthan's College of Engineering",
    degree: 'B.E. in Information Technology',
    score: 'CGPA: 8.30',
    duration: '2023 – 2027',
    icon: 'grad',
  },
  {
    institution: 'Elphinstone College',
    degree: 'Higher Secondary Certificate (HSC)',
    duration: '2021 – 2023',
    icon: 'book',
  },
  {
    institution: 'Sainath School',
    degree: 'Secondary School Certificate (SSC)',
    duration: '2019 – 2021',
    icon: 'school',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    organization: 'Simplilearn',
    title: 'Full Stack Java Development',
    logo: '/simplilearn-transparent.png',
    link: 'https://drive.google.com/file/d/16mjphDTCnLxOdDlsy35c0YAvA5-EyECo/view?usp=sharing',
  },
  {
    organization: 'NPTEL, IIT Kharagpur',
    title: 'Database Management Systems (DBMS)',
    logo: '/nptel-clean.png',
    link: 'https://drive.google.com/file/d/1mnQhHtoQG_23yZm-oEJBHyoxiKwD3dkp/view?usp=sharing',
  },
  {
    organization: '🎖️ Certificate of Appreciation',
    title: 'QUASAR 3.0 National Level Hackathon',
    logo: '/quasar-clean.png',
    link: 'https://drive.google.com/file/d/1Yjoj3pYHi_GcZMcbJVhplPMGF2Wn7qlN/view?usp=sharing',
  },
  {
    organization: '🏆 Finalist among 3,121+ participants',
    title: 'QUASAR 4.0 National Level Hackathon',
    logo: '/quasar-clean.png',
    link: 'https://drive.google.com/file/d/1Yjoj3pYHi_GcZMcbJVhplPMGF2Wn7qlN/view?usp=sharing',
  },
];