import assert from 'node:assert'
import chalk from 'chalk'
import ansiEscapes from 'ansi-escapes'
import { createSpinner } from 'nanospinner'
import { getRandomInt } from './utils.js'
import { playSoundInfinite, playSoundRandomStop } from './sound-player.js'

export function runTimer(minutesLeft) {
  const spinner = createSpinner().start({ color: 'green' })
  let secondsLeft = minutesLeft * 60
  const randomStopSoundPoints = defineRandomTimepoints(secondsLeft)

  const redrawTimer = () => {
    const timesString = createTimerStringFromSeconds(secondsLeft)
    process.stdout.write(ansiEscapes.eraseLines(2) + timesString + '\n')
  }
  redrawTimer()

  const interval = setInterval(() => {
    secondsLeft -= 1
    redrawTimer()
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

function defineRandomTimepoints(sessionTimeInSeconds, quantity = 3) {
  assert(typeof sessionTimeInSeconds === 'number')

  const randomSeconds = []
  for (let i = 0; i < quantity; i++) {
    randomSeconds.push(getRandomInt(sessionTimeInSeconds))
  }
  return randomSeconds
}

function createTimerStringFromSeconds(seconds) {
  assert(typeof seconds === 'number')

  const h = Math.floor(seconds / 3600)
  const m = Math.floor(seconds % 3600 / 60)
  const s = Math.floor(seconds % 3600 % 60)

  return chalk.blue(('0' + h).slice(-2)) + ":" + chalk.yellow(('0' + m).slice(-2)) + chalk.red(":" + ('0' + s).slice(-2))
}
