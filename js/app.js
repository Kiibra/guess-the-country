/*-------------------------------- Constants --------------------------------*/
import { getRandomAmericas } from "../data /continents.js";
import { getRandomAfrican } from "../data /continents.js";
import { getRandomEurasia } from "../data /continents.js";

import * as shinegWaving from "./audio.js"
/*---------------------------- Variables (state) ----------------------------*/
let currentCategory = []
let currentQuestionIdx = {}
let score = 0
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


const flagModeBtn = document.querySelector('#dark-mode-light')
const body = document.querySelector('body')

const answerOptionsEl = document.querySelector('.answer-options')

document.getElementById('back-button').addEventListener('click', ()=> {
  history.back();
});

let scoreTrackerEl = document.getElementById('track-score')

/*----------------------------- Event Listeners -----------------------------*/

theAmericasButton.addEventListener('click', selectTheAmericas)
africanButton.addEventListener('click', selectAfrican) 
eurasianButton.addEventListener('click', selectEurasia)

// buttonElement1.addEventListener('click', selectButton1)
// buttonElement2.addEventListener('click', selectButton2)
// buttonElement3.addEventListener('click', selectButton3)

flagModeBtn.addEventListener('click', toggleDarkMode)

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


// function returnBack(){
  // if a category has been chosen,
  // style.display= '' the button
  // if no Category has been chosen, then style.display="none"
//   history.back()
//   if(currentCategory !== null){
//   backBtnEl.style.display = ''
//   }else{
//     backBtnEl.style.display = 'none'
//   }
// }

function selectTheAmericas (){
  currentCategory = getRandomAmericas()

  appendFlag ()
  answerOptions()
  revertButtonColors()
  // trackScore()
}
function selectAfrican (){
  currentCategory = getRandomAfrican()

  appendFlag ()
  answerOptions()
  revertButtonColors()
  // trackScore()
}
function selectEurasia (){
  currentCategory = getRandomEurasia()

  appendFlag ()
  answerOptions()
  revertButtonColors()
  // trackScore()
}

function selectButtons(evt){
  let button = evt.target
  
  checkCorrectAnswer(button)
  // trackScore()
}


function appendFlag (){
    imageFlag.src = currentCategory.flagURL
    imageFlag.style.height = '200px'
    imageFlag.style.width = '300px'

}


function handleClick (evt) {

appendFlag ()
answerOptions()
}


function answerOptions (){ 
    buttonElement1.textContent = currentCategory.options[0]
    buttonElement2.textContent = currentCategory.options[1]
    buttonElement3.textContent = currentCategory.options[2]
}



function checkCorrectAnswer (button){
  // revertButtonColors()
  correctAnswer = currentCategory.correctAnswer
  let answerChoice = button.textContent
  console.log(answerChoice)
    if(answerChoice === correctAnswer) {
      console.log ("correct")
      button.classList.add('green')
      // button.style.color = 'white'
    }else if(answerChoice !== correctAnswer){
      console.log("incorrect")
      button.classList.add('red')
      // clearInterval(interval)
      // button.style.color = 'white'
    }
    trackScore(button)
}

function revertButtonColors (){
  buttonElement1.classList.remove('red');
  buttonElement1.classList.remove('green');
  buttonElement2.classList.remove('green');
  buttonElement2.classList.remove('red');
  buttonElement3.classList.remove('green');
  buttonElement3.classList.remove('red');


}


function trackScore (button){
  let answerChoice = button.textContent
    if (answerChoice === correctAnswer ){
    score +=  1;
    
    scoreTrackerEl.innerText = score
    }
}




function render () {

  // checkCorrectAnswer()
}





// use style.display = '' and style.display = 'none' to show display
// if (currentCategory){
//   appendFlag.style.display = ''

// }else{

// }








