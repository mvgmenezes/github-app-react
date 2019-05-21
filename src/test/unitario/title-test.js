
const Title = require('./title')
const $ = require('whacko')
const ReactDOMServer = require('react-dom/server')
const React = require('react')

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Title)
)

console.log(TitleComponent)
