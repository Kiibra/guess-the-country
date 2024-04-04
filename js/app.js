/*-------------------------------- Constants --------------------------------*/
import { americas, african, eurasian } from "../data /continents.js";

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


const flagModeBtn = document.querySelector('#flag-mode')
const body = document.querySelector('body')

const answerOptionsEl = document.querySelector('.answer-options')
const scoreDisplayEl = document.getElementById('score-display')



/*----------------------------- Event Listeners -----------------------------*/

// document.getElementById('back-button').addEventListener('click', ()=> {
//   history.back();
// });
theAmericasButton.addEventListener('click', selectTheAmericas)
africanButton.addEventListener('click', selectAfrican) 
eurasianButton.addEventListener('click', selectEurasian)

answerOptionsEl.addEventListener('click', selectButtons)


flagModeBtn.addEventListener('click', toggleDarkMode)

// backBtnEl.addEventListener('click', returnBack)

/*-------------------------------- Functions --------------------------------*/
function toggleDarkMode(){
  body.className = body.className === "dark" ? "" : "dark"
  if (body.className === "dark") {
    shineWaving.playWavingFlag()
  } 
}


init ()

function init () {
  scoreDisplayEl.style.display = 'none'
  buttonElement1.style.display = 'none'
  buttonElement2.style.display = 'none'
  buttonElement3.style.display = 'none'
  theAmericasButton.style.display = ''
  eurasianButton.style.display = ''
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

function selectEurasian (){
  currentCategory = shuffleQuestions([...eurasian])
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
    }, 1000)
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
  buttonElement1.style.display = ''
  buttonElement2.style.display = ''
  buttonElement3.style.display = ''
  theAmericasButton.style.display = 'none'
  africanButton.style.display = 'none'
  eurasianButton.style.display = 'none'
  appendFlag ()
  answerOptions()
  revertButtonColors()
}

