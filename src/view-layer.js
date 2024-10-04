import assert from 'node:assert'
import ansiEscapes from 'ansi-escapes'
import chalk from 'chalk'

export function redrawTimer(secondsLeft) {
  const timesString = createTimerStringFromSeconds(secondsLeft)
  process.stdout.write(ansiEscapes.eraseLines(2) + timesString + '\n')
}

function createTimerStringFromSeconds(seconds) {
  assert(typeof seconds === 'number')

  const h = Math.floor(seconds / 3600)
  const m = Math.floor(seconds % 3600 / 60)
  const s = Math.floor(seconds % 3600 % 60)

  return chalk.blue(('0' + h).slice(-2)) + ":" + chalk.yellow(('0' + m).slice(-2)) + chalk.red(":" + ('0' + s).slice(-2))
}
