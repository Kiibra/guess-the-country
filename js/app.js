/*-------------------------------- Constants --------------------------------*/
import { getRandomTheAmericas } from "../data /continents.js";
import { getRandomAfrican } from "../data /continents.js";
import { getRandomEurasia } from "../data /continents.js";

/*---------------------------- Variables (state) ----------------------------*/
let theAmericas = []
let african = []
let eurasia = []
let flagURL = []
let options = []

/*------------------------ Cached Element References ------------------------*/

const theAmericasButton =document.querySelector('#the-americas')
const africanButton = document.querySelector('#african-button')
const eurasianButton = document.querySelector('#eurasia-button')
const continentsElement = document.querySelector('.continents')

const globeButton = document.querySelector('#globe-button')

/*----------------------------- Event Listeners -----------------------------*/
// theAmericasButton.addEventListener('click', presentNewFlag)
// africanButton.addEventListener('cliick', presentNewFlag)
// eurasianButton.addEventListener('click', presentNewFlag)

continentsElement.addEventListener('click', presentNewFlag)

// globeButton.addEventListener('click', globeImage)
/*-------------------------------- Functions --------------------------------*/
init ()
  function init () {
    theAmericas = []
    african = []
    eurasia = []
    flagURL = []
    
}

function presentNewFlag (){
  flagsURL.forEach ((element, idx) => {
    if(continentsElement === theAmericas){
      getRandomTheAmericas().correctAnswer
    }else if (continentsElement === african){
      getRandomAfrican().correctAnswer
    }else if (continentsElement === eurasia){
      getRandomEurasia().correctAnswer
    }
})
}
console.log(flagsURL)

