const express=require("express");


const { v4: uuidv4 } = require('uuid');

const router=express.Router();


let users=[]

router.get('/',(req,res)=>{

    console.log(users);
    
    res.send(users);
})
/* install package uuid for unique id */

router.post("/", (req,res)=>{
    /* console.log("your data posted successfully"); */
    /* console.log(req.body) */
    const userData=req.body;

    const userId=uuidv4();
    
    const userWithId={...userData,id:userId};
    users.push(userWithId);
    res.send(`user with name ${userData.firstName} added to the database`);
})

/* /user/id => we can retrive the id for  req.params */
router.get("/:Id",(req,res)=>{
    /* console.log(req.params); */
    const id=req.params;
    
    const foundUser=users.find((user)=> user.id===id);
    console.log(foundUser)
    res.send(foundUser);
})

module.exports=router;