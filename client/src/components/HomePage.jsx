import React from 'react'
function HomePage() {
  return (
    <div>
      <div>
        <img src="/Images/Blood.jpeg" alt="bloodbank" style={{ width: "100%" }} />
      </div>
      <div className="container" style={{
        marginTop: "30px"
      }}>
        <h2 style={{
          color: "red"
        }}>
          LEARN ABOUT DONATION
        </h2>
        <hr style={{
          height: "2px",
          color: "rgba(0,0,0,1)"
        }} />
        <div className='row'>
          <div className="col-sm-6">
            <img src="/Images/donationFact.webp" alt="" style={{ width: "95%" }} />
          </div>
          <div className="col-sm-6">
            <table className="table table-responsive table-bordered ">
              <tbody>
                <tr>
                  <th colSpan="3" style={{ color: "white", backgroundColor: "red" }}>Compatible Blood Type Donors</th>
                </tr>
                <tr>
                  <td><b>Blood Type</b></td>
                  <td><b>Donate Blood To</b></td>
                  <td><b>Receive Blood From</b></td>
                </tr>
                <tr>
                  <td><span style={{ color: "#961e1b" }}><b>A+</b></span></td>
                  <td>A+ AB+</td>
                  <td>A+ A- O+ O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: "#961e1b" }}><b>O+</b></span></td>
                  <td>O+ A+ B+ AB+</td>
                  <td>O+ O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: "#961e1b" }}><b>B+</b></span></td>
                  <td>B+ AB+</td>
                  <td>B+ B- O+ O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: "#961e1b" }}><b>AB+</b></span></td>
                  <td>AB+</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td><span style={{ color: "#961e1b" }}><b>A-</b></span></td>
                  <td>A+ A- AB+ AB-</td>
                  <td>A- O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: "#961e1b" }}><b>O-</b></span></td>
                  <td>Everyone</td>
                  <td>O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: "#961e1b" }}><b>B-</b></span></td>
                  <td>B+ B- AB+ AB-</td>
                  <td>B- O-</td>
                </tr>
                <tr>
                  <td><span style={{ color: "#961e1b" }}><b>AB-</b></span></td>
                  <td>AB+ AB-</td>
                  <td>AB- A- B- O-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage