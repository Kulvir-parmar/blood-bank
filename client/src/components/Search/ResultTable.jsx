import { Table } from 'reactstrap'
import './ResultTable.css'

function SearchTable() {
  return (
    <div className='resultsTable'>
      <Table
        bordered
        borderless
        hover
        responsive
        style={{
          padding: "8px",
          verticaLAlign: "top",
        }}>
        <thead>
          <tr className='header'>
            <td >
              Sr.No.
            </td>
            <td >
              Blood Bank
            </td>
            <td >
              Category
            </td>
            <td >
              Availability
            </td>
            <td >
              Type
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >
              1
            </td>
            <td>
              Mark
            </td>
            <td>
              Otto
            </td>
            <td>
              @mdo
            </td>
            <td>
              @mdo
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default SearchTable