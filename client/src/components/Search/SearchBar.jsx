import { useState } from 'react'
import { Table, Input, Button } from 'reactstrap'
import './SearchBar.css'

import Axios from 'axios';

function SearchBar() {
  const [State, setState] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [bloodComponent, setBloodComponent] = useState("");
  const [bloodList, setBloodList] = useState("")

  const search = () => {
    Axios.post("http://localhost:3001/bloodData", {
      State: State,
      bloodGroup: bloodGroup,
      bloodComponent: bloodComponent
    }).then((res) => {
      setBloodList(res.data);
    });
  }

  const RenderRow = bloodList ? bloodList.map((bloodList) => {
    return (
      <tr>
        <td >
          {bloodList.bloodbag_id}
        </td>
        <td>
          {bloodList.blood_group}
        </td>
        <td>
          {bloodList.blood_quantity}
        </td>
        <td>
          {bloodList.expire_date}
        </td>
      </tr>
    )
  }) : []




  return (
    <div>
      <div className='heading'>Blood Availability</div>
      <hr className='line' />
      <div className='searchTable'>
        <Table
          borderless
          responsive
        >
          <thead>
            <div className="panelHeading">
              <tr>
                <td colSpan="4">
                  Search Blood Stocks
                </td>
              </tr>
            </div>
          </thead>
          <div className='wide' >
            <tr style={{ overflow: "hidden" }}>
              <td style={{ width: "23%" }}>
                <Input
                  bsSize="sm"
                  type="select"
                  onChange={(event) => {
                    setState(event.target.value);
                  }}
                  style={{
                    margin: 'auto',
                    color: 'rgba(0,0,0,0.7)'
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
                </Input>
              </td>
              <td style={{ width: "23%" }}>
                <Input
                  bsSize="sm"
                  type="select"
                  onChange={(event) => {
                    setBloodGroup(event.target.value);
                  }}
                  style={{
                    margin: 'auto',
                    color: 'rgba(0,0,0,0.7)'
                  }}
                >
                  <option value="-1">Select Blood Group </option>
                  <option value="A+">A+Ve</option>
                  <option value="A+">A+Ve</option>
                  <option value="B+">B+Ve</option>
                  <option value="B-">B-Ve</option>
                  <option value="AB+">AB+Ve</option>
                  <option value="AB-">AB-Ve</option>
                  <option value="O+">O+Ve</option>
                  <option value="O-">O-Ve</option>
                </Input>
              </td>
              <td style={{ width: "23%" }}>
                <Input
                  bsSize="sm"
                  type="select"
                  onChange={(event) => {
                    setBloodComponent(event.target.value);
                  }}
                  style={{
                    margin: 'auto',
                    color: 'rgba(0,0,0,0.7)'
                  }}>
                  <option value="-1">Select Blood Component</option>
                  <option value="Whole Blood">Whole Blood</option>
                  <option value="Single Donor Platelet">Single Donor Platelet</option>
                  <option value="Single Donor Plasma">Single Donor Plasma</option>
                  <option value="Sagm Packed Red Blood Cells">Sagm Packed Red Blood Cells</option>
                  <option value="Platelet Rich Plasma">Platelet Rich Plasma</option>
                  <option value="Platelet Poor Plasma">Platelet Poor Plasma</option>
                  <option value="Platelet Concentrate">Platelet Concentrate</option>
                  <option value="Plasma">Plasma</option>
                  <option value="Packed Red Blood Cells">Packed Red Blood Cells</option>
                </Input>
              </td>
            </tr>
          </div>
        </Table>
      </div>
      <div className='btn'>
        <Button
          color="danger"
          outline
          onClick={search}
        >
          Search
        </Button>
      </div>

      <div className='resultsTable'>
        <Table
          bordered
          borderless
          hover
          responsive
          style={{
            padding: "8px",
            verticaLAlign: "top",
          }}
        >
          <thead>
            <tr className='header'>
              <td >
                Bag id
              </td>
              <td >
                Blood Group
              </td>
              <td >
                Quantity
              </td>
              <td >
                Expire Date
              </td>
            </tr>
          </thead>
          <tbody>
            {RenderRow}
          </tbody>
        </Table>
      </div>
    </div >
  )
}

export default SearchBar