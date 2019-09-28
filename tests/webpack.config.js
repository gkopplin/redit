var path = require('path');

module.exports = {
    mode: 'development',
    entry: './tests.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};