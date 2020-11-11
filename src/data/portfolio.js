// [
//     {
//       name: "My best client",
//       category: ["all", "frontend", "ux-ui"]
//     },
//     {
//       name: "My favorite case",
//       category: ["all", "mobile", "ux-ui"]
//     },
//     {
//       name: "A old job",
//       category: ["all", "frontend"]
//     },
//     {
//       name: "It is a really cool website",
//       category: ["all", "frontend", "ux-ui"]
//     },
//     {
//       name: "Something more",
//       category: ["all", "others"]
//     }
//   ];
  


import fylo from '../portfolio-image/FyloBlack/1.png';
import quizapp from '../portfolio-image/QuizApp/1.png';
import keeper from '../portfolio-image/KeeperApp/1.png';
import todoReact from "../portfolio-image/ToDoList-React/1.png";
import tictac from "../portfolio-image/TicTacToe/1.png";
import signup from "../portfolio-image/EmailPage/1.png";
import simon from "../portfolio-image/SimonGame/1.png";
import pricing from "../portfolio-image/PricingWebsite/1.png";
import todoPHP from "../portfolio-image/ToDoList-php/1.png";
import university from "../portfolio-image/FictionalUniversity/1.png";
import musicshop from "../portfolio-image/MusicShop/1.png";
import mtechinsurance from "../portfolio-image/MTechInsurance/1.png";
import echipamente from "../portfolio-image/EchipamenteMedicale/1.png"


const portfolio = [
    {
        id: 0,
        name: "FyloBlack",
        imgURL: fylo,
        photo: 6,
        category: ["Frontend"]
    },
    {
        id: 1,
        name: "QuizApp",
        imgURL: quizapp,
        photo: 12,
        category: ["React"]
    },
    {
        id: 2,
        name: "KeeperApp",
        imgURL: keeper,
        photo: 2,
        category: ["React"]
    },
    {
        id: 3,
        name: "ToDoList-React",
        imgURL: todoReact,
        photo: 2,
        category: ["React"]
    },
    {
        id: 4,
        name: "TicTacToe",
        imgURL: tictac,
        photo: 3,
        category: ["React"]
    },
    {
        id: 5,
        name: "EmailPage",
        imgURL: signup,
        photo: 1,
        category: ["Frontend"]  
    },
    {
        id: 6,
        name: "SimonGame",
        imgURL: simon,
        photo: 2,
        category: ["Frontend"] 
    },
    {
        id: 7,
        name: "PricingWebsite",
        imgURL: pricing,
        photo: 2,
        category: ["Frontend"]
    },
    {
        id: 8,
        name: "ToDoList-php",
        imgURL: todoPHP,
        photo: 3,
        category: ["Wordpress"]
    },
    {
        id: 9,
        name: "FictionalUniversity",
        imgURL: university,
        photo: 14,
        category: ["Wordpress"]
    },
    {
        id: 10,
        name: "MusicShop",
        imgURL: musicshop,
        photo: 14,
        category: ["Wordpress"]
    },
    {
        id: 11,
        name: "MTechInsurance",
        imgURL: mtechinsurance,
        photo: 4,
        category: ["Wordpress"]
    
    },
    {
        id: 12,
        name: "EchipamenteMedicale",
        imgURL: echipamente,
        photo: 4,
        category: ["Wordpress"]
    }

]

export default portfolio;