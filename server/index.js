const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const { response } = require('express');
// const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user:'root',
  host:'localhost',
  password:'',
  database:'BDSM'
});

// db.connect((err)=>{
//   if(err){
//     // throw err;
//     // console.log(err);
//   }
//   console.log('SQL connected...');
// })


app.post("/addDonor",(req,res)=>{
  const name = req.body.name;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const mnum = req.body.mnum;
  const adress = req.body.name;
  const date = req.body.date;
  const state = req.body.state;
  const bloodBankName = req.body.bloodBankName;
  const bloodGroup = req.body.bloodGroup;
  console.log(res);
})

app.get("/bloodData",()=>{
  console.log("success");
})

app.listen(3001,()=>{
  console.log('My server is running at 3001');  
})