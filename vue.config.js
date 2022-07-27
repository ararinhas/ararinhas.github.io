const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const ImageminWebpack = require('image-minimizer-webpack-plugin');

module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => Object.assign({}, options, {
                transformAssetUrls: Object.assign({}, options.transformAssetUrls, {
                    'v-img': ['src', '_2x', 'thumb', 'src650w', '_2x650w', 'src992w', '_2x992w', 'src1280w', '_2x1280w', 'src1600w', '_2x1600w'],
                }),
            }));

        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign({}, options, { limit: 1024 }));
    },
    configureWebpack: {
        entry: './src/entrypoint.js',
        plugins: [
            new ImageminWebpack({
                severityError: 'error', // Ignore errors on corrupted images
                test: /.(png|svg)$/i,
                minimizerOptions: {
                    plugins: [
                        'svgo',
                        ['pngquant', { speed: 1, quality: [0.80, 0.90], strip: true }],
                        ['optipng', { optimizationLevel: 6 }],
                        ['pngcrush', { reduce: true }],
                        // [ 'advpng', { optimizationLevel: 4 } ],
                    ],
                },
                // Disable `loader`
                loader: false,
            }),
            new ImageminWebpWebpackPlugin({
                config: [{
                    test: /\.(jpe?g|png)/,
                    options: {
                        quality: 85
                    }
                }],
                overrideExtension: false,
                detailedLogs: false,
                silent: false,
                strict: true
            }),
            new ImageminWebpack({
                test: /.(jpe?g)$/i,
                severityError: 'error', // Ignore errors on corrupted images
                minimizerOptions: {
                    plugins: [
                        ['jpegtran', { progressive: false }],
                        ['mozjpeg', { quality: 95, smooth: 0, progressive: false }],
                    ],
                },
                // Disable `loader`
                loader: false,
            }),
        ]
    }
};