function sendMail(request,response)
{
        // Get parts from the request object
   
    return "OK";
}

function processImport(request, response)
{
	//debugger;
	
	var id = request.parts[0].asText;
	
	var costImport = ds.costImportHeader.find("id = :1", id);
	
	var xmlUtilities = require ('./Modules/xmlUtilities.js');
	
	xmlString = costImport.sourceData.toString();
	
	var pos=0;
	
	var begin = xmlString.indexOf("<Line>")
	var end = xmlString.indexOf("</Line>")
	var xmlString = xmlString.slice(begin+6,xmlString.length);
	
	
	var newString = xmlString.slice(begin+6,end);
	var last = newString.slice(newString.length-10, newString.length);
	var lines = xmlString.split("<Line>");
	
	var json = {};
	var lineObjArr = [];
	var line = "";
	var lineObj = {};
	var name = ""
	
	for(i = 0; i < lines.length; i++){
		
		line = lines[i];
		
		
		
		end = line.indexOf("<Accounts>")
		line = line.slice(1,end); //we'll take the first "<" off here
		begin = 1;
		
		var lineArray = line.split("><");
		
		for(j = 0; j < lineArray.length; j++){
			
			attr = lineArray[j];
			end = attr.indexOf(">");
			name = attr.slice(0,end);
			begin = attr.indexOf("<")
			value = attr.slice(end+1,begin);
			
			lineObj[name]=value;
		}
		
		lineObjArr.push(lineObj);
		
	}
	
	json['lines']=lineObjArr;
	
	costImport.sourceObj = json;
	costImport.save();
	
	returnObj = {};
	returnObj.Status = "Data formatting complete.";
	returnObj.ID = id;
	
	returnStr = JSON.stringify(returnObj);
	
	return returnStr;
	
	
}

function processData(request, response){
	
	var id = request.parts[0].asText;
	
	var costImport = ds.costImportHeader.find("id = :1", id);
	
	jsonData = costImport.sourceObj;
	
	var sourceArr = jsonData.lines;
	//var resultData = {};
	//var resultDataArr = [];
	
	for (i = 0; i < sourceArr.length; i++){
		
		theDetail = new ds.costImportDetail({
			
			accountCode				:sourceLine.AccountCode,
			accountPeriond			:sourceLine.AccountingPeriod,
			projectNumber			:sourceLine.AnalysisCode4,
			costCodeNumber			:sourceLine.AnalysisCode5,
			employeeNumber			:sourceLine.AnalysisCode6,
			sctrCode				:sourceLine.AnalysisCode7,
			baseAmount				:sourceLine.BaseAmount *-1,
			debitCredit				:sourceLine.DebitCredit,
			details					:sourceLine.Description,
			transactionReference	:sourceLine.TransactionReference,
			journalNumber			:sourceLine.JournalNumber,
			journalLineNumber		:sourceLine.JournalLineNumber,
			costImportHeader		:this
			}
		);		
		
		theDetail.save();
		
	}
	
	return "Data processed.";
}