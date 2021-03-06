const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { SourceMapDevToolPlugin } = require("webpack");

const plugins = [
    new HtmlWebpackPlugin({
        title: "Client part",
        template: "./public/index.html", 
        path: path.resolve(__dirname, "build")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new SourceMapDevToolPlugin({
        filename: "[file].map"
    }),
]

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    plugins,
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js"
    },
    devServer: {
        static: path.resolve(__dirname, "build"),
        open: true,
        // clientLogLevel: "silent"
        port: 9000,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults" 
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }, 
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
              },
        ]
    }
}