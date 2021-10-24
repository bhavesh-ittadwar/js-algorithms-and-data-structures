/**
 * 
 * @param {*} startTime 
 * @param {*} endTime 
 * @returns calculated performance time in seconds
 */

const calculatePerformance = (startTime, endTime) => {
  return (endTime - startTime) / 1000
}

module.exports = { calculatePerformance }
