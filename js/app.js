/*-------------------------------- Constants --------------------------------*/
import { americas, african, eurasia } from "../data /continents.js";

import * as shineWaving from "./audio.js"
/*---------------------------- Variables (state) ----------------------------*/
let currentCategory = []
let currentQuestionIdx = 0
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
const scoreDisplayEl = document.getElementById('score-display')


// let scoreTrackerEl = document.getElementById('track-score')

/*----------------------------- Event Listeners -----------------------------*/

// document.getElementById('back-button').addEventListener('click', ()=> {
//   history.back();
// });
theAmericasButton.addEventListener('click', selectTheAmericas)
africanButton.addEventListener('click', selectAfrican) 
eurasianButton.addEventListener('click', selectEurasia)

answerOptionsEl.addEventListener('click', selectButtons)


flagModeBtn.addEventListener('click', toggleDarkMode)

// backBtnEl.addEventListener('click', returnBack)

/*-------------------------------- Functions --------------------------------*/
function toggleDarkMode(){
  body.className = body.className === "dark" ? "" : "dark"
  if (body.className === "dark") {
    shineWaving.playWavingFlag()
  } else {
    shineWaving.playShineBright()
  }
}


init ()

function init () {
  scoreDisplayEl.style.display = 'none'
    options = ''
    currentQuestionIdx = 0
    correctAnswer = ''
    score = 0
}

function shuffleQuestions(questionArray) {
  let numItemsToShuffle = questionArray.length
  let questionsToShuffle = [...questionArray]
  let shuffledQuestions = []
  for (let i = 0; i < numItemsToShuffle; i++) {
    let randIdx = Math.floor(Math.random() * questionsToShuffle.length)
    shuffledQuestions.push(questionsToShuffle.splice(randIdx, 1)[0])
  }
  console.log(shuffledQuestions)
  return shuffledQuestions
}

function selectTheAmericas (){
  currentCategory = shuffleQuestions([...americas])
  currentQuestionIdx = 0

  render()
}

function selectAfrican (){
  currentCategory = shuffleQuestions([...african])
  currentQuestionIdx = 0

  render()
}

function selectEurasia (){
  currentCategory = shuffleQuestions([...eurasia])
  currentQuestionIdx = 0

  render()
}

function selectButtons(evt){
  let button = evt.target
  if (button.nodeName === 'BUTTON') {
    checkCorrectAnswer(button)
    currentQuestionIdx += 1
    setTimeout(() => {
      render()
    }, 1500)
  }
}


function appendFlag (){
    imageFlag.src = currentCategory[currentQuestionIdx].flagURL
    imageFlag.style.height = '300px'
    imageFlag.style.width = '500px'
}

function answerOptions (){ 
    buttonElement1.textContent = currentCategory[currentQuestionIdx].options[0]
    buttonElement2.textContent = currentCategory[currentQuestionIdx].options[1]
    buttonElement3.textContent = currentCategory[currentQuestionIdx].options[2]
}


function checkCorrectAnswer (button){
  correctAnswer = currentCategory[currentQuestionIdx].correctAnswer
  let answerChoice = button.textContent
    if(answerChoice === correctAnswer) {
      console.log ("correct")
      button.classList.add('green')
    }else if(answerChoice !== correctAnswer){
      console.log("incorrect")
      button.classList.add('red')
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
  scoreDisplayEl.style.display = ''
  let answerChoice = button.textContent
    if (answerChoice === correctAnswer ){
    score +=  1;
    
    }
    scoreDisplayEl.innerHTML = ` Score: ${score}/${currentCategory.length} ` 
}


function render () {

  appendFlag ()
  answerOptions()
  revertButtonColors()
}

