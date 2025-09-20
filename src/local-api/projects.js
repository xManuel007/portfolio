import { FoodPointInventory, FoodPointKitchen, FoodPointLogin, FoodPointLogo, FoodPointMenu, FoodPointReports, FoodPointServices } from "../assets/projectsImages/foodpoint";
import { GlicorsaHome, GlicorsaLogo, GlicorsaVelocity } from "../assets/projectsImages/glicorsa";
import { LMELogo, LMEPage } from "../assets/projectsImages/lme";
import { PongGamePlay, PongHome, PongLogo } from "../assets/projectsImages/pong";
import { Portfolio, PortfolioLogo } from "../assets/projectsImages/portfolio";
import { RickCharacters, RickDimensiones, RickEpisodes, RickLogo } from "../assets/projectsImages/rickandmorty";
import { TakeMyDogLogo, TakeMyDogMock } from "../assets/projectsImages/takemydog";
import { UDC, UDCLogo } from "../assets/projectsImages/udc";
import { velocityLogo, velocityPage } from "../assets/projectsImages/velocity";
import { TechAngular, TechAWS, TechBitBucket, TechCss, TechEmailJS, TechFirebase, TechGit, TechI18next, TechJS, TechLaravel, TechNextJS, TechNodeJS, TechPostgres, TechPython, TechReacJS, TechRoR, TechSass, TechTailwind, TechTypescript } from "../assets/technologies";

const projectsData = {
  "projects": [
    {
      "image": [
        LMELogo,
        LMEPage,
      ],
      "title": "LME Agent",
      "time": "2024-06-17",
      "resume": `
        Developed and managed functionalities for the company's logistics management platform.
        Implemented both front-end and back-end solutions to improve user experience and operational efficiency.
        Collaborated with cross-functional teams to integrate new features and optimize existing ones
      `,
      "isVisible": true,
      "repo": "www.lme.mx",
      "technologies": [TechGit, TechAngular, TechBitBucket, TechLaravel, TechAWS],
      "languages": ['TypeScript', 'PHP', 'HTML', 'SCSS'],
    },
    {
      "image": [
        velocityLogo,
        velocityPage,
      ],
      "title": "Velocity",
      "time": "2024-02-01",
      "resume": `
      I had the opportunity to collaborate with an internationally renowned liquor company to develop their online presence. I designed and developed a modern, multilingual website using NextJS and i18next to ensure dynamic user interfaces and global accessibility. Leveraging Amazon Web Services (AWS) for robust infrastructure, including Amazon Amplify, the site achieved high performance and scalability. The project's success significantly enhanced the brand's visibility and accessibility, facilitating its expansion into international markets.
      `,
      "isVisible": true,
      "repo": "www.tequila-velocity.com",
      "technologies": [TechNextJS, TechI18next, TechTailwind, TechGit, TechEmailJS],
      "languages": ['TypeScript', 'HTML', 'SCSS'],
    },
    {
      "image": [
        GlicorsaLogo,
        GlicorsaHome,
        GlicorsaVelocity
      ],
      "title": "Glicorsa",
      "time": "2023-11-01",
      "resume": `
      I had the opportunity to collaborate with an internationally renowned liquor company to develop their online presence. I designed and developed a modern, multilingual website using ReactJS and i18next to ensure dynamic user interfaces and global accessibility. Leveraging Amazon Web Services (AWS) for robust infrastructure, including Amazon Amplify, the site achieved high performance and scalability. The project's success significantly enhanced the brand's visibility and accessibility, facilitating its expansion into international markets.
      `,
      "isVisible": true,
      "repo": "www.glicorsa.com",
      "technologies": [TechReacJS, TechI18next, TechTailwind, TechGit, TechEmailJS],
      "languages": ['JavaScript', 'HTML', 'SCSS'],
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
      "time": "2022-12-01",
      "resume": "Food Point is a point of sale application for restaurants. It consists of different modules with an easy-to-use interface. Some of the features they include are the ability to manage orders, where orders are generated based on registered items. The Kitchen module allows users to view registered orders and update their status. Reporting functionality helps track sales",
      "isVisible": true,
      "repo": "github.com/BrightCoders-Institute/BCDIC22-RoR-proyecto-final-team3",
      "technologies": [TechRoR, TechPostgres, TechCss, TechGit, TechSass],
      "languages": ['Ruby', 'HTML', 'SCSS'],
    },
    {
      "image": [RickLogo, RickCharacters, RickEpisodes, RickDimensiones],
      "title": "Rick & Morty",
      "time": "2022-11-01",
      "resume": "Embrace the elegance of API consumption through a delightful array of functions, including enchanting sorting capabilities, captivating search functionalities, and an enchanting details screen that will leave you spellbound.",
      "isVisible": false,
      "repo": "main.d1fhzgoonanusy.amplifyapp.com/",
      "repoUrl": "github.com/xManuel007/rickandmorty",
      "technologies": [TechTypescript, TechNextJS, TechGit, TechTailwind],
      "languages": ['TypeScript', 'HTML', 'SCSS'],
    },
    {
      "image": [TakeMyDogLogo, TakeMyDogMock],
      "title": "Take My Dog",
      "time": "2021-11-01",
      "resume": "Introducing a remarkable mobile app designed to simplify your search for dog walkers. With this user-friendly platform, you can effortlessly find reliable dog walkers for your beloved canine companions, also with the certanly of have your dog's position in real time.",
      "isVisible": false,
      "repo": "github.com/BC-MAY-21-RN/proyecto-final-pf-n21-t2",
      "technologies": [TechJS, TechReacJS, TechFirebase, TechNodeJS, TechGit],
      "languages": ['JavaScript'],
    },
    {
      "image": [UDCLogo, UDC],
      "title": "Universidad De Colima",
      "time": "2022-02-01",
      "resume": "I Developed a modern and dynamic user interfaces using React JS, while implementing best practices such as test-driven development and utilizing tools for managing local and remote repositories. for this project I don't have repo because its confidential.",
      "isVisible": false,
      "repo": "www.ucol.mx/",
      "technologies": [TechJS, TechReacJS, TechSass, TechNodeJS, TechGit],
      "languages": ['JavaScript', 'PHP', 'HTML', 'CSS'],
    },
    {
      "image": [PongLogo, PongHome, PongGamePlay],
      "title": "Interative Pong",
      "time": "2021-02-01",
      "resume": "Presenting an extraordinary web app game, It was a school project for the esteemed \"Human-Computer Interaction\" course. Its core functionality lies in the mesmerizing art of controlling the game's paddles with the graceful movement of your hands. Harnessing the remarkable capabilities of the Mediapipe library, this masterpiece detects and responds to the intricate gestures of your hand, granting you boundless possibilities.",
      "isVisible": false,
      "technologies": [TechJS, TechPython, TechCss, TechGit],
      "repo": "github.com/xManuel007/interative-pong",
      "languages": ['JavaScript', 'HTML', 'CSS', "Python"],
    },
    {
      "image": [PortfolioLogo, Portfolio],
      "title": "Portfolio",
      "time": "2021-02-01",
      "resume": "Embrace the elegance of API consumption through a delightful array of functions, including enchanting sorting capabilities, captivating search functionalities, and an enchanting details screen that will leave you spellbound.",
      "isVisible": false,
      "repo": "github.com/xManuel007/rick-morty-api",
      "technologies": [TechTypescript, TechJS, TechReacJS, TechGit, TechTailwind, TechSass, TechCss],
      "languages": ['JavaScript', 'HTML', 'SCSS'],
    },
  ]
};

export default projectsData;
