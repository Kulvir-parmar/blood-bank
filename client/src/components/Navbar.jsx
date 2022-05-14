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
                <NavLink href="/employeeLogin">
                  BLOODBANK LOGIN
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
