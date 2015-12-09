
//read somewhere files 非同步讀取目錄的方法

var fs =require('fs');
var path = 'P:/'

fs.readdir(path,function(err,files){
	if(err){
	console.log(err);
	return ;
	}
	for (var index in files){
	var dirreader =[];
	dirreader.push(files[index]);
		if (files[index] == 'a'){
			console.log("");
		}
		else {
			console.log("err");
		}
	}

});