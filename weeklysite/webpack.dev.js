const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const marked = require("marked");
const renderer = new marked.Renderer();
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const fs = require('fs');


module.exports = {
    entry:
        // {
        // app: [
        [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, './index.js'),
        ],
    // ]
    // },
    output: {
        path: path.resolve(__dirname, "../docs"),
        publicPath: '/',
        filename: "[name].js",
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "../weeklysite")
                ],
                use: [
                    'react-hot-loader/webpack',
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env", 'stage-0', 'react'],
                            plugins: [
                                "syntax-dynamic-import"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(html)$/,

                use: [{
                    loader: "html-loader",
                }]
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                use: [{
                        loader: 'url-loader',
                        query: {
                            name: 'assets/[name]-[hash:5].[ext]',
                            limit: 60000
                        }
                    }

                ]

            },
            {
                test: /\.md$/,
                use: [{
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            pedantic: true,
                            renderer
                        }
                    }
                ]

            }
        ],
    },

    resolve: {
        alias: {
            App: path.resolve(__dirname, './app')
        },

    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            rewrites: [{
                from: /^\/article\/.*$/,
                to() {
                    return '/index.html';
                },
            }],
        },
        hot: true,
        publicPath: "http://localhost:8080/"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            BASEPATH: JSON.stringify('/'),
        }),
        new FaviconsWebpackPlugin({
            logo: './assets/favicon.ico',
            inject: true,
            icons: {
                android: false,
                appleIcon: false,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        })
    ],

}