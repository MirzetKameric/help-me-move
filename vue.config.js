'use strict'
const path = require('path')
const root = path.resolve(__dirname)

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': `${root}/src`,
                '@root': root
            }
        }
    }
}