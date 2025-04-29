const express = require("express")
const cors= require("cors")
const {port,mongoDBURL} = require("./config");
 const mongoose= require("mongoose")

const route = require("./route/Routes")


const app = express();

// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:["GET","POST","PUT","DELETE"],
//     allowedHeaders:["Content-Type"]

// }))
app.use(cors())
app.use(express.json())
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });

 app.use("/books",route)
 //route for save a new book


mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("app connected to database")
    app.listen(port,()=>{
        console.log("server started on port nummber",port)
    })

}).catch(()=>{
    console.log("data base connection error",error)
})