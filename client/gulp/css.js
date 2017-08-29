const { join, extname } = require('path');
const { exec } = require('child_process');
const { readdirSync } = require('fs');

const config = require('../config');

const cssTask = () => {

    let cssInPath = join(config.css, 'pages'),
        cssOutPath = join(config.build, 'css'),

        fileList = readdirSync(cssInPath),
        fileName = '';

    fileList.map((file) => {
        if(extname(file) !== '.less') return;

        fileName = /\w+(?=\.less$)/gi.exec(file)[0];

        exec('lessc --clean-css '+ cssInPath +'/'+ file +' --autoprefix="last 2 versions" '+ cssOutPath +'/'+ fileName +'.bundle.min.css');
    });

}

module.exports = cssTask;