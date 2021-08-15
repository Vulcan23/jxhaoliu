import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export default {
    target: 'static',
    build: {
        publicPath: 'http://cdn.jxhaoliu.com/home/',
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[contenthash].css',
                chunkFilename: '[contenthash].css',
                ignoreOrder: true,
            }),
        ],
        extend(config, ctx) {
            if (!ctx.isDev) {
                config.module.rules.push({
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ]
                });
            }
        }
    },
    plugins: ['~/plugins/element-ui.js', '~/plugins/vue-lazyload.js', '~/plugins/route.js'],
    head: {
        title: '好六网络',
        htmlAttrs: {
            lang: 'zh-CN',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            {
                name: 'keywords',
                content: '好六网络,江西好六'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    '江西好六网络科技有限公司（简称：好六网络），注册成立于2017年，是一家立足于新媒体头部流量整合，全面布局互联网广告营销生态企业。'
            }
        ],
    }
}