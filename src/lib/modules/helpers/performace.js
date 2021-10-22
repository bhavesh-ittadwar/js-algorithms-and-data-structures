// getPerformance recieves a function and its parameters
// and returns the time it took to execute the function in seconds

const getPerformance = (callback, ...args) => {
  let timeElapsed
  let endTime
  let startTime = performance.now()

  callback(...args)
  endTime = performance.now()
  timeElapsed =  (endTime - startTime) / 1000
  return `${timeElapsed} seconds`
}

module.exports = { getPerformance }
