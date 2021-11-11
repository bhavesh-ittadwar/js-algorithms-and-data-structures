const {swap} = require('../../../helpers/swap')

/**
 * 
 * @param {*} arr 
 * @returns sorted array arr
 */
const bubbleSort = (arr) => {
  let noSwaps
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true
    for(let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

module.exports = { bubbleSort }