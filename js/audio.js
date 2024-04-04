let wavingFlag = new Audio('../assets/wave-flag.mp3')
let diamond = new Audio('../assets/riri-diamond.mp3')



function playShineBright() {
  diamond.volume = 0.45
  diamond.play()
}

function playWavingFlag() {
  wavingFlag.volume = 0.20
  wavingFlag.play()
}



export {
  playShineBright,
  playWavingFlag,
}
