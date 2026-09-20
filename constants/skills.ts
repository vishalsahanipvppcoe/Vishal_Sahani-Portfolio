export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    skills: [
      'Spring Boot',
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST APIs',
      'JWT Authentication',
    ],
  },
  {
    title: 'Databases & Storage',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'Supabase',
      'Firebase',
      'Cloudflare R2',
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'IntelliJ IDEA',
      'VS Code',
      'Vercel',
    ],
  },
  {
    title: 'AI / Machine Learning',
    skills: [
      'OpenCV',
      'YOLOv8',
      'Scikit-learn',
      'Python ML',
      'Pandas',
      'NumPy',
      'Gemini API',
      'NVIDIA API',
    ],
  },
];
