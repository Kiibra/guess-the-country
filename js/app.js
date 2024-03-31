/*-------------------------------- Constants --------------------------------*/
import { getRandomAmericas } from "../data /continents.js";
import { getRandomAfrican } from "../data /continents.js";
import { getRandomEurasia } from "../data /continents.js";

/*---------------------------- Variables (state) ----------------------------*/
let currentCategory = ''
let currentQuestionIdx = []
let score
const correctAnswer = ''
let options = ''

/*------------------------ Cached Element References ------------------------*/

const theAmericasButton =document.querySelector('#americas-button')
const africanButton = document.querySelector('#african-button')
const eurasianButton = document.querySelector('#eurasian-button')

// const getcontinents =document.querySelectorAll('#continents')

const imageFlag = document.querySelector('.flag')

const buttonElement1 = document.querySelector('#button1')
const buttonElement2= document.querySelector('#button2')
const buttonElement3 = document.querySelector('#button3')

// console.log(buttonEl1)




/*----------------------------- Event Listeners -----------------------------*/
// getcontinents.forEach(function(button){
//   button.addEventListner('click', init )
// } )

theAmericasButton.addEventListener('click', selectTheAmericas)
africanButton.addEventListener('click', selectAfrican) 
eurasianButton.addEventListener('click', selectEurasia)

console.log(imageFlag)


buttonElement1.addEventListener('click', answerOptions)
buttonElement2.addEventListener('click', answerOptions)
buttonElement3.addEventListener('click', answerOptions)

/*-------------------------------- Functions --------------------------------*/
init ()

  function init () {
    currentCategory = 'theAmericas, african, eurasia'
    options = [0, 1, 2]
    currentQuestionIdx = []
    score = 0


  render()
}

// need to push new randomized pair of countries of theAmericas 
// use style.display = '' and style.display = 'none' to show i want to see


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



function appendFlag (){
    imageFlag.src = currentCategory.flagURL
    imageFlag.style.height = '200px'
    imageFlag.style.width = '300px'
    // if (currentCategory === 'theAmericas') {
    //   currentCategory[currentQuestionIdx].flagURL
    // }else if(currentCategory === 'african') {
    //   return currentCategory[currentQuestionIdx].flagURL
    // }else if (currentCategory === 'eurasia'){
    //   return currentCategory[currentQuestionIdx].flagURL
    // }
  console.log(currentCategory)

}


function handleClick (evt) {

appendFlag ()
}


function answerOptions (){ 
    buttonElement1.textContent = currentCategory.options[0]
    buttonElement2.textContent = currentCategory.options[1]
    buttonElement3.textContent = currentCategory.options[2]
  checkCorrectAnswer()
}

// console.log(buttonEl1)
// pass all three answer options to either button1 button2 and button3


function checkCorrectAnswer (){
  if (currentQuestionIdx.answerOptions === correctAnswer) {
    correctAnswer.textContent.style.color = "correct"
  }else{
    return correctAnswer
}
// check if users answeroption is the same as the correct answer stated

}


function render () {
}















// references:
// https://stackoverflow.com/questions/1297449/change-image-size-with-javascript