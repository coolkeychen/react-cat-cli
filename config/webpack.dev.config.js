 const path = require('path');

module.exports = {
    mode: 'development',
    /* 入口 */
    entry: path.join(__dirname, '../src/index.js'),
    /* 输出到 dist 目录，输出文件名字为 bundle.js */

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use:['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        }]
    },
    resolve: {
        extensions: ['.jsx','.js']
    }
}