const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack'); //访问内置的插件
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = function(env) {
  console.log('env',env);
  return {
    entry: './src/index.js',
    output: {
      filename: '[name].[hash:8].bundle.js',
      path: __dirname + '/dist',
      // publicPath: __dirname + '/dist',
    },
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader']},
        // {
        //   test: /\.(sass|scss)$/,
        //   use:[
        //     MiniCssExtractPlugin.loader, // 4.x版本使用mini-css-extract-plugin插件单独抽离css文件，旧版本使用extract-text-webpack-plugin插件
        //     'css-loader',
        //     'sass-loader',  // sass-loader  node-sass
        //     {
        //       loader: 'postcss-loader', // 自动加前缀
        //       options: { 
        //         sourceMap: true,
        //         plugins: [autoprefixer({})]
        //       } 
        //     },
        //   ]
        // },
        {
          test: /\.less$/,
          use:[
            MiniCssExtractPlugin.loader, // 4.x版本使用mini-css-extract-plugin插件单独抽离css文件，旧版本使用extract-text-webpack-plugin插件
            'css-loader',
            'less-loader',  // less-loader  less
            {
              loader: 'postcss-loader', // 自动加前缀
              options: { 
                sourceMap: true,
                plugins: [autoprefixer({})]
              } 
            },
          ]
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: 'babel-loader'
        },
        {
          test: [/\.(png|jpg|jpeg)$/],
          use: {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'assets/[name].[ext]',
            }
          },
        }, 
        // 如果图片较多，会发很多http请求，会降低页面性能。这个问题可以通过url-loader解决。url-loader会将引入的图片编码，生成dataURl
        // url-loader把图片打包到js文件中，将引入的图片编码，生成dataURl。图片较大时，编码会消耗性能，可设置limit，超出limit值的使用file-loader copy
        // url-loader封装了file-loader。url-loader不依赖于file-loader
        //  1.文件大小小于limit参数，url-loader将会把文件转为DataURL；2.文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader。因此我们只需要安装url-loader即可。
        // {
        //   loader: require.resolve('file-loader'),
        //   exclude: [/\.(js|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.(css|scss)$/],
        //   options: {
        //     name: 'assets/[name].[ext]',
        //   },
        // }, // file-loader把图片copy出来，可以解析项目中的url引入
        // file-loader可以解析项目中的url引入（不仅限于css），根据我们的配置，将图片拷贝到相应的路径，再根据我们的配置，修改打包后文件引用路径，使之指向正确的文件
        {
          test: /\.(ts|tsx)?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({ // css单独打包
          filename: "[name].[hash:8].css",
          chunkFilename: "[name].[hash:8].css"
      })
    ],
    devServer: {
      // contentBase: false,
      contentBase: './dist',
      hot: true, // 自动刷新页面
      // hotOnly: true,//只有热替换，不刷新页面
      port: 8000,
      compress: true
    },
  }
}