var multiplier = 1000000;

model.costCode.amt_approvedVariations_num.onGet = function(){return this.amt_approvedVariations_int/multiplier;}

model.costCode.amt_reallocations_num.onGet = function(){return this.amt_reallocations_int/multiplier;}

model.costCode.amt_budgetRevised_num.onGet = function(){return this.amt_budgetRevised_num_int/multiplier;}

model.costCode.amt_scntOriginal_num.onGet = function(){return  this.amt_scntOriginal_int/multiplier;}

model.costCode.amt_scntVariations_num.onGet = function(){return this.amt_scntVariations_int/multiplier;}

model.costCode.amt_totalCommitted_num.onGet = function(){return this.amt_totalCommitted_int/multiplier;}

model.costCode.amt_costToComplete_num.onGet = function(){return this.amt_costToComplete_int/multiplier;}
//	
//model.costCode.amt_variance_num.onGet = function (){return this.variance_int/multiplier;}
