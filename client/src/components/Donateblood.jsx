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
  const [disease, setDisease] = useState();
  const [bloodGroup, setBloodGroup] = useState();

  const onSubmitClick = () => {
    Axios.post('http://localhost:3001/addDonor',{
      name: name,
      gender: gender,
      dob: dob,
      mnum: mnum,
      adress: adress,
      date: date,
      state: state,
      disease: disease,
      bloodGroup: bloodGroup
    }).then((response) => {
      console.log(response.data);
    }); 
  }

  return (
    <div className='form'>
      <div className="modal-header">
        <h4 className="modal-title text-danger" style={{ align: "center" }}>Donor Details</h4>
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
                  <Input className="form-control" type="text" name="dob" placeholder="yyyy-mm-dd"
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
                  <label className="control-label">Mobile Number<font color="red">*</font></label>
                  <Input type="text" name="donorMobile" maxLength="10" className="form-control"
                    onChange={(event) => {
                      setMnum(event.target.value);
                    }}>
                    <div style={{ display: "none" }}>
                      <h4 className="text-danger">Mobile Number is required</h4>
                    </div>
                    <div style={{ display: "none" }}>
                      <h4 className="text-danger">Mobile Number should be 10 digit</h4>
                    </div>

                  </Input>
                </div>
                <div className="col-12 col-sm-4">
                  <label htmlFor="Address" className="control-label">Address</label>
                  <Input type="text" name="donorAddress" maxLength="150" className="form-control"
                    onChange={(event) => {
                      setAdress(event.target.value);
                    }}>
                  </Input>
                </div>

                <div className=" col-12 col-sm-4">
                  <label htmlFor="password" className="control-label">Tentative Date</label>
                  <Input className="form-control hasDatepicker" type="text" name="tentdob" placeholder="yyyy-mm-dd"
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
                    <option value="Andaman &amp; Nicobar Islands">Andaman &amp; Nicobar Islands</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra &amp; Nagar Haveli">Dadra &amp; Nagar Haveli</option>
                    <option value="Daman &amp; Diu">Daman &amp; Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                  <div id="enterstate" style={{ display: "none" }}>
                    <h4 className="text-danger">Please enter your state</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <label className="control-label">Disease (if any)<font color="red">*</font></label>
                  <select id="bbnamelist" name="bloodBankName" className="form-control"
                    onChange={(event) => {
                      setDisease(event.target.value);
                    }}>
                    <option value="">Disease (if any)</option>
                    <option value="Yes">YES</option>
                    <option value="No">NO</option>
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
                    <option value="">Select Blood Group </option>
                    <option value="A+Ve">A+Ve</option>
                    <option value="A+Ve">A+Ve</option>
                    <option value="B+Ve">B+Ve</option>
                    <option value="B-Ve">B-Ve</option>
                    <option value="AB+Ve">AB+Ve</option>
                    <option value="AB-Ve">AB-Ve</option>
                    <option value="O+Ve">O+Ve</option>
                    <option value="O-Ve">O-Ve</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-12 col-sm-4">
                </div>
                <div className="col-12 col-sm-4">
                  <button type="submit" tabIndex="1" className="btn btn-primary btn-block btn-danger"
                    onClick={onSubmitClick}
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