const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head',
            scriptLoading: 'defer'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};