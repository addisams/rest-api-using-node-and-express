const express=require("express");
const bodyParser=require("body-parser");//allow to take in post request bodies

const userRoute=require("./route/users.js");


const app=express();
const PORT=5000;

app.use(bodyParser.json());

app.use('/user', userRoute);

/* creating routes GET and POst and other */
app.get('/', (req,res)=>{
    res.send(`you are good to go`);
})

app.listen(PORT,()=>{
    console.log(`your server is running at: http://localhost:${PORT}`);
});
