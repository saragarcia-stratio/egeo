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

    entry: './components/index.ts',

    output: {
        path: './lib',
        publicPath: '/',
        filename: 'egeo.js',
        libraryTarget: 'commonjs2',
        library: 'egeo'
    },

    // require those dependencies but don't bundle them
    externals: [/^\@angular\//, /^rxjs\//],

    module: {
        rules: [
           {
               test: /\.ts$/,
               use: [
                  {
                     loader: 'awesome-typescript-loader?declaration=false',
                     options: {
                        configFilename: 'tsconfig.components.json'
                     }
                  },
                  'angular2-template-loader',
                  'angular-router-loader'
               ],
               exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
               test: /\.html$/,
               use: 'raw-loader',
               exclude: [helpers.root('web/index.html')]
            },
            {
               test: /\.css$/,
               use: ['raw-loader', 'css-loader']
            },
            {
               test: /\.scss$/,
               exclude: '/node_modules/',
               use: ['raw-loader', 'sass-loader']
            },
            {
               test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
               use: "file-loader?name=assets/fonts/[name].[hash].[ext]"
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
