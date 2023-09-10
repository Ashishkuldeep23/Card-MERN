
const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config()
// console.log(process.env.PORT)

const router = require("./src/routes/router")

const app = express()

app.use( express.json() )
app.use( express.urlencoded({extended : true}) )

app.use( express.static( process.cwd() + "\\public" ) )

// console.log(process.cwd() + "")


app.use( "/", router ) 



const port =  process.env.PORT

app.listen( 3000 , ()=>{
    console.log(`Express app runing at ${port || 3000} port`)
} )


