const express = require('express');
const booksRouter=express.Router();

//redirecting the broowder to use booksRouter , whenever we get /books/... request
function router(nav){
    var books=require('../data/books.js');
    

booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav,
         title:"Library",books
    }); //render to pass data as object
});

booksRouter.get('/:id', function(req,res){ //id is any variable name
    const id=req.params.id
    res.render("book", {nav,
    title:"Library",
    book:books[id]
});
});
return booksRouter;
}
module.exports=router;