 const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
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
        extensions: ['.jsx','.js'],
        alias : {
            '@':path.join(__dirname, '../src/pages'),
        }
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,  // gzip压缩
        host: '0.0.0.0', // 允许ip访问
        hot: true, // 热更新
        historyApiFallback: true, // 解决启动后刷新404
        port: 8000, // 端口
        proxy : {
            '/api': {
                target: 'http://localhost:8000',
                pathRewrite: {'^/api':''}, // 可转换
                changeOrigin: true // 可以帮我们解决跨哉问题
            }
        }
    },
}