const attributes = require('react-html-attributes')
const _ = {}
_.pick = require('lodash.pick')
_.omit = require('lodash.omit')

module.exports = {
  pick: (props, type = '*') => _.pick(props, attributes[type]),
  omit: (props, type = '*') => _.omit(props, attributes[type])
}