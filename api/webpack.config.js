var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');
var { CheckerPlugin } = require('awesome-typescript-loader');

const defaults = {
    ENV_TYPE: 'development'
};

module.exports = env => {
    if(!env) {
        env = defaults;
    }

    return {
        entry: ['./src/server.ts'],
        target: 'node',
        mode: env.ENV_TYPE,
        externals: [nodeExternals(), './ormconfig.json'],
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app.bundle.js',
            publicPath: './'
        },
        resolve: {
            mainFields: ['main', 'module', 'browser'],
            modules: ['node_modules'],
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    loader: 'awesome-typescript-loader',
                    options: {
                        "useBabel": true,
                        "babelCore": "@babel/core",
                    },
                }
                // {
                //     test: /\.(ts|js)x?$/,
                //     exclude: /node_modules/,
                //     loader: 'babel-loader',
                // }
            ],
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        plugins: [
            new CheckerPlugin(),
            new WebpackNotifierPlugin({title: 'Webpack'}),
        ]
    }
};
/**
 *         "awesomeTypescriptLoaderOptions": {
          "useBabel": true,
          "babelCore": "@babel/core",
        },
 */