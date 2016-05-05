var multiplier = 100000;


//model.costCode.amt_scntOriginal_int.onGet = function(){return 0};
//model.costCode.amt_scntVariations_int.onGet = function(){return 0};
//model.costCode.amt_approvedVariations.onGet_int = function(){return 0};
//model.costCode.amt_reallocations_int.onGet = function(){return 0};
//model.costCode.amt_budgetRevised_int.onGet = function(){return 0};

//model.costCode.amt_forecasts_int.onGet = function(){return 0};
//model.costCode.amt_variance_int.onGet = function(){return 0};

model.costCode.amt_budgetOriginal_num.onSet = function(value){
	
	this.amt_budgetOriginal_int = value * multiplier;
}

model.costCode.amt_budgetOriginal_num.onGet = function(){
	return this.amt_budgetOriginal_int/multiplier;
}


model.costCode.amt_budgetRevised_num.onGet = function(){
	return 200; //this.costReallocations.detailAmount_int.sum();
	
}

//
// Supplier Costs ////////////////////////////////////
//

model.costCode.amt_supplierCosts_num.onGet = function(){
	
	var thePayments = this.supplierPayments;
	var approvedPayments = thePayments.query("isApproved == true");
	return approvedPayments.sum("thisApprovedAmount_int")/multiplier;

	
}


//
// Supplier Costs ////////////////////////////////////
//

model.costCode.amt_supplierCosts_num.onGet = function(){
	
	var thePayments = this.supplierPayments;
//	var approvedPayments = thePayments.query("isApproved == true");
//	return approvedPayments.sum("thisApprovedAmount_int")/multiplier;
	return 0;
	
	
}