import React from "react"
import {Navbar,NavItem,NavbarBrand,NavDropdown,MenuItem,Nav} from "react-bootstrap"

class Menu extends React.Component{
    render(){
        return(
<div>
            <Navbar  fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Logbook</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    <br>
    </br>
    <br>
    </br>
</div>
        )
    }

}
export default Menu