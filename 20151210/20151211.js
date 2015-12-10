
// obf write to file
var fs =require('fs');
var path = '../json/some.json';
var obj = {
	name : 'howaerd',
	friends : ['chuck','wesley','rance','louis']

};


fs.writeFile(path,JSON.stringify(obj),function(err){

	if (err)

		throw err;
		
	console.log('saved');
});