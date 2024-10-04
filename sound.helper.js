// import childProcess from 'child_process'

// function playSound(soundPath) {
//   childProcess.exec('afplay /System/Library/Sounds/Glass.aiff')
// }

function playSoundBip(quantity = 1) {
  const interval = setInterval(() => {
    quantity -= 1
    process.stdout.write('\u0007')
    if (quantity < 1){
      clearInterval(interval)
    }
  }, 100)
  
}

export function playSoundInfinite() {
  playSoundBip(50)
}

export function playSoundRandomStop() {
  playSoundBip(3)
}
