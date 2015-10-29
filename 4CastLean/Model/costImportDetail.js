model.costImportDetail = new DataClass("costImportDetails", "public");

model.costImportDetail.id = new Attribute("storage","uuid", "key", {autogenerate:true});

model.costImportDetail.accountCode = new Attribute("storage", "string");
model.costImportDetail.accountingPeriod = new Attribute("storage", "string");
model.costImportDetail.baseAmount = new Attribute("storage", "long");
model.costImportDetail.costCodeNumber = new Attribute("storage", "long");
model.costImportDetail.debitCredit = new Attribute("storage", "string");
model.costImportDetail.isDeleted = new Attribute("storage", "bool");
model.costImportDetail.details = new Attribute("storage", "string");
model.costImportDetail.differenceCheck = new Attribute("calculated", "long");
model.costImportDetail.employeeNumber = new Attribute("storage", "string");
model.costImportDetail.errorNumber = new Attribute("storage", "string");
model.costImportDetail.errorText = new Attribute("storage", "string");
model.costImportDetail. = new Attribute("storage", "string");
model.costImportDetail.gstCode = new Attribute("storage", "string");
model.costImportDetail.importResult = new Attribute("storage", "string");
model.costImportDetail.isChild = new Attribute("storage", "bool");
model.costImportDetail.isParent = new Attribute("storage", "bool");
model.costImportDetail.isDeleted = new Attribute("storage", "bool");
model.costImportDetail.isError = new Attribute("storage", "bool");
model.costImportDetail.isImported = new Attribute("storage", "bool");
model.costImportDetail.isReadyToImport = new Attribute("storage", "bool");
model.costImportDetail.journalLineNumber = new Attribute("storage", "string");
model.costImportDetail.journalNumber = new Attribute("storage", "string");
model.costImportDetail.projectNumber = new Attribute("storage", "string");
model.costImportDetail.remoteCostUid = new Attribute("storage", "string");

model.costImportDetail.sctrCode = new Attribute("storage", "string");
model.costImportDetail.sourceRecordId = new Attribute("storage", "string");
model.costImportDetail.status = new Attribute("storage", "string");
model.costImportDetail.statusNumber = new Attribute("storage", "long");
model.costImportDetail.transactionDate = new Attribute("storage", "bool");
