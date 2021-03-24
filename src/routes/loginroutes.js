
const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const loginRouter=express.Router();


function router(nav1){

loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav1,
         title:"Library"
    }); //render to pass data as object
});
loginRouter.post('/',function(req,res){
//    res.send("login successful");
   var data = req.body; 
   var user = require('../data/user.js')
    var flag=false;
    for(i=0;i<user.length;i++)
    {
        console.log(data.email);
        console.log("user:", user[i].email);

        if (user[i].email==data.email && user[i].password==data.password ){
            flag=true;
            
        }
    }
    if (flag==true)
    {
    //    res.send("success");
        res.redirect('/home');
    }
    else{
        // res.send("Not a registered user");
        res.redirect('/signup');
    }
    
});



return loginRouter;
}
module.exports=router;