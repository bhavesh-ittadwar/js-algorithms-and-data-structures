// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array 
// has its corresponding value squared in the second array.
// The frequency of values must be the same.
// same([1,2,3], [4,1,9]) => true
// same([1,2,3], [1,9]) => false
// same([1,2,1], [4,4,1]) => false

const same = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) return false
  let arrTwoTracker = {}
  let result = true

  for (let element of arrTwo) {
      arrTwoTracker[element] = ++arrTwoTracker[element] || 1
  }
  
  for (let key of arrOne) {
      if (arrTwoTracker[key * key] > 0){
          --arrTwoTracker[key * key]
      } else {
          result = false
          break
      }
  }
  return result
}

module.exports = { same }