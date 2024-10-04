#!/usr/bin/env node

import { runTimer } from './timer.js'

const DEFAULT_SESSION_TIME_IN_MINUTES = 1.5 * 60
const DEFAULT_SESSION_STOPS_QUANTITY = 3

const minutesLeft = process.argv[2] || DEFAULT_SESSION_TIME_IN_MINUTES
const stopsQuantity = process.argv[3] || DEFAULT_SESSION_STOPS_QUANTITY
runTimer(minutesLeft, stopsQuantity)
