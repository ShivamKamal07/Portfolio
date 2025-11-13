// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import BootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import javaLogo from "./assets/tech_logo/java.png";
import renderLogo from "./assets/tech_logo/render.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";

// Education Section Logo's
import upBoard from "./assets/education_logo/upBoard.png";
import foet from "./assets/education_logo/foet.png";
// Project Section Logo's
import powerflex from "./assets/work_logo/EduPlayRural.png";
import shopfinity from "./assets/work_logo/Zerodha.png";
import grocify from "./assets/work_logo/Zerodha.png";
import evion from "./assets/work_logo/AiVoice.png";

// certificates&extraCurriculuarActivities images
import mad from "./assets/certificate_activity_img/mad.jpeg";
import mern from "./assets/certificate_activity_img/mern1.jpeg";
import olevel from "./assets/certificate_activity_img/olevel.jpg";
import poster from "./assets/certificate_activity_img/poster.jpeg";
import publication from "./assets/certificate_activity_img/publication.jpeg";
import umaga from "./assets/certificate_activity_img/umaga.jpeg";
import poster1 from "./assets/certificate_activity_img/myposter1.jpeg";
import poster2 from "./assets/certificate_activity_img/myposter2.jpeg";
import balaji from "./assets/certificate_activity_img/balaji.png";
import bbdu from "./assets/certificate_activity_img/bbdu.png";
import journal from "./assets/certificate_activity_img/journal.png";
import olevellogo from "./assets/certificate_activity_img/nielit.jpg";
import { BsBootstrap } from "react-icons/bs";
import { GrDomain } from "react-icons/gr";

export const SkillsInfo = [
  {
    id: 1,
    name: "HTML",
    logo: htmlLogo,
  },
  {
    id: 2,
    name: "CSS",
    logo: cssLogo,
  },
  {
    id: 3,
    name: "JavaScript",
    logo: javascriptLogo,
  },
  {
    id: 4,
    name: "React JS",
    logo: reactjsLogo,
  },
  {
    id: 5,
    name: "Tailwind CSS",
    logo: tailwindcssLogo,
  },
  {
    id: 6,
    name: "BootStrap",
    logo: BootstrapLogo,
  },

  {
    id: 7,
    name: "Node JS",
    logo: nodejsLogo,
  },
  {
    id: 8,
    name: "Express JS",
    logo: expressjsLogo,
  },
  {
    id: 9,
    name: "MongoDB",
    logo: mongodbLogo,
  },
  {
    id: 10,
    name: "MySql",
    logo: mysqlLogo,
  },
  {
    id: 11,
    name: "Java",
    logo: javaLogo,
  },
  {
    id: 12,
    name: "Python",
    logo: pythonLogo,
  },
  {
    id: 13,
    name: "Git",
    logo: gitLogo,
  },
  {
    id: 14,
    name: "GitHub",
    logo: githubLogo,
  },
  {
    id: 15,
    name: "VS Code",
    logo: vscodeLogo,
  },

  {
    id: 16,
    name: "Netlify",
    logo: netlifyLogo,
  },
  {
    id: 17,
    name: "Render",
    logo: renderLogo,
  },
];

