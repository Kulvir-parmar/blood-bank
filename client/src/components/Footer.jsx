import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='foot'>
      <div style={{ background: 'rgb(30,30,30)', paddingTop: "50px" }}>
        {/* <div className="container"> */}
        <div className="row justify-content-center">
          <div className="col-3 offset-1 col-sm-2">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><Link to='/'>Blood Availability</Link></li>
              <li><Link to='/'>Blood Bank Directory</Link></li>
              <li><Link to='/'>Menu</Link></li>
              <li><Link to='/'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-3 offset-1 col-sm-2">
            <h5>Looking For Blood</h5>
            <ul className="list-unstyled">
              <li><Link to='/'>Blood Availability</Link></li>
              <li><Link to='/'>Blood Bank Directory</Link></li>
              <li><Link to='/'>Menu</Link></li>
              <li><Link to='/'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-3 offset-1 col-sm-2">
            <h5>Donate Blood</h5>
            <ul className="list-unstyled">
              <li><Link to='/'>Blood Availability</Link></li>
              <li><Link to='/'>Blood Bank Directory</Link></li>
              <li><Link to='/'>Menu</Link></li>
              <li><Link to='/'>Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p className='small'>© Copyright 2022 BloodBank-TIET</p>
            <p className='small'></p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Footer