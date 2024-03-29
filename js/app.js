/*-------------------------------- Constants --------------------------------*/
import { getRandomTheAmericas } from "../data /continents.js";
import { getRandomAfrican } from "../data /continents.js";
import { getRandomEurasia } from "../data /continents.js";

/*---------------------------- Variables (state) ----------------------------*/

const theAmericas = []
const african = []
const eurasia = []



/*------------------------ Cached Element References ------------------------*/

const theAmericasButton =document.querySelector('#the-americas')
const africanButton = document.querySelector('#african-button')
const eurasianButton = document.querySelector('#eurasia-button')
const flagContainer = document.querySelector('#flag-container')

const globeButton = document.querySelector('#globe-button')

/*----------------------------- Event Listeners -----------------------------*/
theAmericasButton.addEventListener('click', presentNewFlag)
africanButton.addEventListener('cliick', presentNewFlag)
eurasianButton.addEventListener('click', presentNewFlag)

flagContainer.addEventListener('click', presentNewFlag)

globeButton.addEventListener('click')
/*-------------------------------- Functions --------------------------------*/
init (
  presentNewFlag(),
  newflag(),
)

function presentNewFlag (){
  const newflag = getRandomTheAmericas()
  const addFlag = getRandomAfrican ()
  const asainFlag = getRandomEurasia()
  theAmericas.push(newflag)
  african.push(addFlag)
  eurasia.push(asainFlag)
  render()
}

