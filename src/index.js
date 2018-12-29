const attributes = require('react-html-attributes')
const _ = {}
_.pick = require('lodash.pick')
_.omit = require('lodash.omit')

Object.defineProperty(exports, '__esModule', {
  value: true
})

const pick = (props, type = '*') => _.pick(props, attributes[type])

const omit = (props, type = '*') => _.omit(props, attributes[type])

exports.default = { pick, omit }
exports.pick = pick
exports.omit = omit
