let wavingFlag = new Audio('../assets/wave-flag.mp3')
let shineBright = new Audio('../assets/riri-shineBright.mp3')



function playShineBright() {
  shineBright.volume = 0.30
  shineBright.play()
}

function playWavingFlag() {
  wavingFlag.volume = 0.20
  wavingFlag.play()
}



export {
  playShineBright,
  playWavingFlag,
}





// audio sources:
// https://youtu.be/WTJSt4wP2ME?si=L-Cfzug0XeKu_ORt
// https://youtu.be/lWA2pjMjpBs?si=43MMqFMV-319Sd95