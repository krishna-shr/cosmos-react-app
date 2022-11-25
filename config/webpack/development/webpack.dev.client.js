const { merge } = require('webpack-merge');
const commonConfig = require('../webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: true,
        allowedHosts: ['all'],
        static: path.resolve(__dirname, '../../../dist'),
        hot: true,
        compress: true,
    },
    devtool: 'inline-source-map',
    resolve: {
        fallback: {
            fs: false,
            path: false,
            os: false,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            publicPath: `${process.env.BASE_PATH}/`,
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
