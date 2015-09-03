

//
// Approved Variations ////////////////////////////////////
//


model.costCode.amt_approvedVariations_num.onGet = function(){
	
	return this.amt_approvedVariations_int/multiplier;
	
	
}

//
// Reallocations ////////////////////////////////////
//



model.costCode.amt_reallocations_num.onGet = function(){
	
	return this.amt_reallocations_int/multiplier;

}

//
// Revised Budget ////////////////////////////////////
//


model.costCode.amt_budgetRevised_num.onGet = function(){
	
	return this.amt_budgetRevised_num;
	
}


//
// Subctonctract Original ////////////////////////////////////
//


model.costCode.amt_scntOriginal_num.onGet = function(){
	
	return  this.amt_scntOriginal_int/multiplier;
	
	
}

//
// Subctonctract Variations ////////////////////////////////////
//

model.costCode.amt_scntVariations_num.onGet = function(){

	return this.amt_scntVariations_int/multiplier;
	
	
}

//
// Total Committed ////////////////////////////////////
//

model.costCode.amt_totalCommitted_num.onGet = function(){
	
	return this.amt_totalCommitted_int/multiplier;
	
}


//
// costToComnplete ////////////////////////////////////
//

model.costCode.amt_costToComplete_num.onGet = function(){
	
return this.amt_costToComplete_int/multiplier;
	
}


//
// Variance ////////////////////////////////////
//


model.costCode.amt_variance_num.onGet = function (){
	
	var variance_int = this.amt_budgetRevised_int - this.amt_totalCommitted_int;
	return variance_int/multiplier;
	
	
}

//
// Supplier Costs ////////////////////////////////////
//

model.costCode.amt_supplierCosts_num.onGet = function(){
	
	var thePayments = this.supplierPayments;
	var approvedPayments = thePayments.query("isApproved == true");
	return approvedPayments.sum("thisApprovedAmount_int")/multiplier;

	
}



model.costCode.amt_approvedVariations_num.onGet = function(){
	
	return this.amt_approvedVariations_int/multiplier;
	
}

//
// Reallocations ////////////////////////////////////
//



model.costCode.amt_reallocations_num.onGet = function(){
	
return this.amt_reallocations_int/multiplier;

}

//
// Revised Budget ////////////////////////////////////
//


model.costCode.amt_budgetRevised_num.onGet = function(){
	
	return this.amt_budgetRevised_int/multiplier;
	
	
}


//
// Subctonctract Original ////////////////////////////////////
//


model.costCode.amt_scntOriginal_num.onGet = function(){
	
	return this.amt_scntOriginal_int/multiplier;
	
	
}

//
// Subctonctract Variations ////////////////////////////////////
//

model.costCode.amt_scntVariations_num.onGet = function(){

	return this.amt_scntVariations_int/multiplier;
	
}

//
// Total Committed ////////////////////////////////////
//

model.costCode.amt_totalCommitted_num.onGet = function(){
	
	return this.amt_totalCommitted_int/multiplier;
	
}


//
// costToComnplete ////////////////////////////////////
//

model.costCode.amt_costToComplete_num.onGet = function(){
	
	return this.amt_costToComplete_int/multiplier;
	
	
}


//
// Variance ////////////////////////////////////
//


model.costCode.amt_variance_num.onGet = function (){
	
	var variance_int = this.amt_budgetRevised_int - this.amt_totalCommitted_int;
	return variance_int/multiplier;
	
	
}

//
// Supplier Costs ////////////////////////////////////
//

model.costCode.amt_supplierCosts_num.onGet = function(){
	
	var thePayments = this.supplierPayments;
	var approvedPayments = thePayments.query("isApproved == true");
	return approvedPayments.sum("thisApprovedAmount_int")/multiplier;
	
	
}