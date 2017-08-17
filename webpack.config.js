/**
 * Created by Administrator on 2017/8/17 0017.
 */

module.exports={
    entry:"./scr/main.js",
    output:{
        path:__dirname,
        filename:"dist/app.js"
    },
    module:{
        loader:[
            {test:/\.js$/,loader:"babel-loader" ,exclude:/node_modules/},
            {test:/\.css$/,loader:"style-loader!css-loader" },
            {test:/\.(png|jpg|jpeg|gif|ttf)$/,loader:"file-loader" }
        ]
    }
}