var configs = require('./webpack.dev');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const chalk = require('chalk');

// configs.entry.app.unshift("webpack/hot/dev-server");
configs.entry.app.unshift(
  "react-hot-loader/patch",
  "webpack-dev-server/client?http://localhost:8080/",
  "webpack/hot/dev-server"
);


const compiler = webpack(configs);
const server = new WebpackDevServer(compiler,{
  hot:true,
//   contentBase: path.resolve(__dirname, 'dist'),
})
//
server.listen(8080,"127.0.0.1",function(){
  console.log(chalk.green('Starting sever on 127.0.0.1:8080'))
})
