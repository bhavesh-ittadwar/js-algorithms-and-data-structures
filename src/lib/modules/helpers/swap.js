/**
 * 
 * @param {*} arr 
 * @param {*} firstIndex 
 * @param {*} secondIndex 
 * @returns array with swapped values on the index passed 
 */

const swap = (arr, firstIndex, secondIndex) => {
    let temp = arr[firstIndex]
    arr[firstIndex] = arr[secondIndex]
    arr[secondIndex] = temp
  }
  
  module.exports = { swap }
  