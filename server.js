
express=require("express");
app=express();
fs=require("fs");
mymodule=require("./module");
bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));


app.get("/",function(req,resp){
resp.sendFile("addition.html",{root:__dirname});
console.log("file sent to response");

});

app.post("/calculate",function(req,resp){
	result=mymodule.addition(req.body.num1,req.body.num2);
	resp.send("addition"+result);
	
	console.log("o/p is send to response");
	});
	
	app.listen(3000,function(){
		console.log("server started on port 3000");
	});
	