export const education = [
  {
    id: 0,
    img: foet,
    school: "University of Lucknow, Lucknow",
    date: "2023 - 2027",
    grade: "7.1 CGPA",
    degree: "Bachelor of Technology",
    Domain:"CSE",
  },
  {
    id: 1,
    img: foet,
    school: "Veer Bahadur Singh Purvanchal University, Jaunpur",
    date: "2020 - 2023",
    grade: "56.20%",
    degree: "Bachelor of Commerce (B.Com)",
  },
  {
    id: 2,
    img: upBoard,
    school: "Private Candidate",
    date: "2019 - 2020",
    grade: "70.80%",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 3,
    img: upBoard,
    school: "BSY Shikshan Sansthan, Tulasipur, Ghazipur",
    date: "2016 - 2017",
    grade: "8.2 CGPA",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 1,
    title: "Airbnb",
    description:
      "A full-stack travel accommodation platform built with Node.js, Express.js, and MongoDB. It features property listing, secure user authentication (JWT-based login/signup), and an optimized responsive UI for both desktop and mobile. Enhanced booking experience with advanced search and filtering options for smooth property discovery.",
    image: shopfinity,
    tags: ["JavaScripts", "Bootstrap", "Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/ShivamKamal07/Airbnb",
    webapp: "https://wanderlust-vtdo.onrender.com/listings",
  },
  {
    id: 2,
    title: "Zerodha",
    description:
      "A real-time stock trading simulation platform developed using React.js, Node.js, Express.js, and MongoDB. Includes portfolio management, live market API integration, and interactive data visualization using Chart.js/Recharts. Implements a role-based authentication system for realistic trading workflows and secure user sessions.",
    image: grocify,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB","REST API", "Bootstrap"],
    github: "https://github.com/ShivamKamal07/Zerodha",
    webapp: "",
  },

  {
    id: 3,
    title: "AI-Voice-Interview-Platform",
    description:
      "An AI-powered voice interview system built with React.js, Node.js, Express.js, Firebase, and Google Gemini API. It enables real-time voice communication, automated question generation, and response evaluation. Designed with a secure backend, scalable data handling, and an intuitive dashboard for both users and administrators..",
    image: evion,
    tags: ["React.js", "Node.js", "FireBase", "Tailwind CSS","Gemini API","Vapi Workflows","typeScript"],
    github: "https://github.com/ShivamKamal07/AI-Voice-Interview-Platform",
    webapp: "https://voiceagent-px87.onrender.com",
  },
  {
    id: 4,
    title: "EduPlayRural",
    description:
      "EduPlayRural is a web-based learning platform designed to make education more accessible for rural students. It offers interactive lessons, quizzes, smart notebooks, progress tracking, leaderboards, and an AI-powered chatbot — all within a bilingual (Hindi and English) dashboard.Built with Python (Django), HTML, CSS, and JavaScript, the platform provides personalized learning experiences where students can view progress across subjects like Hindi, English, Math, and Science, engage in self-assessment quizzes, and compete with peers through a leaderboard system.",
    image: powerflex,
    tags: [
      "JavaScript",
      "Python(Django)",
      "Bootstrap",
      "SQLite",
      
    ],
    github: "https://github.com/ShivamKamal07/EduPlayRural",
    webapp: "",
  },
];

export const certificates = [
  {
    id: 1,
    title: "MERN Stack",
    issuer: "Shri Balaji Infotech",
    date: "Feb 2025 - May 2025",
    description:
      "Completed a 3-month MERN stack training covering MongoDB, ExpressJS, ReactJS, NodeJS, Tailwind Css, HTML, CSS, JavaScript.",
    certificateImage: mern,
    logo: balaji,
  },
  {
    id: 2,
    title:
      "Cyberbullying Detection: A Machine Learning Approach using Social Media Data",
    issuer: "IJSREM Journal",
    date: "January 2025",
    description:
      "Published a research paper presenting a machine learning-based model for detecting cyberbullying on social media. The study applied text classification techniques, feature extraction using TF-IDF, and evaluated multiple algorithms including SVM, Decision Trees, Random Forests, and Naive Bayes, achieving a highest accuracy of 83%.",
    certificateImage: publication,
    logo: journal,
  },
  {
    id: 3,
    title: "Mobile Application Development",
    issuer: "Babu Banarasi Das University, School of Computer Applications",
    date: "July 2024",
    description:
      "Completed a Value Added Course on 'Mobile Application Development' offered by the School of Computer Applications at Babu Banarasi Das University.",
    certificateImage: mad,
    logo: bbdu,
  },
  {
    id: 4,
    title: "O Level (1 year)",
    issuer:
      "National Institute of Electronics and Information Technology (NIELIT)",
    date: "December 2023",
    description:
      "Successfully completed all theory and practical modules of the DOEACC 'O' Level Examination, with an overall grade of 'B' and an overall percentage of 70.30%. The subjects covered included Information Technology Tools and Network Basics, Web Designing & Publishing, Programming and Problem Solving through Python, and Internet of Things and its Application.",
    certificateImage: olevel,
    logo: olevellogo,
  },
];

export const extraCurricularActivities = [
  {
    id: 1,
    title: "Poster Making Competition",
    date: "6 August 2024",
    description:
      "Participated in the 'Poster Making Competition' at the EC Building, SOCA, BBD University, Lucknow, and designed a poster on Gender Equality that was featured on the college notice board.",
    certificateImage: poster2,
  },
  {
    id: 2,
    certificateImage: poster1,
  },
  {
    id: 3,
    title: "Workshop on Cyber Security and Ethical Hacking",
    date: "Oct 14, 2023",
    description:
      "Participated in a workshop on Cyber Security and Ethical Hacking conducted by Umaga Technologies Pvt. Ltd., and organized by Team Lakshya, the official Event Management Team of SOCA.",
    certificateImage: umaga,
  },
];
