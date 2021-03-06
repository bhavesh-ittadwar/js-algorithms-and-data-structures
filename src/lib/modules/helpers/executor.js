const { performance } = require('perf_hooks');
const { calculatePerformance } = require('./performace')
const { printOutput, printInput, printPerformanceResult } = require('./logger')

/**
 * 
 * @param {*} printLogs send logs if true
 * @param {*} printPerformance calculate performance and send log if true
 * @param {*} callback function to be assessed
 * @param  {...any} args arguments to the function
 */

const executor = (printLogs = false, printPerformance = false, callback, ...args) => {
  let input = args
  let timeElapsed
  let endTime
  let startTime

  if(printPerformance) startTime = performance.now()
  if(printLogs) printInput(input)

  let result = callback(...args)

  if(printPerformance) {
    endTime = performance.now()
    timeElapsed = calculatePerformance(startTime, endTime)
    printPerformanceResult(timeElapsed)
  }

  if(printLogs) printOutput(result)
}

module.exports = { executor }
