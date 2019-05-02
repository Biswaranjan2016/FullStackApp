let fs = require('fs');
let path="D://file1.txt";
let file_descriptor = fs.openSync(path,"a");
fs.writeFileSync(file_descriptor,"Initials for data migration","utf8");