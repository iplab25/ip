const mysql = require("mysql")
const express = require("express")

const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"srec",
})

const app = express();

connection.connect((err)=>{
    if(err){
        console.log("error")
    }else{
        console.log("connected")
    }
})


app.get("/", async (req, res) => {
    try {
    connection.query("SELECT * FROM results limit 2",(err,results)=>{
        if(err){
            throw err
        }
        console.log(JSON.stringify(results))
        res.send(JSON.stringify(results[0]));
    })
        
    } catch(err)
    {
        res.status(500).send(err);
    }
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`service is running on:: [${port}]`);
});


