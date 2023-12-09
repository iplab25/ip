let express = require("express")
let app = express()


app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Event-Server root")
})


app.get("/register",(req,res)=>{
    res.send(
        "<p>First Name: "+req.query['firstname']+"</p>"+
        "<p>Last Name: "+req.query['lastname']+"</p>"+
        "<p>sex: "+req.query['sex']+"</p>"+
        "<p>About You: "+req.query['aboutyou']+"</p>"
    )
})

let server = app.listen(8000,()=>{
    let host = server.address().address
    let port = server.address().port
    console.log(`Event-Server app listening at http://localhost:${port}`)
})