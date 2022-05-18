const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
// const { response } = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
app.use(cors());
app.use(express.json());

// Home route
app.get("/",(req,res)=>{
  console.log("success");
})

// Database connection
const db = mysql.createConnection({
  user:'root',
  host:'127.0.0.1',
  password:'password',
  database: 'BDMS',
});

db.connect((err)=>{
  if(err){
    console.log(err.message);
    return err
  }
  console.log('SQL connected...');
})


// Route to check the availability of blood
app.post("/bloodData",(req,res)=>{
  const State = req.body.State;
  const bloodGroup = req.body.bloodGroup;

  db.query("SELECT * FROM bloodStock",(err,result)=>{
    if(err) console.log(err);
    else {
      console.log(result);
      res.send(result)}; 
  });
})


// Route to add a new user to the Database
app.post("/addDonor",(req,res)=>{

  const name = req.body.name;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const mnum = req.body.mnum;
  const adress = req.body.adress;
  const date = req.body.date;
  const state = req.body.state;
  const disease = req.body.disease;
  const bloodGroup = req.body.bloodGroup;

  db.query(
    "INSERT INTO donor (donorname,gender,dob,mnum,adress,date,state,bloodGroup,disease)  VALUES(?,?,?,?,?,?,?,?,?)",
    [name,gender,dob,mnum,adress,date,state,disease,bloodGroup],
    (err)=>{
      if (err){
        console.log(err.message);
      }}
  )
  res.send("details received");
})


app.listen(3001,()=>{
  console.log('My server is running at 3001');  
})