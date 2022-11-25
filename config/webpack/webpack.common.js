const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

// call dotenv and it will return an Object with a parsed key
const envFile = dotenv.config().parsed;

// reduce it to a object, the same as before
const envKeys = Object.keys(envFile).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envFile[next]);
    return prev;
}, {});


module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    plugins: [
        // TODO: remember to manually inject NODE_ENV here
        new webpack.DefinePlugin(envKeys)
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@constants': path.resolve(__dirname, '../../src/client/constants'),
            '@store': path.resolve(__dirname, '../../src/client/store'),
            '@shared': path.resolve(__dirname, '../../src/client/shared'),
            '@typings': path.resolve(__dirname, '../../src/client/typings'),
            '@hooks': path.resolve(__dirname, '../../src/client/hooks'),
            '@utils': path.resolve(__dirname, '../../src/client/utils'),
            '@pages': path.resolve(__dirname, '../../src/client/pages'),
        },
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../../dist'),
    },
};
