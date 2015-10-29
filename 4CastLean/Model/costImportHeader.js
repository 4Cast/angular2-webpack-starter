model.costImportHeader = new DataClass("costImportHeaders", "public");

model.costImportHeader.id = new Attribute("storage","uuid", "key", {autogenerate:true});
model.costImportHeader.companyCode = new Attribute("storage", "string");
model.costImportHeader.batchDate = new Attribute("storage", "date", {simpleDate:false});
model.costImportHeader.batchTime = new Attribute("storage", "date");

model.costImportHeader.numLinesTotal = new Attribute("storage", "long");
model.costImportHeader.numDeleted = new Attribute("storage", "long");
model.costImportHeader.numErrors = new Attribute("storage", "long");
model.costImportHeader.numLinesImported = new Attribute("storage", "long");
model.costImportHeader.numLinesReadyToImport = new Attribute("storage", "long");
model.costImportHeader.numWarnings = new Attribute("storage", "long");
model.costImportHeader.numLinesCombined = new Attribute("storage", "long");


model.costImportHeader.isDocumentSelected = new Attribute("storage", "bool");
model.costImportHeader.isImportComplete = new Attribute("storage", "bool");
model.costImportHeader.isMonthly = new Attribute("storage", "bool");
model.costImportHeader.isPayroll = new Attribute("storage", "bool");
model.costImportHeader.isProcessingComplete = new Attribute("storage", "bool");
model.costImportHeader.isSupplierInvoices = new Attribute("storage", "bool");
model.costImportHeader.isWeekly = new Attribute("storage", "bool");
model.costImportHeader.isCombinedComplete = new Attribute("storage", "bool");

model.costImportHeader.periodNumber = new Attribute("storage", "long");

model.costImportHeader.sourceData = new Attribute("storage", "blob");
model.costImportHeader.sourceFileName = new Attribute("storage", "string");
model.costImportHeader.description = new Attribute("storage", "string");


model.costImportHeader.valueActualCosts = new Attribute("calculated", "number");
model.costImportHeader.valueAllLines = new Attribute("calculated", "number");
model.costImportHeader.valueAllLinesNoErrors = new Attribute("calculated", "number");
model.costImportHeader.valueCombinedLines = new Attribute("calculated", "number");
model.costImportHeader.valueImportedLines = new Attribute("calculated", "number");






model.costImportHeader.methods.importJSON = function(jsonString){

	ds.costImportHeader.all().remove();


     var objCollection = JSON.parse(jsonString);

		    objCollection.forEach( function(theObject) {

		    	//var theProject = ds.project.find('id = :1', theObject.uid_project);
		   		//var theUser = ds.user.find('uid_user = :1', theObject.uid_user);

				    var theNewRecord = new ds.costImportHeader({

				     	id				            : theObject.uid_aiba,
				     	companyCode			      : theObject.companyCode,
				     	batchDate			        : theObject.importDate,
				     	isDocumentSelected		: theObject.isDocumentSelected,
              isImportComplete      : theObject.isImportComplete,
              isMonthly             : theObject.isMonthly,
              isPayroll             : theObject.isPayroll,
              isProcessingComplete  : theObject.isProcessingComplete,
              isSupplierInvoices    : theObject.isSupplierInvoices,
              isWeekly              : theObject.isWeekly,
              numLinesTotal         : theObject.totalLines,
              numDeleted            : theObject.numDeleted,
              numErrors             : theObject.numErrors,
              numLinesImported      : theObject.numImported,
              isCombinedComplete    : theObject.payrollLinesCombined,
              periodNumber          : theObject.periodNumber,
              sourceFileName        : theObject.sourceFileName,
              description           : theObject.Title,

				     });

		    theNewRecord.save();

		  });

}
