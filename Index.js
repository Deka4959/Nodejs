
const express = require('express');


const app = express()

app.use(express.json());


let books=[
    {id:1 , title: 'let them theorie', Author: 'mel Robin'},
     {id:2 , title: 'Automic Habiits', Author: 'jamesclear'},
];


app.get('/books',(req,res)=>{


    res.send(books)


})

app.post('/newbook', (req,res)=>{
    const newBook = req.body;
    books.push(newBook)
    res.send(newBook)

})

app.put('books/:id',(req,res)=>{

    const bookId = Number(req.params.id);
    const updatedBook = req.body;

    const book = books.find(b => b.id === bookId);
    if(!book){
        return res.status(404).send("books not found")
    }

     book.title = updatedBook.title;
    book.Author = updatedBook.Author;

    res.send(book);


})

app.listen(300,()=>{
    console.log("sytem runing on port 300")


})