#!/usr/bin/env node

import ansiEscapes from 'ansi-escapes'
import { createSpinner } from 'nanospinner'
import { defineRandomTimepoints, createTimerStringFromSeconds } from './time.helper.js'
import { playSoundInfinite, playSoundRandomStop } from './sound.helper.js'

const DEFAULT_SESSION_TIME_IN_MINUTES = 1.5 * 60

function run(minutesLeft = DEFAULT_SESSION_TIME_IN_MINUTES) {
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

run()
