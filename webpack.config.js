const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webgl-learn.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'web'),
        compress: true,
        index: 'index.html',
        open: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.glsl/,
                use: 'raw-loader'
            }
        ]
    }
};
