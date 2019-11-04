const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
 
module.exports = {
    //指定打包模式
    mode: 'development',
    entry: {
        //配置入口文件
       main: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        //配置打包文件输出的目录
        path: path.resolve(__dirname, '../dist'),
        //生成的js文件名称
        filename: 'js/[name].[hash:8].js',
        //生成的chunk名称
        chunkFilename: 'js/[name].[hash:8].js',
        //资源引用路径
        // publicPath: './'
    },
    devServer: { //node本地服务器
        hot: true,
        port: 8088
    },
    module: {
        rules: [
            {   //将js或者jsx文件转码成es5
                test: /\.jsx?$/,    // 正则惰性匹配后缀名为js或者jsx的文件
                exclude: /node_modules/,    //排除node_modules文件夹
                use: {
                   loader: 'babel-loader',
                }
            },
            {       
                test: /\.vue$/,
                use: [
                  {
                    loader: 'cache-loader'
                  },
                  {
                    loader: 'thread-loader'
                  },
                  {
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false
                        },
                    }
                  }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                  loader: 'url-loader',
                  options: {
                    limit: 10000
                  }
                }]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackplugin({
            filename: 'index.html', // 打包后的文件名，默认是index.html   
            template: path.resolve(__dirname, '../index.html') // 导入被打包的文件模板
        })
    ]
}