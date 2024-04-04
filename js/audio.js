let wavingFlag = new Audio('../assets/wave-flag.mp3')


function playWavingFlag() {
  wavingFlag.volume = 0.20
  wavingFlag.play()
}



export {
  playWavingFlag,
}
