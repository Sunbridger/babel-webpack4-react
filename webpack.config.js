const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode:'development',
    entry:'./src/index.jsx',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js[x]$/,
                exclude: /node_modules/,
                include:/src/,
                use:{
                    loader:'babel-loader',
                    options:{
                        "presets": [["@babel/preset-env",{"useBuiltIns":"usage","corejs":2}],"@babel/preset-react"],
                        "plugins": ["@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
          filename: 'index.html',
          template: path.join(__dirname, './template.html') 
        })
    ]
};