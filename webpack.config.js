// Generated using webpack-cli https://github.com/webpack/webpack-cli
const webpack = require('webpack');
require('dotenv/config');



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'development';


const config = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
 
    },
    devServer: {
        open: true, 
        port: process.env.DEV_SERVER_PORT,
        historyApiFallback: true,
        proxy: {
          '/api': `http://localhost:${process.env.PORT}`
        }
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new webpack.ProvidePlugin({
          "React": "react",
       }),
       new webpack.EnvironmentPlugin(['GOOGLE_MAPS_TOKEN']), 
       new webpack.EnvironmentPlugin(['DATABASE_URL'])

    ],
    module: {
        rules: [
            {
              test: /\.js$|jsx/,
              use: {
                loader: 'babel-loader',
                options: {
                  plugins: [
                    '@babel/plugin-transform-react-jsx'
      
                  ]
                }
              }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            { test: /\.css$/, use: 'css-loader' },
         
           

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};
