import { FoodPointInventory, FoodPointKitchen, FoodPointLogin, FoodPointLogo, FoodPointMenu, FoodPointReports, FoodPointServices } from "../assets/projectsImages/foodpoint";
import { GlicorsaHome, GlicorsaLogo, GlicorsaVelocity } from "../assets/projectsImages/glicorsa";
import { PongGamePlay, PongHome, PongLogo } from "../assets/projectsImages/pong";
import { Portfolio, PortfolioLogo } from "../assets/projectsImages/portfolio";
import { RickCharacters, RickDimensiones, RickEpisodes, RickLogo } from "../assets/projectsImages/rickandmorty";
import { TakeMyDogLogo, TakeMyDogMock } from "../assets/projectsImages/takemydog";
import { UDC, UDCLogo } from "../assets/projectsImages/udc";
import { TechCss, TechEmailJS, TechFirebase, TechGit, TechI18next, TechJS, TechNextJS, TechNodeJS, TechPostgres, TechPython, TechReacJS, TechRoR, TechSass, TechTailwind, TechTypescript } from "../assets/technologies";

const projectsData = {
  "projects": [
    {
      "image": [
        GlicorsaLogo,
        GlicorsaHome,
        GlicorsaVelocity
      ],
      "title": "Glicorsa",
      "resume": `
      I had the opportunity to collaborate with an internationally renowned liquor company to develop their online presence. I designed and developed a modern, multilingual website using ReactJS and i18next to ensure dynamic user interfaces and global accessibility. Leveraging Amazon Web Services (AWS) for robust infrastructure, including Amazon Amplify, the site achieved high performance and scalability. The project's success significantly enhanced the brand's visibility and accessibility, facilitating its expansion into international markets.
      `,
      "isVisible": true,
      "repo": "www.glicorsa.com",
      "technologies": [TechReacJS, TechI18next, TechTailwind, TechGit, TechEmailJS]
    },
    {
      "image": [
        FoodPointLogo,
        FoodPointInventory,
        FoodPointServices,
        FoodPointReports,
        FoodPointKitchen,
        FoodPointMenu,
        FoodPointLogin,
      ],
      "title": "Food Point",
      "resume": "Food Point is a point of sale application for restaurants. It consists of different modules with an easy-to-use interface. Some of the features they include are the ability to manage orders, where orders are generated based on registered items. The Kitchen module allows users to view registered orders and update their status. Reporting functionality helps track sales",
      "isVisible": true,
      "repo": "github.com/BrightCoders-Institute/BCDIC22-RoR-proyecto-final-team3",
      "technologies": [TechRoR, TechPostgres, TechCss, TechGit, TechSass]
    },
    {
      "image": [RickLogo, RickCharacters, RickEpisodes, RickDimensiones],
      "title": "Rick & Morty",
      "resume": "Embrace the elegance of API consumption through a delightful array of functions, including enchanting sorting capabilities, captivating search functionalities, and an enchanting details screen that will leave you spellbound.",
      "isVisible": false,
      "repo": "main.d1fhzgoonanusy.amplifyapp.com/",
      "repoUrl": "github.com/xManuel007/rickandmorty",
      "technologies": [TechTypescript, TechNextJS, TechGit, TechTailwind]
    },
    {
      "image": [TakeMyDogLogo, TakeMyDogMock],
      "title": "Take My Dog",
      "resume": "Introducing a remarkable mobile app designed to simplify your search for dog walkers. With this user-friendly platform, you can effortlessly find reliable dog walkers for your beloved canine companions, also with the certanly of have your dog's position in real time.",
      "isVisible": false,
      "repo": "github.com/BC-MAY-21-RN/proyecto-final-pf-n21-t2",
      "technologies": [TechJS, TechReacJS, TechFirebase, TechNodeJS, TechGit]
    },
    {
      "image": [UDCLogo, UDC],
      "title": "Universidad De Colima",
      "resume": "I Developed a modern and dynamic user interfaces using React JS, while implementing best practices such as test-driven development and utilizing tools for managing local and remote repositories. for this project I don't have repo because its confidential.",
      "isVisible": false,
      "repo": "www.ucol.mx/",
      "technologies": [TechJS, TechReacJS, TechSass, TechNodeJS, TechGit]
    },
    {
      "image": [PongLogo, PongHome, PongGamePlay ],
      "title": "Interative Pong",
      "resume": "Presenting an extraordinary web app game, It was a school project for the esteemed \"Human-Computer Interaction\" course. Its core functionality lies in the mesmerizing art of controlling the game's paddles with the graceful movement of your hands. Harnessing the remarkable capabilities of the Mediapipe library, this masterpiece detects and responds to the intricate gestures of your hand, granting you boundless possibilities.",
      "isVisible": false,
      "technologies": [TechJS, TechPython, TechCss, TechGit],
      "repo": "github.com/xManuel007/interative-pong"
    },
    {
      "image": [PortfolioLogo, Portfolio],
      "title": "Portfolio",
      "resume": "Embrace the elegance of API consumption through a delightful array of functions, including enchanting sorting capabilities, captivating search functionalities, and an enchanting details screen that will leave you spellbound.",
      "isVisible": false,
      "repo": "github.com/xManuel007/rick-morty-api",
      "technologies": [TechTypescript, TechJS, TechReacJS, TechGit, TechTailwind, TechSass, TechCss]
    },
  ]
};

export default projectsData;
