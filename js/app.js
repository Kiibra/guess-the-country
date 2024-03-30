/*-------------------------------- Constants --------------------------------*/
import { getRandomTheAmericas } from "../data /continents.js";
import { getRandomAfrican } from "../data /continents.js";
import { getRandomEurasia } from "../data /continents.js";

/*---------------------------- Variables (state) ----------------------------*/

let currentCategory = theAmericas, african, eurasia
let currentQuestionIdx = []
/*------------------------ Cached Element References ------------------------*/

const theAmericasButton =document.querySelector('#the-americas')
const africanButton = document.querySelector('#african-button')
const eurasianButton = document.querySelector('#eurasia-button')
const continentsElement = document.querySelector('.continents')

const globeButton = document.querySelector('#globe-button')
const backbutton= document.getElementById('.back-button')

/*----------------------------- Event Listeners -----------------------------*/
theAmericasButton.addEventListener('click', presentNewFlag)
africanButton.addEventListener('cliick', presentNewFlag)
eurasianButton.addEventListener('click', presentNewFlag)

continentsElement.addEventListener('click', appendFlag)


// globeButton.addEventListener('click', globeImage)
/*-------------------------------- Functions --------------------------------*/
init ()
  function init () {
    currentCategory = []
    flagURL = []
    options = {}
    
}

function appendFlag (){
  currentCategory.array.forEach(element => {
    if (continentsElement === theAmericas)
    currentCategory[currentQuestionIdx].flagURL 

  })
  
}