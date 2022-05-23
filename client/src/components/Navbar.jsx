import { Fragment } from "react";
import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavLink,
  Collapse,
  NavbarToggler
} from "reactstrap";
import './Navbar.css'
function NavbarComponent() {

  const loggedIn = localStorage.getItem("auth")
  const username = localStorage.getItem("username")

  return (
    <div className="shadow">
      <Navbar
        color="light"
        light
        expand="md"
        style={{
          background: '#fff',
          boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.01)"
        }}
      > <div className="brand">
          <NavbarBrand href="/">
            BloodBank
          </NavbarBrand>
        </div>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <div className="items">
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar >
              <NavItem className="item">
                <NavLink href="/">
                  HOME
                </NavLink>
              </NavItem>
              {loggedIn ?
                <Fragment>
                  <NavItem className="item">
                    <NavLink href="/bloodStocks">
                      BLOOD STOCKS
                    </NavLink>
                  </NavItem>
                  <NavItem className="item">
                    <NavLink href="/donors">
                      DONORS
                    </NavLink>
                  </NavItem>
                  <NavItem className="item">
                    <NavLink href="/addBloodBag">
                      ADD BLOODBAG
                    </NavLink>
                  </NavItem>
                  <NavItem className="item">
                    <NavLink href="/showEmployees">
                      EMPLOYEES
                    </NavLink>
                  </NavItem>
                  <NavItem className="item">
                    <NavLink href="/">
                      <i className="bi bi-person-circle"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                      </svg> HI, {username}
                    </NavLink>
                  </NavItem>
                </Fragment>
                :
                <Fragment>
                  <NavItem className="item">
                    <NavLink href="/stockAvailability">
                      LOOKING FOR BLOOD
                    </NavLink>
                  </NavItem>
                  <NavItem className="item">
                    <NavLink href="/donateBlood">
                      DONATE BLOOD
                    </NavLink>
                  </NavItem>
                  <NavItem className="item">
                    <NavLink href="/login">
                      BLOODBANK LOGIN
                    </NavLink>
                  </NavItem>
                </Fragment>}

            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
