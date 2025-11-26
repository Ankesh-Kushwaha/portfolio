import img from './Screenshot (72).png' 
import { Award, Star, Trophy } from "lucide-react";
import html from './HTML - Copy.png'
import css from './CSS-Logo.png';
import js from './Jslogo2.jpg';
import docker from './png-clipart-docker-logo-kubernetes-microservices-cloud-computing-dockers-logo-text-logo.png';
import jest from './st,small,507x507-pad,600x600,f8f8f8.u7.jpg';
import tailwind from './Tailwind_CSS_Logo.svg.png'
import mongo from './png-transparent-mongodb-plain-wordmark-logo-icon.png'
import git from './png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png';
import express from './node-js-javascript-web-application-express-js-computer-software-others-thumbnail.jpg'
import react from './react.svg'
import aws from './Amazon-Web-Services-AWS-Logo.png'
import sql from './sql-database-generic.svg'
import dsa from './186131673-9ffff84c-21b4-421b-b956-643aa0fa7dbd.png'
import redis from './png-clipart-redis-memcached-database-caching-key-value-database-others-miscellaneous-angle.png'
import c from './C_Programming_Language.svg';
import cplus from './C++logo - Copy.png';
import ts from './free-typescript-3d-icon-png-download-7577992.webp'
import quickAi from './Screenshot (61).png';
import chatty from './Screenshot (132).png'



 export const projects = [
    {
      title: "Planet Guardian-SIH-2025",
      image: img,
      link: "https://sih-2025-bice.vercel.app/",
      description: "an online platform for making environmental studies engaging in institutions ",
      TechnologyUsed:" React.js | Node.js & express.js | Mongo-Db as database | Redis as pub-sub | python- ML part| web-socket ",
      year: "2025",
    },
    {
      title: "Quick.Ai",
      image: quickAi,
      link: "https://simul-ai-client.vercel.app/",
      description: "Built a full-stack platform enabling SEO-friendly blog title generation, AI-powered image manipulation, and intelligent resume feedback. Developed frontend with React and backend with Node.js, using MongoDB for data storage.",
      TechnologyUsed:" Full-Stack Project | React, Node.js, MongoDB, AI, Generative AI | Clerk Authentication ",
      year: "2025",
    },
    {
      title: "Chatty-a real time chat web app",
      image:chatty,
      link: "https://chat-app-fawn-delta-72.vercel.app/  ",
      description: "Built a real-time chat app using React, Node, WebSocket’s and Redis for scalable, low-latency messaging. Designed room-based architecture with efficient WebSocket handling and Redis Pub/Sub broadcasting. ",
      TechnologyUsed:"React |Vite| Node.js| WebSocket’s (WS) | Redis | JWT | WebRTC | MongoDB | Vercel | Render ",
      year: "2025",
    },
];
  


export  const skills = [
    {
      name: "HTML",
      logo: `${html}`,
    },
    {
      name: "CSS",
      logo: `${css}`,
  },
    {
      name: "C-programming",
      logo: `${c}`,
  },
    {
      name: "C++",
      logo: `${cplus}`,
    },
    {
      name: "JavaScript",
      logo: `${js}`,
  },
  {
      name: "TypeScript",
      logo: `${ts}`,
  },
  {
      name: "React",
      logo: `${react}`,
  },
  {
      name: "Tailwind",
      logo:`${tailwind}`,
  },
  {
      name: "Node.js",
      logo: `${express}`
  },
  {
      name: "Git",
      logo: `${git}`,
  },
  {
      name: "Docker",
      logo: `${docker}`,
  },
  {
      name: "Testing",
      logo: `${jest}`,
  },
  {
      name: "AWS",
      logo: `${aws}`,
  }, 
  {
      name: "Mongo DB",
      logo: `${mongo}`,
  },
  {
      name: "SQL",
      logo: `${sql}`,
  },
  {
      name: "Data Structure And Algorithms",
      logo: `${dsa}`,
  },
  {
      name: "Redis",
      logo: `${redis}`,
  },
];


  
export const achievements = [
    {
      icon: `<Trophy size={40}/>`,
      title: "Solved more than 700+ DSA problems",
      desc: "Helped me overall improving my problem solving skill",
      year: "2023-25",
    },
    {
      icon: `<Award size={40}/>`,
      title: "Completed full Stack Development from 100xdev",
      desc: "Helped me to gain experience in full Stack development through building real world projects which helped me to enhance my overall full stack development journey",
      year: "2024-25",
    },
    {
      icon: `<Star size={40}/>`,
      title: "Participated in more than 5+ Hackthons",
      desc: "Got apportunity to build solution in a limited time and show case my development skills",
      year: "2023-2025",
    },
  ];