//entry point -> output
//here we write all config related information
const path = require('path');

module.exports = {
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
            use: [ 'style-loader', 'css-loader','sass-loader' ]

        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname,'public'),
        historyApiFallback : true
    }
};

//loader -> lets you customize the behaviour of webpack
//loader for scss -> convert to css
//babel-loader-> to teach webpack how to run babel
//bebelrc - to include presets
// devserver - similar to live-server with more features