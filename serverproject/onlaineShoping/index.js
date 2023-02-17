const express = require('express');
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({"message":"Server is Successfully Running"})
})
app.listen(2610,(err)=>{
    if(!err)
    {
        console.log("Server is Successfully Running");
    }
    else
    {
        console.log(err);
    }
});