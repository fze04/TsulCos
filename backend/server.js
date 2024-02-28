const express = require('express') //creation server  import from module
const app = express() // constructor 
const port =  3000



app.listen(port,()=>{
    console.log("http://localhost:"+port)

}) 