const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const newauthorRouter=express.Router();

//redirecting the broowder to use booksRouter , whenever we get /books/... request
function router(nav){
    
newauthorRouter.get('/',function(req,res){
    res.render("newauthor",
    {
        nav,
         title:"Library"
    }); //render to pass data as object
});

newauthorRouter.post('/', function (req, res) { 
    // res.send("inside post");
    var data = req.body; 
    var authors=require('../data/authors.js');
  
   var newauthor={
    "name":data.name,
    "description":data.description,
    "image": data.image
    
  }
  console.log(data)
  authors.push(newauthor);
//   module.exports=authors;
 console.warn('added',{authors});
 res.render("authors",{nav,title:"Library",authors});
    
      

  });

return newauthorRouter;
}
module.exports=router;