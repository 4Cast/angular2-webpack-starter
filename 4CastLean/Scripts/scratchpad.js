
function doSomething(){
	
	var scnt = ds.scnt.query('id == :1', '117F5C32E2AE40B9AC8D78D845E48C43') ;
	return scnt.subcontractProject;	
}

doSomething();