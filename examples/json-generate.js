var fs = require('fs'),
    path = require('path');

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function(file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

var dirs = getDirectories('.');

var result = [];

for(var i = 0; i < dirs.length; ++i) {
    var titleFileSrc = '.' + '/' + dirs[i] + '/title.txt';
    var title = fs.readFileSync(titleFileSrc, 'utf8');
    result.push({
        id: dirs[i],
        title: title
    });
}

console.log(JSON.stringify(result, true, 4));