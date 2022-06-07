console.log("Lets start!!")

const express= require ("express")
const app = express()
const PORT= 3000

const contactRouter =require ("./routes/contactRouter")
const mongoConfig =require ("./config/mongoConfig")
// const mongoose= require("mongoose")
app.use(express.json())
app.use("/contacts", contactRouter)
require("dotenv").config() 


app.get("/", (req,res)=>{
    res.status(200).json({message: "WassssAPPP"})
})

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
    mongoConfig()
})