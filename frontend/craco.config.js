/* craco.config.js */
const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
    webpack: {
        alias: {
            '@app': path.resolve(__dirname, 'src'),
            'components': path.resolve(__dirname, 'src/components'),
            'pages': path.resolve(__dirname, 'src/pages'),
        },
        plugins: {
            add: [
                CracoLessPlugin({
                    lessLoaderOptions: {
                        lessOptions: {
                            modifyVars: {
                                '@primary-color': '#28B2F0',
                                '@link-color': '#28B2F0',
                                '@border-radius-base': '2px',
                                '@text-color': '#D0D0D0',
                                '@text-color-secondary': '#A0A0A0',
                                '@layout-header-background': '#202020',
                                '@layout-body-background': '#151515',
                                '@layout-footer-background': '#202020',
                            },
                            javascriptEnabled: true,
                        },
                    },
                })
            ]
        },
    },
};