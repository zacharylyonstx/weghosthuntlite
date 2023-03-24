/* craco.config.js */
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@app': path.resolve(__dirname, 'src'),
            'components': path.resolve(__dirname, 'src/components'),
            'pages': path.resolve(__dirname, 'src/pages'),
            
        },
    }
};