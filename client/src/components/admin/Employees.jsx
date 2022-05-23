import { useState } from "react";
import { Table,Button } from 'reactstrap'
import Axios from "axios";

function BloodStocks() {
  const [employees, setEmployees] = useState("")
  const search = () => {
    Axios.get("http://localhost:3001/getEmployee").then((res) => {
      setEmployees(res.data);
    });
  }

  const RenderRow = employees ? employees.map((employee) => {
    return (
      <tr>
        <td >
          {employee.emp_id}
        </td>
        <td>
          {employee.uname}
        </td>
        <td>
          {employee.m_num}
        </td>
        <td>
          {employee.age}
        </td>
        <td>
          {employee.gender}
        </td>
        <td>
          {employee.addr}
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
                Employee Id
              </td>
              <td >
                Name
              </td>
              <td >
              Contact
              </td>
              <td >
                Age
              </td>
              <td >
                Gender
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