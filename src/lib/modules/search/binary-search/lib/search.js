/**
 * 
 * @param {*} sortedArray should get a sorted array
 * @param {*} key the key needed to be searched in sortedArray
 * @returns index of the key, if present in sortedArray else -1
 */

const binarySearch = (sortedArray, key) => {
  let pivot = -1
  let left = 0
  let right = sortedArray.length - 1

  while(right >= left && key !== sortedArray[pivot]) {
      pivot = Math.ceil((right + left) / 2)
      if(key > sortedArray[pivot]) left = pivot + 1
      else if(key < sortedArray[pivot]) right = pivot - 1
  }
  return key === sortedArray[pivot] ? pivot : -1 
}

module.exports = { binarySearch }
