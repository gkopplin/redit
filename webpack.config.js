var path = require('path');

module.exports = {
    mode: 'development',
    entry: { 
        app: './scripts/index.js',
        tests: './tests/tests.js'
    },
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
};