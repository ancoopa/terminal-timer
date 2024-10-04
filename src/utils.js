import assert from 'node:assert'

export function getRandomInt(max) {
  assert(typeof max === 'number')
  return Math.floor(Math.random() * max)
}
