/**
 * 
 * @param {*} input 
 * @param {*} result 
 */

const printLog = (input, result) => {
  console.log('Input: ', input)
  console.log('Output: ', result)
}

/**
 * 
 * @param {*} timeElapsed 
 */

const printPerformanceResult = (timeElapsed) => {
  console.log(`Performance: ${timeElapsed} seconds`)
}

module.exports = { printLog, printPerformanceResult }
