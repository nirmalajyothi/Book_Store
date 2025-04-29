const express= require("express")
const route= new express.Router()
const Book = require("../models/bookModel")



route.post ("/book",async(req,res)=>{
    try{
         console.log("incoming data",req.body)
        //if any one the condition is missing then retun true else false
        if( !req.body.title||
            !req.body.author||
            !req.body.publishYear){
                return res.status(400).send({message:"send all fields: title,author,publishYear"})

            }
            const newBook={
                title: req.body.title,
                author: req.body.author,
                 publishYear:req.body.publishYear,
            }
            const book = await Book.create(newBook)
            res.status(201).send(book)
       
    }catch(error){
      console.log("dataBase connection error",error)
        res.status(500).send({message:error.message})
    }

})
//route to get all books from database
route.get("/book",async(req,res)=>{
    try{
       

       const books = await Book.find({});
       res.status(200).json({
        count:books.length,
        data:books
       })
    }catch(error){
        console.log("error in getting the data",error)
        res.status(500).send({message:error.message})

    }

})
//Route to get one book by id
route.get("/book/:id",async(req,res)=>{
    try{
        const {id}=req.params

       const book= await Book.findById(id);
       if(!book){
        return res.status(404).json({message:"book not found"})
       }
       res.status(200).json(book)
        
    }catch(error){
        console.log("error in getting the data",error)
        res.status(500).send({message:error.message})

    }

})
//Route to update a book
route.put("/book/:id",async(req,res)=>{

    try{
        if(!req.body.title||
            !req.body.author||
            !req.body.publishYear){
                return res.status(400).send({
                    message:"please  provide all require  fields tile,author,publishYear"
                })
            }

            const {id}= req.params;

            const result= await Book.findByIdAndUpdate(id,req.body)
            if(!result){
              return res.status(404).send({message:"book not found"})
            }
           return  res.status(200).send({message:"Book updated successfully"})

    }catch(error){

        console.log(error.message)
        res.status(500).send({message: error.message})
    }

})

//route for delate a book
route.delete("/book/:id",async(req,res)=>{
    try{
       const {id} = req.params;
       const result =await Book.findByIdAndDelete(id)
       if(!result){
        return res.status(404).send({message:"book not deleted"})
      }
     return  res.status(200).send({message:"Book deleted successfully"})

    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
    

})
module.exports= route