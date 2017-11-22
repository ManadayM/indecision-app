const path = require('path');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    }
};

module.exports = config;