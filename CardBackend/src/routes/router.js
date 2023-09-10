

const router = require("express").Router()


router.get( "/" , (req , res)=>{
    res.sendFile("/index.html")
})



router.get( "/a" , (req , res)=>{
    res.send("EndPoint is a")
})


router.post( "/post" , (req , res)=>{

    const data = req.body

    console.log(data)
    console.log(data.name)
    // console.log(req)


    res.status(200).send({...data} )
} )



module.exports = router
