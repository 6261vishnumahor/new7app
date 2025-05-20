const express=require('express')
const app=express()
const port=require("./config/db.js")

const router=require("./route/router.js")



app.set("view engine","ejs")
app.use(express.static("public"))
app.use(router)
// app.get("/",(req,res)=>{
//     res.send("this is a home page")
// })
// app.get("/about",(req,res)=>{
//     res.send("this is about page")
// })
app.listen(port,()=>{
    console.log("the port is running is 4000")
})