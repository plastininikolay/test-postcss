const postcssNext = require('postcss-cssnext')
const postcssMixins = require('postcss-mixins')
const postcssNested = require('postcss-nested')
const postcssSimpleVars = require('postcss-simple-vars')
const postcssFunctions = require('postcss-functions')
const postcssShort = require('postcss-short')
const postcssImport = require('postcss-import')
const postcssNano = require('cssnano')
const postcssModules = require('postcss-modules')

module.exports = {
    plugins: [
        postcssNext,
        postcssMixins(),
        postcssNested(),
        postcssSimpleVars,
        postcssFunctions,
        postcssImport(),
        postcssNano,
        postcssShort,
    ]

};