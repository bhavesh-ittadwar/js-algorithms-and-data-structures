const { selectionSort } = require("./lib/sort")
const { executor } = require('../../helpers/executor')

executor(true, true, selectionSort, [1,44,2,3,4,5,6,7] )
