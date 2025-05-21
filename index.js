const express=require('express')
const app=express()
const port=require("./config/db.js")

const router=require("./route/router.js")



app.set("view engine","ejs")
app.use(express.static("public"))
app.use(router)

app.listen(port,()=>{
    console.log("the port is running is 4000")
})