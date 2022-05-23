import { useState } from "react";
import { Table,Button } from 'reactstrap'
import Axios from "axios";

function BloodStocks() {
  const [donorList, setDonorList] = useState("")
  const search = () => {
    Axios.get("http://localhost:3001/getDonor").then((res) => {
      setDonorList(res.data);
    });
  }

  const RenderRow = donorList ? donorList.map((donor) => {
    return (
      <tr>
        <td >
          {donor.donorid}
        </td>
        <td>
          {donor.donorname}
        </td>
        <td>
          {donor.bloodgroup}
        </td>
        <td>
          {donor.disease}
        </td>
        <td>
          {donor.mnum}
        </td>
        <td>
          {donor.adress}
        </td>
      </tr>
    )
  }) : []
  return (
    <div>
      <div className='btn'>
        <Button
          color="danger"
          outline
          size="lg"
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
                Donor Id
              </td>
              <td >
                Name
              </td>
              <td >
              Blood Group
              </td>
              <td >
                Disease (if any)
              </td>
              <td >
                Contact No
              </td>
              <td >
                Address
              </td>
            </tr>
          </thead>
          <tbody>
            {RenderRow}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default BloodStocks