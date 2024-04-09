import { americas, african, eurasian } from '../data /continents.js'
import * as shineWaving from './audio.js'

let currentCategory = []
let currentQuestionIdx = 0
let score = 0
let flagsLeft = 0

const theAmericasButton = document.querySelector('#americas-button')
const africanButton = document.querySelector('#african-button')
const eurasianButton = document.querySelector('#eurasian-button')
const buttonElement1 = document.querySelector('#button1')
const buttonElement2 = document.querySelector('#button2')
const buttonElement3 = document.querySelector('#button3')
const imageFlag = document.querySelector('.flag')
const flagModeBtn = document.querySelector('#flag-mode')
const body = document.querySelector('body')
const answerOptionsEl = document.querySelector('.answer-options')
const scoreDisplayEl = document.getElementById('score-display')
const resetBtnEl = document.getElementById('reset-button')
const messageEl = document.getElementById('message')

theAmericasButton.addEventListener('click', selectTheAmericas)
africanButton.addEventListener('click', selectAfrican) 
eurasianButton.addEventListener('click', selectEurasian)
answerOptionsEl.addEventListener('click', selectButtons)
flagModeBtn.addEventListener('click', toggleMode)
resetBtnEl.addEventListener('click', resetQuestions)

function toggleMode(){
  body.className = body.className === 'flag' ? "" : 'flag'
  if (body.className === 'flag') {
    shineWaving.playWavingFlag()
  } 
}
init ()
function init () {
  scoreDisplayEl.style.display = 'none'
  buttonElement1.style.display = 'none'
  buttonElement2.style.display = 'none'
  buttonElement3.style.display = 'none'
  resetBtnEl.style.display = 'none'
  messageEl.style.display='none'
  imageFlag.style.display = 'none'
  currentQuestionIdx = 0
  score = 0
}
function resetQuestions(){
  init()
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
  flagsLeft = currentCategory.length
  render()
}
function selectAfrican (){
  currentCategory = shuffleQuestions([...african])
  currentQuestionIdx = 0
  flagsLeft = currentCategory.length
  render()
}
function selectEurasian (){
  currentCategory = shuffleQuestions([...eurasian])
  currentQuestionIdx = 0
  flagsLeft = currentCategory.length
  render()
}
function selectButtons(evt){
  let button = evt.target
  if (button.nodeName === 'BUTTON') {
    checkCorrectAnswer(button)
    currentQuestionIdx += 1
    flagsLeft -= 1
    setTimeout(() => {
      render()
    }, 1000)
  }
}
function appendFlag (){
  imageFlag.src = currentCategory[currentQuestionIdx].flagURL
  imageFlag.style.height = '400px'
  imageFlag.style.width = '600px'
}
function answerOptions (){ 
  buttonElement1.textContent = currentCategory[currentQuestionIdx].options[0]
  buttonElement2.textContent = currentCategory[currentQuestionIdx].options[1]
  buttonElement3.textContent = currentCategory[currentQuestionIdx].options[2]
}
function checkCorrectAnswer (button){
  let correctAnswer = currentCategory[currentQuestionIdx].correctAnswer
  let answerChoice = button.textContent
  if(answerChoice === correctAnswer){
    button.classList.add('green')
  }else if(answerChoice !== correctAnswer){
    button.classList.add('red')
  }
  trackScore(button)
}
function revertButtonColors (){
  buttonElement1.classList.remove('red')
  buttonElement1.classList.remove('green')
  buttonElement2.classList.remove('green')
  buttonElement2.classList.remove('red')
  buttonElement3.classList.remove('green')
  buttonElement3.classList.remove('red')
}
function trackScore (button){
  scoreDisplayEl.style.display = ''
  let correctAnswer = currentCategory[currentQuestionIdx].correctAnswer
  let answerChoice = button.textContent
  if (answerChoice === correctAnswer ){
    score +=  1
  }
  scoreDisplayEl.innerHTML = ` Score: ${score}/${currentCategory.length} ` 
}
function feedbackMessage (){
  if(score >= 10 && score <= 17){
    messageEl.textContent = "That is a decent score. Great job!!" 
  }else if(score >= 18 ){
    messageEl.textContent = "Well done!! Your knowledge of this continent`s flags is exceptional!!"
  }else if(score < 10 ){
    messageEl.textContent = "Yiikes!! That`s a little low. Maybe spin the globe sometime!!"
  }
}
function render () {
  imageFlag.style.display = ''
  resetBtnEl.style.display = ''
  buttonElement1.style.display = ''
  buttonElement2.style.display = ''
  buttonElement3.style.display = ''
  if(flagsLeft !== 0 ){
    revertButtonColors()
    answerOptions()
    appendFlag ()
  }else if(flagsLeft === 0 ){
    feedbackMessage()
    messageEl.style.display = ''
    imageFlag.style.display = 'none'
    buttonElement1.style.display = 'none'
    buttonElement2.style.display = 'none'
    buttonElement3.style.display = 'none'
  }
}
// this below code/function will be used for future additions to this game
// let timeLeft = 15
// const countdownEl = document.getElementById ('countdown')
// function startTimer(){
//   let timer = setInterval(function() {
//     countdownEl.textContent = timeLeft + ' seconds remaining.'
//     timeLeft -= 1
//     if(timeLeft < 0 ){
//       countdownEl.textContent = 'You`re our of Time!'
//     }
//   }, 2000)
// }