const express=require('express')
const app=express();




app.use(express.json())


let books = [
    { id: 1, title: "Harry Potter", price: 20 },
    { id: 2, title: "The Hobbit", price: 15 }
];
app.get('/books',(req,res)=>{
    res.json(books);
})
app.post('/books',(req,res)=>{
    const nb={
        id:books.length+1
        ,title:req.body.title,
        price:parseInt(req.body.price)
    };
    books.push(nb);
    res.json(books);

});
app.put('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const book=books.find((book)=>book.id===id);
    if (book){
        book.price=req.body.price;
        res.json(books);

    }else{
        res.json("Not Found ");

    }
});
app.delete('/books/:id',(req,res)=>
{
    const id =parseInt(req.params.id);
    books=books.filter((book)=>book.id!==id);
    res.json(books);

});


app.listen(3000,()=>{
console.log(`📚 Bookstore API running on http://localhost:3000`)});