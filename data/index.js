const cases = require('./cases')
const coolers = require('./coolers')
const graphics = require('./graphics')
const memory = require('./memory')
const motherboards = require('./motherboards')
const processors = require('./processors')
const storage = require('./storage')


const data = {
    processors: processors,
    motherboards: motherboards,
    memory: memory,
    storage: storage,
    graphics: graphics,
    cases: cases,
    coolers: coolers
}

module.exports = data