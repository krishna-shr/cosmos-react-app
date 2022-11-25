const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('../webpack.common');
const nodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    entry: [path.join(__dirname, '..', '..', '..', 'src/server/app.ts')],
    output: {
        path: path.join(__dirname, '..', '../../dist/server'),
        filename: '[name].js',
    },
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    externals: [nodeExternals()],
};

module.exports = merge(baseConfig, config);
