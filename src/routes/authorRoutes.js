const express = require('express');
const authorsRouter=express.Router();

//redirecting the broowder to use booksRouter , whenever we get /books/... request
function router(nav){
    var authors=require('../data/authors.js');
authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav,
         title:"Library",authors
    }); //render to pass data as object
});

authorsRouter.get('/:id', function(req,res){ //id is any variable name
    const id=req.params.id
    res.render("author", {nav,
    title:"Library",
    author:authors[id]
});
});
return authorsRouter;
}
module.exports=router;