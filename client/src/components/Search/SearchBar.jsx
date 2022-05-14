import { useState } from 'react'
import { Table, Input, Button } from 'reactstrap'
import './SearchBar.css'

import Axios from 'axios';

function SearchBar() {
  const [state, setState] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [bloodComponent, setBloodComponent] = useState("");

  const search = () => {
    // console.log(state + "  " + bloodGroup + "   " + bloodComponent);
    Axios.get("http://localhost:3001/bloodData").then((res)=>{
      console.log(res);
    });
  }
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
                  onChange={(event)=>{setState(event.target.value);
                  }}
                  style={{
                    margin: 'auto',
                    color: 'rgba(0,0,0,0.7)'
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
                </Input>
              </td>
              <td style={{ width: "23%" }}>
                <Input
                  bsSize="sm"
                  type="select"
                  onChange={(event)=>{setBloodGroup(event.target.value);
                  }}
                  style={{
                    margin: 'auto',
                    color: 'rgba(0,0,0,0.7)'
                  }}
                >
                  <option value="-1">Blood Group</option>
                  <option value="1">A +ve</option>
                  <option value="2">A -ve</option>
                  <option value="3">B +ve</option>
                  <option value="4">B -ve</option>
                  <option value="5">O +ve</option>
                  <option value="6">O -ve</option>
                  <option value="7">AB +ve</option>
                  <option value="8">AB -ve</option>
                </Input>
              </td>
              <td style={{ width: "23%" }}>
                <Input
                  bsSize="sm"
                  type="select"
                  onChange={(event)=>{setBloodComponent(event.target.value);
                  }}
                  style={{
                    margin: 'auto',
                    color: 'rgba(0,0,0,0.7)'
                  }}>
                  <option value="-1">Select Blood Component</option>
                  <option value="11">Whole Blood</option>
                  <option value="14">Single Donor Platelet</option>
                  <option value="18">Single Donor Plasma</option>
                  <option value="28">Sagm Packed Red Blood Cells</option>
                  <option value="16">Platelet Rich Plasma</option>
                  <option value="15">Platelet Poor Plasma</option>
                  <option value="20">Platelet Concentrate</option>
                  <option value="19">Plasma</option>
                  <option value="12">Packed Red Blood Cells</option>
                  <option value="30">Leukoreduced Rbc</option>
                  <option value="29">Irradiated RBC</option>
                  <option value="13">Fresh Frozen Plasma</option>
                  <option value="17">Cryoprecipitate</option>
                  <option value="21">Cryo Poor Plasma</option></Input>
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
    </div >
  )
}

export default SearchBar