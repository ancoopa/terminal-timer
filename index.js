#!/usr/bin/env node

import { runTimer } from './timer.js'

const DEFAULT_SESSION_TIME_IN_MINUTES = 1.5 * 60
const minutesLeft = process.argv[2] || DEFAULT_SESSION_TIME_IN_MINUTES
runTimer(minutesLeft)
