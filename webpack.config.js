const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    // resolve: {
    //     extensions: ['', '.js', '.jsx']
    // },
    devServer: {
        port: 4000
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            // use: {
            //     loader: "babel-loader"
            // },
            use: ['babel-loader']
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    watch: true,
  };