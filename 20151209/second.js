var fs = require('fs');
var path = __dirname;
var filepath = __filename;

fs.readFile('../json/example.json', 'utf8', function(err,data){
	var json = JSON.parse(data);
	console.log(json);
	console.log(path);
	console.log(filepath);
});