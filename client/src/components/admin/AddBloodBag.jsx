import { useState } from 'react'
import { Input } from 'reactstrap';

import Axios from 'axios'
// import { response } from 'express';

function Donateblood() {
  const [id, setId] = useState();
  const [bgroup, setBgroup] = useState();
  const [hemo, setHemo] = useState();
  const [rbc, setRbc] = useState();
  const [wbc, setWbc] = useState();
  const [plasma, setPlasma] = useState();
  const [quantity, setQuantity] = useState();

  const onSubmitClick = () => {
    Axios.post('http://localhost:3001/bloodBag', {
      id: id,
      bgroup: bgroup,
      hemo: hemo,
      rbc: rbc,
      wbc: wbc,
      plasma: plasma,
      quantity: quantity
    }).then((response) => {
      
    });
  }
  return (
    <div className='form'>
      <div className="modal-header">
        <h4 className="modal-title text-danger" style={{ align: "center" }}>Blood Details</h4>
      </div>
      <div className="modal-body">
        <div className="row form-group">
          <div className="col-sm-12">
            <div className="well">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <label htmlFor="username" className="control-label">Bag Id<font color="red">*</font></label>
                  <Input type="text" name="bagId" className="form-control"
                    onChange={(event) => {
                      setId(event.target.value);
                    }}>
                    <div align="center">
                      <div id="enterename" style={{ display: "none" }}>
                        <h4 className="text-danger">Please enter your name</h4>
                      </div>
                    </div>
                  </Input>
                </div>
                <div className=" col-12 col-sm-4">
                  <label htmlFor="Gender" className="control-label">Blood Group<font color="red">*</font></label>
                  <select name="Bgroup" className="form-control" onChange={(event) => {
                    setBgroup(event.target.value);
                  }}>
                    <option value="-1">Select Blood Group </option>
                    <option value="A+">A+Ve</option>
                    <option value="A+">A+Ve</option>
                    <option value="B+">B+Ve</option>
                    <option value="B-">B-Ve</option>
                    <option value="AB+">AB+Ve</option>
                    <option value="AB-">AB-Ve</option>
                    <option value="O+">O+Ve</option>
                    <option value="O-">O-Ve</option>
                  </select>
                  <div id="entergender" style={{ display: "none" }}>
                    <h4 className="text-danger">Please enter your gender</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <label htmlFor="Age" className="control-label">Heamoglobin<font color="red">*</font></label>
                  <Input className="form-control" type="text" name="hemo"
                    onChange={(event) => {
                      setHemo(event.target.value);
                    }}>
                    <div id="enterdob" style={{ display: "none" }}>
                      <h4 className="text-danger">Please enter your dob</h4>
                    </div>
                  </Input>
                </div>
              </div>
              <div className="row">

                <div className="col-12 col-sm-4">
                  <label className="control-label">RBC<font color="red">*</font></label>
                  <Input type="text" name="RBC" className="form-control"
                    onChange={(event) => {
                      setRbc(event.target.value);
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
                  <label htmlFor="Address" className="control-label">WBC</label>
                  <Input type="text" name="WBC" maxLength="150" className="form-control"
                    onChange={(event) => {
                      setWbc(event.target.value);
                    }}>
                  </Input>
                </div>

                <div className=" col-12 col-sm-4">
                  <label htmlFor="password" className="control-label">Plasma</label>
                  <Input className="form-control hasDatepicker" type="text" name="plasma"
                    onChange={(event) => {
                      setPlasma(event.target.value);
                    }}>
                  </Input>
                </div>
              </div>
              <br />
              <div className="row">
                <div className=" col-12 col-sm-4">
                  <label htmlFor="password" className="control-label">Quantity</label>
                  <Input className="form-control hasDatepicker" type="text" name="quantity"
                    onChange={(event) => {
                      setQuantity(event.target.value);
                      console.log(quantity)
                    }}>
                  </Input>
                </div>
              </div>
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