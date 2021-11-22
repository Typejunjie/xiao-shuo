module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views'
            }
        },
        devServer: {
            // 解决手机无法连接network
            //host: '192.168.0.101',
            port: 8081, // 设置端口号
            https: false, // https:{type:Boolean}
            open: false, //配置自动启动浏览器
            proxy:null  //设置代理
        }
    },
    chainWebpack: config => {
        // GraphQL Loader
        config.module
            .rule('ts')
            .test(/\.ts$/)
            .use('tslint-loader')
            .loader('tslint-loader')
            .end()
            .rule('less')
            .test(/\.less$/)
            .use('less-loader')
            .loader('less-loader')
            .end()
    },
}