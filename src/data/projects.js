export const projects = [
  {
    id: 'horizon-news',
    title: 'Horizon News',
    tagline: 'Modern real-time news aggregator & digital reader platform',
    description: 'A responsive news portal delivering curated articles across technology, science, and world events with fast category filtering, dark mode reading experience, and dynamic article summaries.',
    longDescription: 'Engineered with React and modern JavaScript, Horizon News features instant topic routing, bookmarking capabilities, a distraction-free reader mode, and fluid responsive layouts designed for high visual clarity.',
    category: 'Web Application',
    featured: true,
    techStack: ['React', 'JavaScript', 'CSS3', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/itspushpank/horizon-news',
    demo: 'https://itspushpank.github.io/horizon-news',
    highlights: [
      'Multi-category filtering & keyword search',
      'Distraction-free reading view with saved articles',
      'Optimized image loading and responsive card layouts'
    ],
    accentColor: '#f0db7d',
    badge: 'Featured Project'
  },
  {
    id: 'katihar-central-library',
    title: 'Katihar Central Library',
    tagline: 'Digital catalog & academic book reservation system',
    description: 'A web-based library management platform built to streamline textbook searches, catalog browsing, issue/return tracking, and student membership management for Katihar Engineering College.',
    longDescription: 'Addresses campus textbook discovery bottlenecks with indexed search, availability indicators, and interactive student borrowing logs with intuitive tabular interfaces.',
    category: 'Campus System',
    featured: false,
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'UI Design'],
    github: 'https://github.com/itspushpank/katihar-central-library',
    demo: 'https://itspushpank.github.io/katihar-central-library',
    highlights: [
      'Search catalog by subject, ISBN, or author',
      'Real-time book availability indicator',
      'Reservation tracking interface for students'
    ],
    accentColor: '#f0db7d',
    badge: 'Campus Utility'
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    tagline: 'Academic records, attendance & semester performance tracker',
    description: 'An academic administrative application designed to manage student profiles, semester course enrollments, attendance records, and grade evaluations with clean data visualization.',
    longDescription: 'Structured with clean object-oriented principles, offering full CRUD operations on student records, grade point calculation, and filterable data tables with clean validation.',
    category: 'Management Software',
    featured: false,
    techStack: ['Python', 'Object-Oriented Design', 'File I/O', 'Data Structures'],
    github: 'https://github.com/itspushpank/student-management-system',
    demo: 'https://github.com/itspushpank/student-management-system#readme',
    highlights: [
      'Automated semester GPA & attendance analytics',
      'Data persistence with clean validation guards',
      'Modular object-oriented architecture'
    ],
    accentColor: '#f0db7d',
    badge: 'CS Core'
  },
  {
    id: 'react-portfolio',
    title: 'Antigravity Spatial Portfolio',
    tagline: 'Interactive spatial developer workspace built with CSS 3D',
    description: 'A minimal, high-performance portfolio website engineered with React and pure CSS 3D transformations. Features an interactive CLI terminal, spatial perspective cards, and a dark glassmorphism system.',
    longDescription: 'Implements native CSS perspective, transform-style preserve-3d, and cursor-tracking tilt physics without heavy 3D runtimes like Three.js. 100% responsive and accessible.',
    category: 'Frontend & 3D UI',
    featured: false,
    techStack: ['React', 'Vite', 'Tailwind CSS', 'CSS 3D Transforms'],
    github: 'https://github.com/itspushpank',
    demo: '#',
    highlights: [
      'Interactive command-line interface with history navigation',
      'CSS 3D perspective scenes & pointer-reactive depth',
      'Strictly zero WebGL / Canvas overhead for maximum performance'
    ],
    accentColor: '#f0db7d',
    badge: 'Current Site'
  }
];
