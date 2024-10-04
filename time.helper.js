import assert from 'node:assert'
import chalk from 'chalk'
import { getRandomInt } from './utils.js'

export function defineRandomTimepoints(sessionTimeInSeconds, quantity = 3) {
  assert(typeof sessionTimeInSeconds === 'number')

  const randomSeconds = []
  for (let i = 0; i < quantity; i++) {
    randomSeconds.push(getRandomInt(sessionTimeInSeconds))
  }
  return randomSeconds
}

export function createTimerStringFromSeconds(seconds) {
  assert(typeof seconds === 'number')

  const h = Math.floor(seconds / 3600)
  const m = Math.floor(seconds % 3600 / 60)
  const s = Math.floor(seconds % 3600 % 60)

  return chalk.blue(('0' + h).slice(-2)) + ":" + chalk.yellow(('0' + m).slice(-2)) + chalk.red(":" + ('0' + s).slice(-2))
}
