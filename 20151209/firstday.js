
//read somewhere files 非同步讀取目錄的方法

var fs =require('fs');

fs.readdir('P:/',function(err,files){
	if(err){
	console.log(err);
	return ;
	}
	for (var index in files){
	console.log(files[index]);
	}

});