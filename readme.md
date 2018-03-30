## react-valid-attributes

Exports two functions:

- pick: pick all valid html attributes from props for a given element
- omit: omit all valid html attributes from props for a given element

Uses [react-html-attributes](https://www.npmjs.com/package/react-html-attributes).

## Example
```js
const { pick, omit }  = require('react-valid-attributes')

const props = {
  src: 'https://pbs.twimg.com/profile_images/765333670366355456/q5ACQ8i3_400x400.jpg',
  alt: 'The npm logo',
  handleImageClick: () => {}
}

const attributes = pick(props, 'img')
// => { src: '...', alt: '...' }

const rest = omit(props, 'img')
// => { handleImageClick }