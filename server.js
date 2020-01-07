

let appModule = require("./app")
let handlers = require("./requestHandlers")

const express = require('express') //module loader using require
const app = express();
app.use(express.static(__dirname));
app.listen(8000, appModule.appInit);


// app.use("/",function(req,res,next) {
//     console.log("Middleware 1"); //top most gets executed - order matters
//     next();
// });

// app.use("/",function(req,res,next) {
//     console.log("Middleware 2");
//     next();
// });
// app.use("/",function(req,res,next) {
//     console.log("Middleware 3");
//     res.send("Response from middleware 3")
// });