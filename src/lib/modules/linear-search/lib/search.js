/**
 * 
 * @param {*} arr array to search a key from
 * @param {*} key to search the key in arr
 * @returns index of the key, if present in arr else -1
 */

const linearSearch = (arr, key) => {
  for (let [index, value] of arr.entries()) if (value === key) return index
  return -1
}

module.exports = { linearSearch }
