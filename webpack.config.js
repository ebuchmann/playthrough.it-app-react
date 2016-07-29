const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

module.exports = env => {
    const addPlugin = (add, plugin) => add ? plugin : undefined;
    const ifProd = plugin => addPlugin(env.prod, plugin);
    const removeEmpty = array => array.filter(i => !!i);
    const isDev = !!env.dev;

    return {
        entry: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
        output: {
            path: `${__dirname}/dist/`,
            filename: isDev ? 'build.[name].js' : 'build.[chunkhash].js',
            publicPath: '/',
        },
        devServer: {
            contentBase: './dist',
            hot: true,
            inline: true,
        },
        resolve: {
            root: path.resolve(__dirname),
            extensions: ['', '.js', '.jsx', '.scss', '.css'],
            alias: {
                component: path.resolve(__dirname, 'src', 'components'),
                container: path.resolve(__dirname, './src/containers'),
                config: path.resolve(__dirname, './config'),
                styles: './src/styles/',
            },
        },
        resolveLoader: {
            root: path.join(__dirname, 'node_modules'),
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'react-hot!babel!eslint',
                    exclude: /node_modules/,
                },
                {
                    test: /\.jsx$/,
                    loader: 'react-hot!babel!eslint',
                    exclude: /node_modules/,
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                },
                {
                    test: /\.scss$/,
                    loader: 'style!css!sass',
                },
                {
                    test: /\.css$/,
                    loader: 'style!css',
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader?limit=10000&minetype=application/font-woff"
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file-loader',
                },
            ],
        },
        plugins: removeEmpty([
            // new CleanWebpackPlugin('../public/js/users-area'),
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                // chunks: ['vendor', 'participants'],
            }),
            // new HtmlWebpackPlugin({
            //     filename: '../../../layouts/study.handlebars',
            //     template: '../layouts/study.template.handlebars',
            //     chunks: ['vendor', 'study'],
            // }),
            // new webpack.EnvironmentPlugin(['NODE_ENV']),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'vendor',
            //     minChunks: Infinity,
            //     filename: 'vendor.[chunkhash].js',
            // }),
            // ifProd(new webpack.optimize.DedupePlugin()),
            // ifProd(new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         screw_ie8: true,
            //         warnings: false,
            //     },
            // })),
            // ifProd(new ExtractTextPlugin('styles.[chunkhash].css')),
        ]),
        postcss: function () {
            return [mqpacker, cssnano];
        },
        devtool: 'source-map',
    };
}
