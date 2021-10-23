const { performance } = require('perf_hooks');
const { calculatePerformance } = require('./performace')
const { printLog } = require('./logger')

/**
 * 
 * @param {*} getLogs send logs if true
 * @param {*} getPerformance calculate performance and send log if true
 * @param {*} callback function to be assessed
 * @param  {...any} args arguments to the function
 */

const executor = (printLogs = false, printPerformance = false, callback, ...args) => {
  let input = args
  let timeElapsed
  let endTime
  let startTime

  if(printPerformance) startTime = performance.now()

  let result = callback(...args)

  if(printPerformance) {
    endTime = performance.now()
    timeElapsed = calculatePerformance(startTime, endTime)
    console.log(`Performance: ${timeElapsed} seconds`)
  }

  if(printLogs) printLog(input, result)
}

module.exports = { executor }
