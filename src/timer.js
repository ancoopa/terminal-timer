import assert from 'node:assert'
import { createSpinner } from 'nanospinner'
import { getRandomInt } from './utils.js'
import { playSoundInfinite, playSoundRandomStop } from './sound-player.js'
import { redrawTimer } from './view-layer.js'

export function runTimer(minutesLeft, stopsQuantity) {
  const spinner = createSpinner().start({ color: 'green' })
  let secondsLeft = minutesLeft * 60
  const randomStopSoundPoints = defineRandomTimepoints(secondsLeft, stopsQuantity)

  redrawTimer(secondsLeft)

  const interval = setInterval(() => {
    secondsLeft -= 1
    redrawTimer(secondsLeft)
    if (randomStopSoundPoints.includes(secondsLeft)) {
      playSoundRandomStop()
    }
    if (secondsLeft < 1){
      playSoundInfinite()
      spinner.success()
      clearInterval(interval)
      console.log(`Timer completed at ${new Date().toLocaleTimeString()}.`)
      setTimeout(() => process.exit(0), 2000)
    }
  }, 1000)
}

function defineRandomTimepoints(sessionTimeInSeconds, stopsQuantity = 3) {
  assert(typeof sessionTimeInSeconds === 'number')
  if (stopsQuantity === 0) {
    return []
  }

  const randomSeconds = []
  for (let i = 0; i < stopsQuantity; i++) {
    randomSeconds.push(getRandomInt(sessionTimeInSeconds))
  }
  return randomSeconds
}
