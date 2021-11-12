const {swap} = require('../../../helpers/swap')

/**
 * 
 * @param {*} arr 
 * @returns sorted array arr
 */
const selectionSort = (arr) => {
  let lowest
  for (let i = 0; i < arr.length; i++) {
    lowest = i
    for (let j = i + 1; j < arr.length; j++)
      if(arr[j] < arr[lowest]) lowest = j
    if(i !== lowest) swap(arr, lowest, i)
  }
  return arr
}

module.exports = { selectionSort }