// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the
// unique values in the array. There can be negative
// numbers in the array, but it will always be sorted.

const countUniqueValues = (arr) => {
  if(arr.length === 0) return 0
  let head
  let tail = 0
  
  for (head = 1; head< arr.length; head++) {
      if(arr[head] !== arr[tail]) {
          tail++
          arr[tail] = arr[head]
      }
  }
  return tail + 1
}

module.exports = { countUniqueValues }