import Pdms from "../assets/pdms.png";
import Zrg from "../assets/zrg.jpg";

import javascript from "../assets/technologies/javascript.png";
import typescript from "../assets/technologies/typescript.png";
import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import reactjs from "../assets/technologies/reactjs.png";
import redux from "../assets/technologies/redux.png";
import barcode from "../assets/barcodetext.png";
import nodejs from "../assets/technologies/nodejs.png";
import mongodb from "../assets/technologies/mongodb.png";
import git from "../assets/technologies/git.png";
import figma from "../assets/technologies/figma.png";
import swift from "../assets/technologies/swift.jpg";
import swiftui from "../assets/technologies/swiftui.png";
import firebase from "../assets/technologies/firebase.png";
import threejs from "../assets/technologies/threejs.svg";
import weather from "../assets/weather.jpeg";
import todolist from "../assets/todolist.jpeg";
import chatty from "../assets/projects/chatty.jpeg";
import ipark from "../assets/projects/ipark.jpeg";
import nanny from "../assets/projects/nanny.jpg";
import shop from "../assets/shop.jpg";
import football from "../assets/projects/football.png";

export const Infos = {
  summary:
    "As an iOS developer, I am deeply passionate about crafting cutting-edge and user-centric applications. With a strong dedication to continuous learning and growth, I stay ahead of the latest trends and technologies in the iOS ecosystem. My expertise in iOS development enables me to deliver exceptional results, translating ideas into feature-rich, visually stunning, and intuitive apps.I am committed to creating applications that not only meet but exceed user expectations, by seamlessly blending form and function. My goal is to provide an exceptional user experience that leaves a lasting impression. With a keen eye for design and a focus on performance, I ensure that every app I develop is both aesthetically pleasing and efficient. Whether it's building innovative solutions from scratch or optimizing existing applications, I thrive on challenges and embrace the opportunity to create impactful software. As an iOS developer, I take pride in my ability to bring ideas to life and contribute to the ever-evolving world of mobile applications.",

  experience: [
    {
      img: Pdms,
      title: "Junior Software Engineer (iOS)",
      place: "Pak Data Management Services (PDMS)",
      date: "June 2023 - Present",
      isIti: true,
    },
    {
      img: Pdms,
      title: "Web Development Intern",
      place: "Pak Data Management Services (PDMS)",
      date: "June 2022 - August 2022",
      isIti: false,
    },
    {
      img: Zrg,
      title: "Development Intern",
      place: "ZRG International",
      date: "June 2021 - August 2021",
      isIti: false,
    },
  ],
  technologies: [
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Swift UI",
      icon: swiftui,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },

    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "git",
      icon: git,
    },
  ],
  projects: [
    {
      img: weather,
      title: "Weather App",
      subTitle:
        "An interactive mobile app for which displays weather information after fetching your current location. Now stay updated with weather forecast anywhere in the world",
      tech: [
        {
          name: "#swift",
          color: "#a1e9ff",
        },
        {
          name: "#iOS",
          color: "#ffc8ae",
        },
        {
          name: "#storyboard",
          color: "#ffcc80",
        },
        // {
        //   name: "#",
        //   color: "#a5d6a7",
        // },
        // {
        //   name: "#framer-motion",
        //   color: "#ffe082",
        // },
      ],
      demo: "https://drive.google.com/file/d/1Nf44J0JnSxlm5qg445LHuDOM45sVIqN2/view?usp=drivesdk",
      github: "https://github.com/ahmed-ahsan2001/weatherappios",
    },
    {
      img: todolist,
      title: "To-Do List ",
      subTitle:
        "A dynamic To-Do List using Swift Ui and firebase which is incorporated with login and signup functionality.",
      tech: [
        {
          name: "#swiftUI",
          color: "#a1e9ff",
        },
        {
          name: "#swift",
          color: "#ffc8ae",
        },
        {
          name: "#ios",
          color: "#ffcc80",
        },
        {
          name: "#firebase",
          color: "#a5d6a7",
        },
        // {
        //   name: "#socket.io",
        //   color: "#ffe082",
        // },
      ],
      demo: "https://drive.google.com/file/d/1NcqM2K8Cvu-YSDz1a8iCvELxyHY91cew/view?usp=drivesdk",
      github: "https://github.com/ahmed-ahsan2001/To-Do-List-using-swiftui",
    },

    {
      img: barcode,
      title: "Barcode and Text Detection using ML model",
      subTitle:
        "A mobile app created using machine learning model to detect barcodes and read digital text from camera",
      tech: [
        {
          name: "#ios",
          color: "#a1e9ff",
        },
        {
          name: "#machinelearning",
          color: "#a1e9ff",
        },

        {
          name: "#firebase",
          color: "#ffc8ae",
        },
        // {
        //   name: "#",
        //   color: "#ffcc80",
        // },
        // {
        //   name: "#mui",
        //   color: "#a5d6a7",
        // },
        // {
        //   name: "#google-cloud",
        //   color: "#ffe082",
        // },
      ],
      demo: "https://drive.google.com/file/d/1NgxcSdAeEyED7h6dsUq2FtNwzAur5ex9/view?usp=drivesdk",
      github: "https://github.com/ahmed-ahsan2001/BarcodeTextDetection",
    },

    // {
    //   img: nanny,
    //   title: "NannyFinder",
    //   subTitle:
    //     "A mobile app for job applications, filtering profiles and efficient communication. Includes a web version and an admin dashboard.",
    //   tech: [
    //     {
    //       name: "#flutter",
    //       color: "#a1e9ff",
    //     },
    //     {
    //       name: "#firebase",
    //       color: "#ffcc80",
    //     },
    //     {
    //       name: "#dynamic-links",
    //       color: "#ffc8ae",
    //     },
    //     {
    //       name: "#flutter-web",
    //       color: "#ffcc80",
    //     },
    //     {
    //       name: "#hosting",
    //       color: "#a5d6a7",
    //     },
    //     {
    //       name: "#bloc",
    //       color: "#a5d6a7",
    //     },
    //   ],
    //   isApp: true,
    //   playStore:
    //     "https://play.google.com/store/apps/details?id=com.mickaelrobin.nannyfinderuae",
    //   appStore: "https://apps.apple.com/app/id6443669769",
    // },

    {
      img: shop,
      title: "Furniture Shop",
      subTitle:
        "An ecommerce platform mobile app for furniture company to sell their products online .",
      tech: [
        {
          name: "#ios",
          color: "#a1e9ff",
        },
        {
          name: "#swift",
          color: "#ffcc80",
        },
        // {
        //   name: "#fcm",
        //   color: "#ffc8ae",
        // },
        // {
        //   name: "#google-cloud",
        //   color: "#ffcc80",
        // },
        // {
        //   name: "#bloc",
        //   color: "#a5d6a7",
        // },
      ],
      demo: "https://drive.google.com/file/d/1Ndsgn12m94A0w3QlduI5Tq-Lh9Rkzb9F/view?usp=drivesdk",
    },

    // {
    //   img: football,
    //   title: "Ghana Football",
    //   subTitle:
    //     "A mobile app for experiencing live football matches and staying updated with the latest news.",
    //   tech: [
    //     {
    //       name: "#flutter",
    //       color: "#a1e9ff",
    //     },
    //     {
    //       name: "#firebase",
    //       color: "#ffcc80",
    //     },
    //     {
    //       name: "#api",
    //       color: "#ffc8ae",
    //     },
    //     {
    //       name: "#google-analytics",
    //       color: "#ffcc80",
    //     },
    //     {
    //       name: "#bloc",
    //       color: "#a5d6a7",
    //     },
    //   ],
    //   isApp: true,
    //   playStore:
    //     "https://play.google.com/store/apps/details?id=com.ghfootballapp.app&hl=en&gl=US",
    //   appStore: "https://apps.apple.com/eg/app/ghana-football-app/id1586234457",
    // },
  ],
};
