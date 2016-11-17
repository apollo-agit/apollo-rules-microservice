/**
*Web pack confiuarution to aid in a stanalong
thir part thing
*/
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './src/server.ts',
    target: 'node',
    resolve: {
        extensions: ['', '.ts', '.js'],
        root: path.resolve('src')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'server.js',
        sourceMapFilename: 'server.map'
    },
    module: {
        loaders: [
            //typescript loader for building the typescript
            { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/] },
        ]
    },
    externals: nodeModules
}
