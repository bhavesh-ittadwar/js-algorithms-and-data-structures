const { linearSearch } = require("./lib/search")
const { executor } = require('../../helpers/executor')

executor(true, true, linearSearch, ['add', 'subtract', 'multiply', 'divide'], 'multiply')