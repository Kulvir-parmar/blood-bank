import { useState } from "react";
import { Table,Button } from 'reactstrap'
import Axios from "axios";

function BloodStocks() {
  const [bloodList, setBloodList] = useState("")
  const search = () => {
    Axios.get("http://localhost:3001/getBloodStocks").then((res) => {
      setBloodList(res.data);
    });
  }

  const RenderRow = bloodList ? bloodList.map((bloodList) => {
    return (
      <tr>
        <td >
          {bloodList.blood_id}
        </td>
        <td>
          {bloodList.blood_group}
        </td>
        <td>
          {bloodList.rbc}
        </td>
        <td>
          {bloodList.wbc}
        </td>
        <td>
          {bloodList.plasma}
        </td>
        <td>
          {bloodList.quantity}
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
                Bag id
              </td>
              <td >
                Blood Group
              </td>
              <td >
                RBC
              </td>
              <td >
                WBC
              </td>
              <td >
                Plasma
              </td>
              <td >
                Quantity
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