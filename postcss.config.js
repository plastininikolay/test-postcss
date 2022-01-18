const postcssNext = require('postcss-cssnext')
const postcssMixins = require('postcss-mixins')
const postcssNested = require('postcss-nested')
const postcssSimpleVars = require('postcss-simple-vars')
const postcssFunctions = require('postcss-functions')
const postcssShort = require('postcss-short')
const postcssImport = require('postcss-easy-import')
const postcssNano = require('cssnano')
const postcssModules = require('postcss-modules')

module.exports = {
    plugins: [
        postcssImport({extensions: '.pcss'}),
        postcssNext,
        postcssMixins(),
        postcssNested(),
        postcssSimpleVars,
        postcssFunctions,
        postcssNano,
        postcssShort,
    ]

};