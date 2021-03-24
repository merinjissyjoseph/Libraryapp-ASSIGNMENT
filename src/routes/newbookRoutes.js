const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const newbookRouter=express.Router();

//redirecting the broowder to use booksRouter , whenever we get /books/... request
function router(nav){
    var books = [
        {
            title:'Tom and jerry',
            author:'Joseph Barbara',
            genre: 'Cartoon',
            img:"tom.jpg"
        },
        {
            title:'Harry Porter',
            author:'J k Rowling',
            genre: 'Fantasy',
            img:"harry.jpg"  
        },
        {
            title:'Pathumede aadu',
            author:'Vaikom muhammed Basheer',
            genre: 'Drama',
            img:"basheer.jpg"  
        }  
        ]
newbookRouter.get('/',function(req,res){
    res.render("addnewbook",
    {
        nav,
         title:"Library"
    }); //render to pass data as object
});

newbookRouter.post('/', function (req, res) { 
    // res.send("inside post");
    var data = req.body; 
    var books=require('../data/books.js')
  
   var newbook={
    "title":data.title,
    "author":data.author,
    "genre": data.genre,
    "image":data.image
  }
  books.push(newbook);
  module.exports=books;
 console.warn('added',{books});
 res.render("books",{nav,title:"Library",books});
    
      
//  res.redirect('/books');
  });

return newbookRouter;
}
module.exports=router;