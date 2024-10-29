const path=require('path')  
module.exports = {
    // 配置路径别名  
    configureWebpack: (config) => {  
        config.resolve.alias['@']=path.resolve(__dirname,"./src");
    }
}  
