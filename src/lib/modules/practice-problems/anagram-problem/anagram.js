//  Given two strings, write a function to determine if the second
//  string is an anagram of the first. An anagram is a word, phrase, 
// or name formed by rearranging the letters of another, such as 
// cinema, formed from iceman

const validAnagram = (stringOne, stringTwo) => {
  if(stringOne.length !== stringTwo.length) {
      return false
  }
  const frequencyCounterOne = buildFrequencyCounter(stringOne)
  const frequencyCounterTwo = buildFrequencyCounter(stringTwo)
  let result = true

  for(element in frequencyCounterOne ) {
      if(frequencyCounterOne[element] !== frequencyCounterTwo[element]) {
          result = false
          break
      }
  }

  return result
}

const buildFrequencyCounter = (stringParam) => {
    const freqCounter = {}
    for (element of stringParam) {
        freqCounter[element] = ++freqCounter[element] || 1
    }
    return freqCounter
}

module.exports = { validAnagram }