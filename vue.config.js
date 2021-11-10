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
            disableHostCheck: true
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