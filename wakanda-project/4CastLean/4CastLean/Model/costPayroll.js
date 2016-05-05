model.costPayroll = new DataClass("payrollCosts", "public");


model.costPayroll.id = new Attribute("storage","uuid", "key auto", {autogenerate:true});
model.costPayroll.costDate = new Attribute("storage", "date");
model.costPayroll.details = new Attribute("storage", "string");


model.costPayroll.costAmount_int = new Attribute("storage", 'long64');
model.costPayroll.employeeNumber = new Attribute("storage", "string");


model.costPayroll.accountingPeriod = new Attribute("relatedEntity", "period", 'period');
model.costPayroll.costCode = new Attribute('relatedEntity', 'costCode', 'costCode');
model.costPayroll.costProject = new Attribute('relatedEntity', 'project', 'project');


model.costPayroll.costAmount = new Attribute("calculated", 'string');
