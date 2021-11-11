const {swap} = require('../../../helpers/swap')

/**
 * 
 * @param {*} arr 
 * @returns sorted array arr
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++)
    for(let j = 0; j < i; j++)
      if (arr[j] > arr[j+1]) swap(arr, j, j+1)
  return arr
}

module.exports = { bubbleSort }