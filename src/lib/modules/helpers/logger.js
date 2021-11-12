/**
 * 
 * @param {*} input 
 * @param {*} result 
 */

const printInput = (input) => {
  console.log('Inputs: ', ...input)
}

/**
 * 
 * @param {*} input 
 * @param {*} result 
 */

 const printOutput = (result) => {
  console.log('Output: ', result)
}

/**
 * 
 * @param {*} timeElapsed 
 */

const printPerformanceResult = (timeElapsed) => {
  console.log(`Performance: ${timeElapsed} seconds`)
}

module.exports = { printOutput, printInput, printPerformanceResult }
