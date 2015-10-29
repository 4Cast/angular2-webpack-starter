
var importJson =  function(fileName){
	
	var companyFolder = "Cockram Import Files"
	var path = ds.getModelFolder().path + "Import/"+companyFolder +"/"+fileName;
	var jsonString = loadText(path);
	return jsonString;
	
}

exports.importJson = importJson;