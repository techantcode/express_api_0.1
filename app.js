const express = require('express');

const app = express();
const PORT = 3000;
app.get('/',(req,res)=>{
    res.send({message:"Hello world"});
});

app.listen(PORT,()=>{
    console.log(`Running on ${PORT}`);
})
