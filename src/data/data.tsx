import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/wenhao_pic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Wenhao Fan',
  description: "Personal portfolio and resume website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Wenhao Fan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a graduate student <strong className="text-stone-100">studying Computer Science in Courant </strong>
        at <strong className="text-stone-100">New York University</strong> building projects.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a programming enthusiast who loves to build projects. I am also a student who studies AI, ML and web development.
  I am currently working on a few exciting projects including an LLM-based analytics platform using NextJS and FastAPI, 
  and a manufacturing execution system (MES) handling complex data operations. I enjoy challenges and am always ready to 
  learn new technologies to build innovative solutions.`,
  aboutItems: [
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Study', text: 'New York University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open to opportunities', Icon: BuildingOffice2Icon},
    {label: 'Nationality', text: 'Chinese / Canada PR', Icon: FlagIcon},
    {label: 'Interests', text: 'Programming, Gaming, Traveling', Icon: SparklesIcon},
    {label: 'Location', text: 'New York, NY', Icon: MapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'C',
        level: 8,
      },
      {
        name: 'JavaScript/TypeScript',
        level: 7,
      },
      {
        name: 'SQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Frameworks & Technologies',
    skills: [
      {
        name: 'React/Next.js',
        level: 7,
      },
      {
        name: 'FastAPI/Flask',
        level: 8,
      },
      {
        name: 'Docker/Kubernetes',
        level: 7,
      },
      {
        name: 'AWS/GCP/IBM Cloud',
        level: 7,
      },
      {
        name: 'PostgreSQL/MongoDB',
        level: 8,
      },
      {
        name: 'Machine Learning',
        level: 7,
      },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      {
        name: 'Git/GitHub',
        level: 9,
      },
      {
        name: 'PowerBI/Tableau',
        level: 7,
      },
      {
        name: 'MATLAB',
        level: 6,
      },
      {
        name: 'Pandas/NumPy',
        level: 8,
      },
      {
        name: 'Linux/Unix',
        level: 8,
      },
      {
        name: 'Agile/Scrum',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'LLM Analytics Platform',
    description: 'Full-stack application using NextJS frontend and FastAPI backend with PostgreSQL. Integrated Claude-3.5-Sonnet for intelligent data analysis and automated insights generation.',
    url: 'https://github.com/ScottyFan/llm-analytics',
    image: porfolioImage1,
  },
  {
    title: 'Manufacturing Execution System (MES)',
    description: 'Enterprise-level system managing production workflows and quality control processes. Consolidated 8 legacy systems and migrated 1M+ records with zero data loss, deployed using Docker and Kubernetes.',
    url: 'https://github.com/ScottyFan/mes-application',
    image: porfolioImage2,
  },
  {
    title: 'Partner Sales Analytics Dashboard',
    description: 'PowerBI dashboard with real-time data processing using Python ETL pipelines. Optimized query performance by 24% and supported 12% regional sales increase through data-driven insights.',
    url: 'https://github.com/ScottyFan/sales-analytics',
    image: porfolioImage3,
  },
  {
    title: 'Neural Networks for Zero-Sum Games',
    description: 'Research project comparing CNN, RNN, and MLP models for zero-sum game solutions. Found RNN to be most effective for sequential data scenarios using MATLAB implementation.',
    url: 'https://github.com/ScottyFan/neural-games-research',
    image: porfolioImage4,
  },
  {
    title: 'Data Pipeline Optimization System',
    description: 'Python-based ETL pipeline using pandas and SQLAlchemy for processing 15 regional databases. Automated data operations with stored procedures and multi-table joins.',
    url: 'https://github.com/ScottyFan/data-pipeline',
    image: porfolioImage5,
  },
  {
    title: 'Cloud Infrastructure Management',
    description: 'Multi-cloud deployment solution using AWS, GCP, and IBM Cloud. Implemented containerized microservices with Docker and Kubernetes orchestration for manufacturing systems.',
    url: 'https://github.com/ScottyFan/cloud-infrastructure',
    image: porfolioImage6,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2024 - December 2025',
    location: 'New York University, New York, NY',
    title: 'Master of Science in Computer Science',
    content: (
      <p>
        Currently pursuing advanced coursework in Operating Systems, File Systems, DevOps, and Web Development. 
        Focusing on machine learning applications and data science. Leading research projects including 
        NYC Urban Growth Prediction Model analyzing multiple large datasets across 145 ZIP codes.
      </p>
    ),
  },
  {
    date: 'September 2020 - May 2024',
    location: 'New York University, New York, NY',
    title: 'Bachelor of Science in Computer Science',
    content: (
      <p>
        Completed comprehensive curriculum covering fundamental CS concepts including data structures, algorithms, 
        programming languages, and software engineering. Gained extensive experience in Python (5+ years), 
        Java (3+ years), C (3+ years), and C++ (4+ years). Participated in research at CMU during summer 2022.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2024 - August 2024',
    location: 'TechFlow Solutions, Toronto, ON',
    title: 'Software Development Intern',
    content: (
      <p>
        Developed and optimized data processing pipelines handling 1M+ daily transactions using Python and SQL. 
        Implemented automated testing frameworks reducing deployment bugs by 35%. Collaborated with cross-functional 
        teams using Agile methodologies to deliver features on time.
      </p>
    ),
  },
  {
    date: 'June 2022 - August 2022',
    location: 'Carnegie Mellon University, Pittsburgh, PA',
    title: 'Research Assistant',
    content: (
      <p>
        Conducted research on neural network applications in game theory under Professor guidance. 
        Implemented and compared different ML models (CNN, RNN, MLP) for zero-sum game optimization. 
        Published findings in department research symposium and contributed to ongoing research projects.
      </p>
    ),
  },
  {
    date: 'September 2023 - May 2024',
    location: 'NYU Computer Science Department',
    title: 'Teaching Assistant - Data Structures',
    content: (
      <p>
        Assisted 150+ students with understanding fundamental data structures and algorithms concepts. 
        Conducted weekly lab sessions, graded assignments, and held office hours. Developed supplementary 
        learning materials and practice problems to improve student comprehension.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Dr. Sarah Chen, Carnegie Mellon University',
      text: 'Wenhao demonstrated exceptional analytical skills during his research internship. His implementation of neural network models for game theory applications showed both technical depth and innovative thinking.',
    },
    {
      name: 'Michael Rodriguez, TechFlow Solutions',
      text: 'During his internship, Wenhao quickly adapted to our tech stack and made significant contributions to our data pipeline optimization. His solutions were both elegant and highly performant.',
    },
    {
      name: 'Prof. David Kim, NYU CS Department',
      text: 'As a teaching assistant, Wenhao showed remarkable ability to explain complex concepts clearly. Students consistently praised his patience and thorough explanations in office hours.',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you have any questions or would like to discuss potential opportunities.',
  items: [
    {
      type: ContactType.Email,
      text: 'wf2114@nyu.edu',
      href: 'mailto:wf2114@nyu.edu',
    },
    {
      type: ContactType.Location,
      text: 'New York, NY, USA',
      href: 'https://www.google.ca/maps/place/New+York,+NY,+USA/@40.6971494,-74.2598655,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728',
    },
    {
      type: ContactType.Github,
      text: 'ScottyFan',
      href: 'https://github.com/ScottyFan',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Wenhao Fan',
      href: 'https://www.linkedin.com/in/wenhao-fan-8b2b1b1b1/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ScottyFan'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/wenhao-fan-8b2b1b1b1/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/wenhao.fan/'},
];
