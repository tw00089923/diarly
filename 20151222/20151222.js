var fs =require ('fs');
 var as =['howard','tw0089923']
fs.writeFile('./writefile.txt',as,function(err){
	
	if (err){
		console.log('err');
	}
	else { 
		console.log('Worte');
	}

});