const express = require('express'); 
const app = express();
const mysql = require('mysql');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const { response } = require('express');
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  console.log("success");
})



// Database connection
const db = mysql.createConnection({
  user: 'root',
  host: '127.0.0.1',
  password: 'password',
  database: 'BDMS',
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
    return err
  }
})



// Login Route
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM `employee` WHERE uname = ? AND pwd = ?",
    [username, password],
    (err, result) => {
      if (err) res.send({err:err.message}); 
      if (result.length>0) {
        res.send(result);
      } else {
        res.send("Wrong Username/Password");
      }
    }
  )
})

// Route to check the availability of blood
app.post("/bloodData", (req, res) => {
  const bloodGroup = req.body.bloodGroup;

  db.query("SELECT * FROM bloodStock where blood_group = ? ",
  [bloodGroup]
  , (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(result)
    };
  });
})

// Api to get the blood data availavle
app.get("/getBloodStocks", (req, res) => {
  db.query("SELECT * FROM blood", 
  (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(result)
    };
  });
})

// Api to get donor data
app.get("/getDonor", (req, res) => {
  db.query("SELECT * FROM donor", 
  (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(result)
    };
  });
})

// API to get employees information
app.get("/getEmployee", (req, res) => {
  db.query("SELECT * FROM employee", 
  (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(result)
    };
  });
})


// Route to add a new donor to the Database
app.post("/addDonor", (req, res) => {

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
    "INSERT INTO donor (donorname,gender,dob,mnum,adress,date,state,disease,bloodGroup)  VALUES(?,?,?,?,?,?,?,?,?)",
    [name, gender, dob, mnum, adress, date, state, disease, bloodGroup],
    (err) => {
      if (err) {
        console.log(err.message);
      }
    }
  )
  // res.send("details received");
})

// API to add new blood bag details
app.post("/bloodBag", (req, res) => {

  const id = req.body.id;
  const bgroup = req.body.bgroup;
  const hemo = req.body.hemo;
  const rbc = req.body.rbc;
  const wbc = req.body.wbc;
  const plasma = req.body.plasma;
  const quantity = req.body.quantity;

  db.query(
    "INSERT INTO blood (blood_id,blood_group,hemoglobin,rbc,wbc,plasma,quantity)  VALUES(?,?,?,?,?,?,?)",
    [id,bgroup,hemo,rbc,wbc,plasma,quantity],
    (err) => {
      if (err) {
        console.log(err.message);
      }
    }
  )
})


// app.post("/admin")
app.listen(3001, () => {
})