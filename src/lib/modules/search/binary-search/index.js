const { binarySearch } = require("./lib/search")
const { executor } = require('../../helpers/executor')

executor(true, true, binarySearch, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,19], 9)
// executor(true, true, binarySearch, ['A', 'B', 'D', 'a', 'c', 'e', 'f', 'y', 'z', ], 'e')
