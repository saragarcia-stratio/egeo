const helpers = require('./helpers'),
    webpack = require('webpack');

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    entry: helpers.root('egeo.ts'),

    output: {
        path: './',
        publicPath: '/',
        filename: 'egeo.js',
        libraryTarget: 'commonjs2',
        library: 'egeo'
    },

    // require those dependencies but don't bundle them
    externals: [/^\@angular\//, /^rxjs\//, /^ng2-translate\//],

    module: {
        rules: [
           {
               test: /\.ts$/,
               use: [
                  'awesome-typescript-loader?declaration=true',
                  'angular2-template-loader',
                  'angular-router-loader'
               ],
               exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
               test: /\.json$/,
               use: 'json-loader'
            },
            {
               test: /\.html$/,
               use: 'raw-loader',
               exclude: [helpers.root('web/index.html')]
            },
            {
               test: /\.css$/,
               use: ['to-string-loader', 'css-loader']
            },
            {
               test: /\.scss$/,
               exclude: '/node_modules/',
               use: ['raw-loader', 'sass-loader']
            },
            {
               test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
               use: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
               test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
               use: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
               test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
               use: "url-loader?limit=10000&minetype=application/octet-stream"
            },
            {
               test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
               use: "file-loader"
            },
            {
               test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
               use: "url-loader?limit=10000&minetype=image/svg+xml"
            },
            {
               test: /\.ico(\?v=\d+\.\d+\.\d+)?$/,
               use: "file-loader"
            }
        ]
    },

    plugins: [
        // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./components')
        ),

        new webpack.LoaderOptionsPlugin({
            options: {
                tslintLoader: {
                    emitErrors: false,
                    failOnHint: false
                }
            }
        })
    ]
};
