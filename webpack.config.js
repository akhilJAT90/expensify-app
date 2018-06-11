//entry point -> output
//here we write all config related information
const path = require('path');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports =(env)=>{
    const isProduction = env == 'production';
    
    return {
        entry : './public/src/app.js',
    output : {
        path : path.join(__dirname,'public/'),
        filename : 'bundle.js'

    },
    module : {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude : /node_modules/
        },
        {
            test:/\.s?css$/,
            use: [ 'css-loader','sass-loader',]
            

        }]
    },
    devtool: isProduction ? 'source-map':'inline-source-map',
    devServer : {
        contentBase : path.join(__dirname,'public'),
        historyApiFallback : true
    }
    };
};




//loader -> lets you customize the behaviour of webpack
//loader for scss -> convert to css
//babel-loader-> to teach webpack how to run babel
//bebelrc - to include presets
// devserver - similar to live-server with more features