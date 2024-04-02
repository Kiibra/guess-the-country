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

const answerOptionsEl = document.querySelector('.answer-options')

// document.getElementById('back-button').addEventListener('click', ()=>)
/*----------------------------- Event Listeners -----------------------------*/

theAmericasButton.addEventListener('click', selectTheAmericas)
africanButton.addEventListener('click', selectAfrican) 
eurasianButton.addEventListener('click', selectEurasia)

// buttonElement1.addEventListener('click', selectButton1)
// buttonElement2.addEventListener('click', selectButton2)
// buttonElement3.addEventListener('click', selectButton3)

darkModeBtn.addEventListener('click', toggleDarkMode)

// backBtnEl.addEventListener('click', returnBack)


answerOptionsEl.addEventListener('click', selectButtons)
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


function returnBack(){
  // if a category has been chosen,
  // style.display= '' the button
  // if no Category has been chosen, then style.display="none"
  history.back()
  if(currentCategory !== null){
  backBtnEl.style.display = ''
  }else{
    backBtnEl.style.display = 'none'
  }
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


// function selectButton1 (){
//   let buttonText = buttonElement1.textContent
  
//   checkCorrectAnswer(buttonText)
// }

// function selectButton2 (){
//   let buttonText = buttonElement2.textContent
  
//   checkCorrectAnswer(buttonText)
// }

// function selectButton3 (){
// let buttonText = buttonElement3.textContent
  
//   checkCorrectAnswer(buttonText)
// }

function selectButtons(evt){
  let buttonText = evt.target.textContent
  
  checkCorrectAnswer(buttonText)
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
// checkCorrectAnswer()
}


function answerOptions (){ 
    buttonElement1.textContent = currentCategory.options[0]
    buttonElement2.textContent = currentCategory.options[1]
    buttonElement3.textContent = currentCategory.options[2]
}



function checkCorrectAnswer (buttonText){
  console.log(currentCategory)
  correctAnswer = currentCategory.correctAnswer
  let answerChoice = buttonText
  // console.log(answerChoice,correctAnswer)
  if (answerChoice === correctAnswer) {
    console.log("correct")
  }else if(answerChoice !== correctAnswer)
    console.log("incorrect")
  }


  // console.log(answerChoice)
// check if users answeroption is the same as the correct answer stated







function render () {

  // checkCorrectAnswer()
}





// use style.display = '' and style.display = 'none' to show display
// if (currentCategory){
//   appendFlag.style.display = ''

// }else{

// }










// references:
// https://stackoverflow.com/questions/1297449/change-image-size-with-javascript