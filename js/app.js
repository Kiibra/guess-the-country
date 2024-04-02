/*-------------------------------- Constants --------------------------------*/
import { getRandomAmericas } from "../data /continents.js";
import { getRandomAfrican } from "../data /continents.js";
import { getRandomEurasia } from "../data /continents.js";

import * as shinegWaving from "./audio.js"
/*---------------------------- Variables (state) ----------------------------*/
let currentCategory = []
let currentQuestionIdx = {}
let score
let correctAnswer = ''
let options = []
let answerChoice

/*------------------------ Cached Element References ------------------------*/

const theAmericasButton =document.querySelector('#americas-button')
const africanButton = document.querySelector('#african-button')
const eurasianButton = document.querySelector('#eurasian-button')


const buttonElement1 = document.querySelector('#button1')
const buttonElement2= document.querySelector('#button2')
const buttonElement3 = document.querySelector('#button3')

const imageFlag = document.querySelector('.flag')


const darkModeBtn = document.querySelector('#dark-mode-light')
const body = document.querySelector('body')


/*----------------------------- Event Listeners -----------------------------*/

theAmericasButton.addEventListener('click', selectTheAmericas)
africanButton.addEventListener('click', selectAfrican) 
eurasianButton.addEventListener('click', selectEurasia)

buttonElement1.addEventListener('click', selectButton1)
buttonElement2.addEventListener('click', selectButton2)
buttonElement3.addEventListener('click', selectButton3)

darkModeBtn.addEventListener('click', toggleDarkMode)


// answerOptionsEl.addEventListener('click', selectButtons)
/*-------------------------------- Functions --------------------------------*/
function toggleDarkMode(){
  body.className = body.className === "dark" ? "" : "dark"
  if (body.className === "dark") {
    shinegWaving.playWavingFlag()
  } else {
    shinegWaving.playShineBright()
  }
}


init ()

  function init () {
    currentCategory = ['theAmericas, african, eurasia']
    options = ''
    currentQuestionIdx = {}
    correctAnswer = ''
    score = 0
    
  render()

}


function selectTheAmericas (){
  currentCategory = getRandomAmericas()

  appendFlag ()
  answerOptions()
}
function selectAfrican (){
  currentCategory = getRandomAfrican()

  appendFlag ()
  answerOptions()
}
function selectEurasia (){
  currentCategory = getRandomEurasia()

  appendFlag ()
  answerOptions()
}


function selectButton1 (){

  checkCorrectAnswer()
}

function selectButton2 (){
  
  checkCorrectAnswer()
}

function selectButton3 (){
  
  checkCorrectAnswer()
}


function appendFlag (){
    imageFlag.src = currentCategory.flagURL
    imageFlag.style.height = '200px'
    imageFlag.style.width = '300px'

}
// console.log(appendFlag)


function handleClick (evt) {

appendFlag ()
answerOptions()
checkCorrectAnswer()
}


function answerOptions (){ 
    buttonElement1.textContent = currentCategory.options[0]
    buttonElement2.textContent = currentCategory.options[1]
    buttonElement3.textContent = currentCategory.options[2]
}



function checkCorrectAnswer (){
  // let answerChoice = currentCategory[currentQuestionIdx].
  // if (answerChoice === correctAnswer) {
  //   console.log("correct")
  // } else if(answerChoice !== correctAnswer) {
  //   console.log("incorrect")
  // }
}

  // console.log(answerChoice)
// check if users answeroption is the same as the correct answer stated







function render () {

  checkCorrectAnswer()
}





// use style.display = '' and style.display = 'none' to show display
// if (currentCategory){
//   appendFlag.style.display = ''

// }else{

// }










// references:
// https://stackoverflow.com/questions/1297449/change-image-size-with-javascript