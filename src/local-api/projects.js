import { FoodPoint, Glicorsa, InteractivePong, RicardoYMartin, TakeMyDog, UDC, Portfolio, InteractivePongGif, React, JavaScript, Git, RoR, Postgresql, CSS, Firebase, NodeJS, TypeScript, Python, I18Next, Tailwind, EmailJS, Sass, Glicorsa2 } from "../assets";
import { FoodPointLogo, GlicorsaLogo, PongLogo, PortfolioLogo, RicardoLogo, TakeMyDogLogo, UcolLogo } from "../assets/projectLogos";

const projectsData = {
  "projects": [
    {
      "image": [
        GlicorsaLogo,
        Glicorsa2,
        Glicorsa
      ],
      "title": "Glicorsa",
      "resume": `
      I had the opportunity to collaborate with an internationally renowned liquor company to develop their online presence. I designed and developed a modern, multilingual website using ReactJS and i18next to ensure dynamic user interfaces and global accessibility. Leveraging Amazon Web Services (AWS) for robust infrastructure, including Amazon Amplify, the site achieved high performance and scalability. The project's success significantly enhanced the brand's visibility and accessibility, facilitating its expansion into international markets.
      `,
      "isVisible": true,
      "repo": "www.glicorsa.com",
      "technologies": [React, I18Next, Tailwind, Git, EmailJS]
    },
    {
      "image": [
        FoodPointLogo,
        FoodPoint
      ],
      "title": "Food Point",
      "resume": "Food Point is a point of sale application for restaurants. It consists of different modules with an easy-to-use interface. Some of the features they include are the ability to manage orders, where orders are generated based on registered items. The Kitchen module allows users to view registered orders and update their status. Reporting functionality helps track sales",
      "isVisible": true,
      "repo": "github.com/BrightCoders-Institute/BCDIC22-RoR-proyecto-final-team3",
      "technologies": [RoR, Postgresql, CSS, Git]
    },
    {
      "image": [TakeMyDogLogo, TakeMyDog],
      "title": "Take My Dog",
      "resume": "Introducing a remarkable mobile app designed to simplify your search for dog walkers, akin to the renowned Uber concept. With this user-friendly platform, you can effortlessly find reliable dog walkers for your beloved canine companions.",
      "isVisible": false,
      "repo": "github.com/BC-MAY-21-RN/proyecto-final-pf-n21-t2",
      "technologies": [JavaScript, React, Firebase, NodeJS, Git]
    },
    {
      "image": [UcolLogo, UDC],
      "title": "Universidad De Colima",
      "resume": "I Developed a modern and dynamic user interfaces using React JS, while implementing best practices such as test-driven development and utilizing tools for managing local and remote repositories. for this project I don't have repo because its confidential.",
      "isVisible": false,
      "repo": "www.ucol.mx/",
      "technologies": [JavaScript, React, Sass, NodeJS, Git]
    },
    {
      "image": [PongLogo, InteractivePong, InteractivePongGif],
      "title": "Interative Pong",
      "resume": "Presenting an extraordinary web app game, It was a school project for the esteemed \"Human-Computer Interaction\" course. Its core functionality lies in the mesmerizing art of controlling the game's paddles with the graceful movement of your hands. Harnessing the remarkable capabilities of the Mediapipe library, this masterpiece detects and responds to the intricate gestures of your hand, granting you boundless possibilities.",
      "isVisible": false,
      "technologies": [JavaScript, Python, CSS, Git],
      "repo": "github.com/xManuel007/interative-pong"
    },
    {
      "image": [PortfolioLogo, Portfolio],
      "title": "Portfolio",
      "resume": "Embrace the elegance of API consumption through a delightful array of functions, including enchanting sorting capabilities, captivating search functionalities, and an enchanting details screen that will leave you spellbound.",
      "isVisible": false,
      "repo": "github.com/xManuel007/rick-morty-api",
      "technologies": [TypeScript, JavaScript, React, Git, CSS]
    },
    {
      "image": [RicardoLogo, RicardoYMartin],
      "title": "Rick & Morty",
      "resume": "Embrace the elegance of API consumption through a delightful array of functions, including enchanting sorting capabilities, captivating search functionalities, and an enchanting details screen that will leave you spellbound.",
      "isVisible": false,
      "repo": "github.com/xManuel007/rick-morty-api",
      "technologies": [TypeScript, JavaScript, React, Git, CSS]
    },
  ]
};

export default projectsData;
