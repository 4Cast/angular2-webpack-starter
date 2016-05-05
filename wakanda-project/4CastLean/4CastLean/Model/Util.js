model.Util = new DataClass("utilities", "public");


model.Util.id = new Attribute("storage", "uuid", "key auto", {autogenerate:true});
model.Util.testValue = new Attribute("storage", "long");
model.Util.dateValue = new Attribute("storage", "date");

model.Util.methods.doTest = function(){
	
}

model.Util.methods.startTest = function (){
	
	ds.Util.all().remove();
	startDate = new Date();
	setInterval(ds.Util.doSendRequests, 1000);
	wait(60000);

};


model.Util.methods.startTest.scope = 'public';

var theDate;
var count = 0;
var startDate;
var theDuration = 50000;


model.Util.methods.doSendRequests = function doSendRequests()
{ 
	count++;
	console.log('Count: ' + count);
	theDate = new Date();
	var timeToGo = theDate - startDate;
	console.log("Time: "+ timeToGo);
	
	if((theDate - startDate) < theDuration) {
		console.log('creating');
		var z = new ds.Util({
			testValue :count,
			dateValue :theDate
		});
		z.save();
		console.log(''+ds.Util.length)
	}
	else{
		console.log('closing');
		close();
	}
}


	model.Util.methods.getTaskManagerStatus = function() {
		var tmRef = 0;
		var tmInfo = {taskCount:0, errorCode:0};
		var taskMgr = new SharedWorker('workers/TaskMgr.js', 'TaskMgr');
		var thePort = taskMgr.port; //MessagePort
		thePort.onmessage = function(event){
			var message = event.data;
			
			switch (message.type)
			{
				case 'connected':
					tmRef = message.ref;
					thePort.postMessage({type: 'report', ref: tmRef});
					break;
					
				case 'update':
					tmInfo.taskCount = message.count;
					thePort.postMessage({type: 'disconnect', ref: tmRef});

					exitWait();
					break;
					
				case 'error':
					tmInfo.errorCode = message.errorCode;
					
					exitWait();
					break;
			}
		};
		wait();
		return tmInfo;
	}
	
	model.Util.methods.getTaskManagerStatus.scope = 'public';
