var webpack = require('webpack');

module.exports = {
    entry: {
        'main': './src/main.ts',
        'main.min': './src/main.ts'
    },
    devtool: 'source-map',
    output: {
        path: './public/js',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        //loaders: [
        //    {test: /\.ts?$/, loader: 'ts-loader'}
        //]
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    modulesDirectories: ['node_modules']
}