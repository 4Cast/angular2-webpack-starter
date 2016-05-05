
function doImport () {
	
	var multiplier = 100000;
	var importJson = require('importJson');
	var moment = require('moment');

 	
 	var jsonString = importJson.importJson("adjd.txt","Cockram Import Files");	
 	
 	ds.budgetReallocationDetail.remove();
 	ds.budgetVariationDetail.remove();
 
 	 var objCollection = JSON.parse(jsonString);
   	
		    objCollection.forEach( function(theObject) { 
		     
		    	var theCostCode = ds.costCode.find('id == :1', theObject.uid_ccod);
		    	var reallCollection = ds.budgetReallocation.query('id == :1', theObject.uid_adjust);
		    	var varCollection = ds.budgetVariation.query('id == :1', theObject.uid_adjust);
		    	
		   		//var adjustType = theObject.AdjustType;
		   		//var adjustmentDate = moment.utc(theObject.Date_Created, 'D/M/YY');
		   		
		   	switch(true){
		   			
		   			case (reallCollection.length>0):
		   				// reallocation
		   				
		   				var theReallocation = ds.budgetReallocation.find('id == :1', theObject.uid_adjust)
		   				
		   				
		   				theReallocationDetail = new ds.budgetReallocationDetail({
		   					
		   					//id						:theObject.uid_adjustment,
		   					detailAmount_int		:theObject.CostCodeAmount * multiplier,
		   					lineNumber				:theObject.adjdNumber,
		   					parentReallocation		:theReallocation,
		   					detailCostCode			:theCostCode
		   					
		   					
		   				});
		   				
		   				theReallocationDetail.save();
		   				break;
		   				
		   			case (varCollection.length>0):
		   				// 
		   				
		   				theVariation = ds.budgetVariationDetail.find('id == :1', theObject.uid_adjust);
		   				
		   				theVariationDetail = new ds.budgetVariationDetail({
		   					//id						:theObject.uid_adjustment,
		   					parentVariation				:theVariation,
		   					detailAmount_int			:theObject.CostCodeAmount * multiplier,
		   					lineNumber					:theObject.adjdNumber,
		   					detailCostCode				:theCostCode
		   					
		   					
		   				});
		   				
		   				theVariationDetail.save();
		   				break;		   					
		   		}		   		
		   		
		   	})
		}


doImport();



		     