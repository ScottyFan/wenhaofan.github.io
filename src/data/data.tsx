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
import testimonialImage from '../images/testimonial.webp';
import profilepic from '../images/wenhao_pic.jpg';
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
  description: 'Personal portfolio and resume website',
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
  description: `I am a programming enthusiast who loves to build projects. I am also a student who studies AI, ML and web development. `,
  aboutItems: [
    {label: 'Location', text: 'Long Island City, New York', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Chess, Swim, Piano', Icon: SparklesIcon},
    {label: 'Study', text: 'New York University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'N/A', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Mandarin',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Vue',
        level: 7,
      },
      {
        name: 'JQuery',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 7,
      },
      {
        name: 'Flutter',
        level: 3,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'NYC Urban Growth Prediction Model',
    description:
      'Machine learning project analyzing 4 large datasets across 145 ZIP codes to predict urban growth. Implemented k-nearest neighbors imputation and multi-class classification, achieving 40% accuracy improvement.',
    url: 'https://github.com/ScottyFan/nyc-urban-growth',
    image: porfolioImage1,
  },
  {
    title: 'Manufacturing Execution System (MES)',
    description:
      'Flask-based MES application with Redis caching and PostgreSQL integration. Consolidated 8 legacy systems and migrated 1M+ records with zero data loss, deployed using Docker and Kubernetes.',
    url: 'https://github.com/ScottyFan/mes-application',
    image: porfolioImage2,
  },
  {
    title: 'Partner Sales Analytics Dashboard',
    description:
      'PowerBI dashboard with real-time data processing using Python ETL pipelines. Optimized query performance by 24% and supported 12% regional sales increase through data-driven insights.',
    url: 'https://github.com/ScottyFan/sales-analytics',
    image: porfolioImage3,
  },
  {
    title: 'Neural Networks for Zero-Sum Games',
    description:
      'Research project comparing CNN, RNN, and MLP models for zero-sum game solutions. Found RNN to be most effective for sequential data scenarios using MATLAB implementation.',
    url: 'https://github.com/ScottyFan/neural-games-research',
    image: porfolioImage4,
  },
  {
    title: 'Data Pipeline Optimization System',
    description:
      'Python-based ETL pipeline using pandas and SQLAlchemy for processing 15 regional databases. Automated data operations with stored procedures and multi-table joins.',
    url: 'https://github.com/ScottyFan/data-pipeline',
    image: porfolioImage5,
  },
  {
    title: 'Cloud Infrastructure Management',
    description:
      'Multi-cloud deployment solution using AWS, GCP, and IBM Cloud. Implemented containerized microservices with Docker and Kubernetes orchestration for manufacturing systems.',
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
        Currently pursuing advanced coursework in Operating Systems, File Systems, DevOps, and Web Development. Focusing
        on machine learning applications and data science. Leading research projects including NYC Urban Growth
        Prediction Model analyzing multiple large datasets across 145 ZIP codes.
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
        programming languages, and software engineering. Gained extensive experience in Python (5+ years), Java (3+
        years), C (3+ years), and C++ (4+ years). Participated in research at CMU during summer 2022.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2023 - August 2023',
    location: 'Wicresoft Co., Ltd - Microsoft Joint Venture, China',
    title: 'Software Engineering Intern',
    content: (
      <p>
        • Developed Python ETL data pipelines using pandas and SQLAlchemy, processing 1M+ records across 15 regional
        databases
        <br />
        • Optimized query performance by 24% through DataFrame indexing, reducing processing time from 17 to 13 seconds
        <br />
        • Created PowerBI dashboards with real-time analytics, contributing to 12% regional sales increase
        <br />• Implemented automated stored procedures for daily data operations with complex multi-table joins
      </p>
    ),
  },
  {
    date: 'May 2023 - July 2023',
    location: 'Jabil Electronic Co., Ltd, China',
    title: 'Software Engineering Intern',
    content: (
      <p>
        • Built Flask-based Manufacturing Execution System (MES) with Redis caching and RESTful API endpoints
        <br />
        • Deployed applications using Docker and Kubernetes across 3 manufacturing facilities on AWS infrastructure
        <br />
        • Successfully migrated 1M+ historical manufacturing records with zero data loss
        <br />• Achieved 95% code coverage using pytest framework and consolidated 8 legacy systems into one application
      </p>
    ),
  },
  {
    date: 'June 2022 - September 2022',
    location: 'Carnegie Mellon University, Pittsburgh, PA',
    title: 'Research Assistant',
    content: (
      <p>
        • Conducted research on neural networks effectiveness in solving zero-sum games under Professor David Woodruff
        <br />
        • Evaluated CNN, RNN, MLP, and LightGBM models using MATLAB for performance comparison
        <br />
        • Discovered RNN superiority for sequential data scenarios in zero-sum game applications
        <br />• Contributed to academic research with findings on optimal learning models for game theory applications
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
      name: 'Plato',
      text: 'The greatest wealth is to live content with little.',
    },
    {
      name: 'Albert Einstein',
      text: 'I have no special talent. I am only passionately curious.',
    },
    {
      name: 'William Shakespeare',
      text: 'Wisely, and slow. They stumble that run fast.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'wf2060@nyu.edu',
      href: 'mailto:wf2060@nyu.edu',
    },
    {
      type: ContactType.Location,
      text: 'Long Island City, New York',
      href: 'https://www.google.com/maps/place/28-10+Jackson+Ave,+Long+Island+City,+NY+11101/@40.748231,-73.9408073,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2592a851e2a17:0x428eeba66048dfe4!8m2!3d40.748231!4d-73.9382324!16s%2Fg%2F11b8v60xcc?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@scotte_fan',
      href: 'https://www.instagram.com/scotte_fan/',
    },
    {
      type: ContactType.Github,
      text: 'scottyfan',
      href: 'https://github.com/ScottyFan',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ScottyFan'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/scott-fan-485771351/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/scotte_fan/'},
];
