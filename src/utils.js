import assert from 'node:assert'

export function leftPad(number) {
  if (number < 10) {
    return "0" + number
  } else {
    return String(number)
  }
}

export function getRandomInt(max) {
  assert(typeof max === 'number')
  return Math.floor(Math.random() * max)
}
