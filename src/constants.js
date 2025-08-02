// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
// import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import nxtwaveLogo from './assets/company_logo/nxtwave.jpg';
import vtsLogo from './assets/company_logo/vts.jpg';

// Education Section Logo's
import kiotLogo from './assets/education_logo/KIOT-Logo.png';
import jbmsLogo from './assets/education_logo/jbms_logo.png';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: nxtwaveLogo,
      role: "Software Developer",
      company: " NxtWave Disruptive Technologies ",
      date: "April 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling end-to-end development from frontend interfaces to backend services. Designed responsive UIs and implemented RESTful APIs to enhance user experience and system efficiency. Collaborated with cross-functional teams in an agile environment to optimize application performance and deliver robust solutions. Additionally, contributed to generative AI (GenAI) projects, integrating AI-driven features to innovate and improve functionality.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: vtsLogo,
      role: "Software Developer Intern",
      company: "Vts enterprises india pvt ltds",
      date: "August 2024 - Feb 2025",
      desc: "Developed and deployed cross-platform mobile applications using React Native, ensuring high performance and seamless user experiences. Built responsive frontend interfaces with React.js and robust backend services with Node.js/Express, leveraging RESTful APIs for efficient data handling.",
      skills: [
        "ReactJS",
        "React Native",
        "Node JS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
   
  ];
  
  export const education = [
    {
      id: 0,
      img: kiotLogo,
      school: "Knowledge Institute of Technology",
      date: "Sept 2020 - July 2024",
      grade: "8.45 CGPA",
      desc: "I have completed my  Bachelor's degree in Electronics and Communication Engineering (BE-ECE) from Knowledge Institute of Technology ,Salem. During my time at KIOT, I gained a strong foundation in programming, software development, and electronic.  I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at KIOT  has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Engineering - BE (Electronics and Communication Engineering)",
    },
    {
      id: 1,
      img: jbmsLogo,
      school: "John Britto Matriculation Higher Secondary School",
      date: "Apr 2019 - March 2020",
      grade: "61%",
      desc: "I completed my class 12 education from John Britto Matriculation Higher Secondary School under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "XII-PCM with Biology",
    },
    {
      id: 2,
      img: jbmsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2019 - March 2020",
      grade: "78%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    }
  ];
  
  export const projects = [
  {
    id: 0,
    title: "Online Learning Platform (Backend)",
    description: "A comprehensive course management system enabling user enrollment, progress tracking, and secure payment processing. Implemented RESTful APIs for seamless frontend integration while maintaining data integrity through optimized database design.",
    // image: learningPlatformLogo, // Replace with your image reference
    tags: ["Node.js", "Express", "PostgreSQL", "REST API"],
    github: "https://github.com/Terrin-susi-rani/online-learning-backend.git",
    webapp: "your-deployed-link",
    highlights: [
      "Designed highly normalized SQL schema reducing data redundancy by 40%",
      "Implemented JWT authentication for secure API access",
      "Integrated Stripe payment gateway for course purchases"
    ]
  },
  {
    id: 1,
    title: "Job Portal System",
    description: "Full-featured recruitment platform with job posting capabilities, applicant filtering system, and employer analytics dashboards. Optimized for high-performance search operations and real-time data processing.",
    // image: jobPortalLogo, // Replace with your image reference
    tags: ["Node.js", "MySQL", "Redis", "Full-Text Search"],
    github: "https://github.com/Terrin-susi-rani/job-portal-backend.git",
    webapp: "your-deployed-link",
    highlights: [
      "Reduced search response time by 50% through full-text indexing",
      "Implemented Redis caching for frequently accessed job listings",
      "Developed employer dashboard with applicant tracking metrics"
    ]
  },
  {
    id: 2,
    title: "BigBasket Clone (Grocery Delivery)",
    description: "E-commerce backend solution mimicking BigBasket's core functionality with inventory management, shopping cart system, and checkout processing. Featured real-time updates to handle high-volume transactions during peak hours.",
    // image: groceryAppLogo, // Replace with your image reference
    tags: ["Node.js", "MongoDB", "SQLite", "WebSockets"],
    github: "https://github.com/Terrin-susi-rani/BigBasket---Online-Grocery-Shopping-and-Delivery.git",
    webapp: "your-deployed-link",
    highlights: [
      "Implemented real-time stock updates using WebSockets",
      "Designed hybrid database architecture (MongoDB for catalog + SQLite for transactions)",
      "Optimized cart API to handle 1000+ concurrent users"
    ]
  },
  {
  id: 3,
  title: "Jungle Quest - Python Learning Platform",
  description: "A gamified MERN stack application that teaches Python programming through interactive challenges set in a jungle adventure theme. Students earn badges and track progress while solving coding problems with real-time feedback.",
  // image: jungleQuestLogo, // Replace with your image import
  tags: [
    "MERN Stack",
    "Python Execution",
    "JWT Auth",
    "Monaco Editor",
    "Gamification",
    "Tailwind CSS"
  ],
  github: "https://github.com/Terrin-susi-rani/jungle.git",
  webapp: "https://jungle-quest-app.vercel.app/", // Replace with your URL
  highlights: [
    "Implemented real-time Python code execution with safe sandboxing",
    "Designed jungle-themed UI with custom progress tracking visualizations",
    "Built admin dashboard for challenge creation and student analytics",
    "Developed badge system with 15+ unlockable achievements",
    "Optimized MongoDB queries for fast progress tracking"
  ]
},
{
  id: 4,
  title: "MindTrack - Personal Growth Tracker",
  description: "A full-stack mental wellness platform combining habit tracking, journaling with sentiment analysis, and productivity analytics. Helps users build routines while monitoring emotional patterns through data visualization.",
  // image: mindtrackLogo, // Replace with your image import
  tags: [
    "MERN Stack",
    "JWT Auth",
    "Sentiment Analysis",
    "Chart.js",
    "Markdown",
    "PWA"
  ],
  github: "https://github.com/yourusername/mindtrack",
  webapp: "https://mindtrack-app.vercel.app/", // Replace with your URL
  highlights: [
    "Implemented journal sentiment analysis using NLP algorithms",
    "Designed streak tracking system with GitHub-like contribution grids",
    "Built interactive dashboards with mood trend visualizations",
    "Developed Markdown support for rich journal entries",
    "Added PWA capabilities for offline functionality",
    "Created habit formation algorithms with reminder systems"
  ]
}
];