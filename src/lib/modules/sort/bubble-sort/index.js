const { bubbleSort } = require("./lib/sort")
const { executor } = require('../../helpers/executor')

executor(true, true, bubbleSort, [12,23,21,33,2,4,45,3,434,2,3] )
