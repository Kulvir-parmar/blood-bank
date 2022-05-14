import { useState } from 'react'
import { Input } from 'reactstrap';
import './DonateBlood.css'

import Axios from 'axios'
// import { response } from 'express';

function Donateblood() {
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [mnum, setMnum] = useState();
  const [adress, setAdress] = useState();
  const [date, setDate] = useState();
  const [state, setState] = useState();
  const [bloodBankName, setBloodBankName] = useState();
  const [bloodGroup, setBloodGroup] = useState();

  const onSubmitClick = () => {
     Axios.post('http:localhost:3001/addDonor',{
       name: name,
       gender:gender,
       dob:dob,
       mnum:mnum,
       adress:adress,
       date : date,
       state:state,
       bloodBankName:bloodBankName,
       bloodGroup:bloodGroup
     }).then(()=>{
       console.log("sucess");
     });
}

  return (
    <div className='form'>
      <div className="modal-header">
        <h4 className="modal-title text-danger" id="myModalLabel" style={{ align: "center" }}>Donor Details</h4>
      </div>
      <div className="modal-body">
        <div className="row form-group">
          <div className="col-sm-12">
            <div className="well">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <label htmlFor="username" className="control-label">Name<font color="red">*</font></label>
                  <Input type="text" name="donorName" className="form-control"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}>
                    <div align="center">
                      <div id="enterename" style={{ display: "none" }}>
                        <h4 className="text-danger">Please enter your name</h4>
                      </div>
                    </div>
                  </Input>
                </div>
                <div className=" col-12 col-sm-4">
                  <label htmlFor="Gender" className="control-label">Gender<font color="red">*</font></label>
                  <select name="donorGender" className="form-control" onChange={(event) => {
                    setGender(event.target.value);
                  }}>
                    <option value="-1">Select Value</option>
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                    <option value="T">Transgender</option>
                  </select>
                  <div id="entergender" style={{ display: "none" }}>
                    <h4 className="text-danger">Please enter your gender</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <label htmlFor="Age" className="control-label">Date of Birth<font color="red">*</font></label>
                  <Input className="form-control" type="text" name="dob" placeholder="dd-mm-yyyy"
                    onChange={(event) => {
                      setDob(event.target.value);
                    }}>
                    <div id="enterdob" style={{ display: "none" }}>
                      <h4 className="text-danger">Please enter your dob</h4>
                    </div>
                  </Input>
                </div>
              </div>
              <div className="row">

                <div className="col-12 col-sm-4">
                  <label htmlFor="Mobile" className="control-label">Mobile Number<font color="red">*</font></label>
                  <Input type="text" name="donorMobile" maxLength="10" className="form-control"
                    onChange={(event) => {
                      setMnum(event.target.value);
                    }}>
                    <div id="entermobile" style={{ display: "none" }}>
                      <h4 className="text-danger">Mobile Number is required</h4>
                    </div>
                    <div id="dmobileNoTen" sstyle={{ display: "none" }}>
                      <h4 className="text-danger">Mobile Number should be 10 digit</h4>
                    </div>

                  </Input>
                </div>
                <div className="col-12 col-sm-4">
                  <label htmlFor="Address" className="control-label">Address</label>
                  <Input type="text" name="donorAddress" maxLength="150" className="form-control" id="txtBbLName"
                    onChange={(event) => {
                      setAdress(event.target.value);
                    }}>
                  </Input>
                </div>

                <div className=" col-12 col-sm-4">
                  <label htmlFor="password" className="control-label">Tentative Date</label>
                  <Input className="form-control hasDatepicker" type="text" name="tentdob" placeholder="dd-mm-yyyy"
                    onChange={(event) => {
                      setDate(event.target.value);
                    }}>
                  </Input>
                </div>
              </div>
              <div className="row">
                <div className=" col-12 col-sm-4">
                  <label htmlFor="State" className="control-label">State<font color="red">*</font></label>
                  <select name="donorState" tabIndex="1" className="form-control"
                    onChange={(event) => {
                      setState(event.target.value);
                    }}>
                    <option value="-1">Select State</option>
                    <option value="35">Andaman &amp; Nicobar Islands</option>
                    <option value="28">Andhra Pradesh</option>
                    <option value="12">Arunachal Pradesh</option>
                    <option value="18">Assam</option>
                    <option value="10">Bihar</option>
                    <option value="94">Chandigarh</option>
                    <option value="22">Chhattisgarh</option>
                    <option value="26">Dadra &amp; Nagar Haveli</option>
                    <option value="25">Daman &amp; Diu</option>
                    <option value="97">Delhi</option>
                    <option value="30">Goa</option>
                    <option value="24">Gujarat</option>
                    <option value="96">Haryana</option>
                    <option value="92">Himachal Pradesh</option>
                    <option value="91">Jammu and Kashmir</option>
                    <option value="20">Jharkhand</option>
                    <option value="29">Karnataka</option>
                    <option value="32">Kerala</option>
                    <option value="37">Ladakh</option>
                    <option value="31">Lakshadweep</option>
                    <option value="23">Madhya Pradesh</option>
                    <option value="27">Maharashtra</option>
                    <option value="14">Manipur</option>
                    <option value="17">Meghalaya</option>
                    <option value="15">Mizoram</option>
                    <option value="13">Nagaland</option>
                    <option value="21">Odisha</option>
                    <option value="34">Puducherry</option>
                    <option value="93">Punjab</option>
                    <option value="98">Rajasthan</option>
                    <option value="11">Sikkim</option>
                    <option value="33">Tamil Nadu</option>
                    <option value="36">Telangana</option>
                    <option value="16">Tripura</option>
                    <option value="95">Uttarakhand</option>
                    <option value="99">Uttar Pradesh</option>
                    <option value="19">West Bengal</option>
                  </select>
                  <div id="enterstate" style={{ display: "none" }}>
                    <h4 className="text-danger">Please enter your state</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <label htmlFor="Pincode" className="control-label">Blood Bank Name<font color="red">*</font></label>
                  <select id="bbnamelist" name="bloodBankName" className="form-control"
                    onChange={(event) => {
                      setBloodBankName(event.target.value);
                    }}>
                    <option value="-1">Select Blood Bank</option>
                  </select>
                  <div id="enterbloodbankname" style={{ display: "none" }}>
                    <h4 className="text-danger">Please enter your blood bank name</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <label htmlFor="username" className="control-label">Blood Group</label>
                  <select tabIndex="1" name="bloodgroup" className="form-control"
                    onChange={(event) => {
                      setBloodGroup(event.target.value);
                    }}>
                    <option value="-1">Select Blood Group </option>
                    <option value="1">A+Ve</option>
                    <option value="2">A-Ve</option>
                    <option value="3">B+Ve</option>
                    <option value="4">B-Ve</option>
                    <option value="5">AB+Ve</option>
                    <option value="6">AB-Ve</option>
                    <option value="7">O+Ve</option>
                    <option value="8">O-Ve</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-12 col-sm-4">
                </div>
                <div className="col-12 col-sm-4">
                  <button type="submit" tabIndex="1" className="btn btn-primary btn-block btn-danger"
                    onClick={onSubmitClick }
                  >
                    Save
                  </button>
                </div>
                <div className="col-12 col-sm-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donateblood