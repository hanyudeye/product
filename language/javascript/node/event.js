// 事件侦听
var events= require("events");

var emitter= new events.EventEmitter();

emitter.on("someEvent",function(arg1,arg2){
	console.log("listener1",arg1,arg2);
});

emitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});


emitter.emit("someEvent","aming",1980);

emitter.emit('error');