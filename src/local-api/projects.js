import { FoodPointLogo, GlicorsaLogo, PongLogo, PortfolioLogo, RicardoLogo, TakeMyDogLogo, UcolLogo } from "../assets/projectLogos";

const projectsData = {
  "projects": [
    {
      "image": GlicorsaLogo,
      "title": "Glicorsa",
      "resume": "A great company to buy your liquors and also bottleling service",
      "isVisible": true,
      "repo": "none",
      "technologies": ["React", "18inext", "Tailwind", "Git"]
    },
    {
      "image": FoodPointLogo,
      "title": "Food Point",
      "resume": "Food Point is a restaurant point of sale application. It consists of different modules with a user-friendly interface. Some of the features it includes are the Services functionality, where orders are generated based on the items registered. The Kitchen module allows users to view the registered orders and update their status. Reports functionality helps to keep track of sales.",
      "isVisible": true,
      "repo": "https://github.com/BrightCoders-Institute/BCDIC22-RoR-proyecto-final-team3",
      "technologies": ["RoR", "Postgresql", "CSS", "Git"]
    },
    {
      "image": TakeMyDogLogo,
      "title": "Take My Dog",
      "resume": "Introducing a remarkable mobile app designed to simplify your search for dog walkers, akin to the renowned Uber concept. With this user-friendly platform, you can effortlessly find reliable dog walkers for your beloved canine companions.",
      "isVisible": false,
      "repo": "https://github.com/BC-MAY-21-RN/proyecto-final-pf-n21-t2",
      "technologies": ["JavaScript", "React", "Firebase", "NodeJS", "Git"]
    },
    {
      "image": UcolLogo,
      "title": "Universidad De Colima",
      "resume": "I Developed a modern and dynamic user interfaces using React JS, while implementing best practices such as test-driven development and utilizing tools for managing local and remote repositories. for this project I don't have repo because its confidential.",
      "isVisible": false,
      "repo": "https://www.ucol.mx/",
      "technologies": ["JavaScript", "React", "Sass", "NodeJS", "Git"]
    },    {
      "image": PortfolioLogo,
      "title": "Portfolio",
      "resume": "Embrace the elegance of API consumption through a delightful array of functions, including enchanting sorting capabilities, captivating search functionalities, and an enchanting details screen that will leave you spellbound.",
      "isVisible": false,
      "repo": "https://github.com/xManuel007/rick-morty-api",
      "technologies": ["TypeScript", "JavaScript", "React", "Git", "CSS"]
    },
    {
      "image": RicardoLogo,
      "title": "Rick & Morty",
      "resume": "Embrace the elegance of API consumption through a delightful array of functions, including enchanting sorting capabilities, captivating search functionalities, and an enchanting details screen that will leave you spellbound.",
      "isVisible": false,
      "repo": "https://github.com/xManuel007/rick-morty-api",
      "technologies": ["TypeScript", "JavaScript", "React", "Git", "CSS"]
    },
    {
      "image": PongLogo,
      "title": "Interative Pong",
      "resume": "Presenting an extraordinary web app game, It was a school project for the esteemed \"Human-Computer Interaction\" course. Its core functionality lies in the mesmerizing art of controlling the game's paddles with the graceful movement of your hands. Harnessing the remarkable capabilities of the Mediapipe library, this masterpiece detects and responds to the intricate gestures of your hand, granting you boundless possibilities.",
      "isVisible": false,
      "technologies": ["JavaScript", "Python", "CSS", "Git"],
      "repo": "https://github.com/xManuel007/interative-pong"
    }
  ]
};

export default projectsData;
