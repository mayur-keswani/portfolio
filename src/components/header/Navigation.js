import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import Logo from '../ui/logo/Logo';

const Navigation = () =>{
	const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar light expand="sm">
        <NavbarBrand href="/" className="mx-5 logo" ><Logo/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-center" >
          <Nav className="mx-5" navbar >
            <NavItem className="mx-2">
              <NavLink href="/" className="navbar-link" style={{fontSize:"1.2rem"}}>Home</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="https://github.com/mayur-keswani" className="navbar-link"  style={{fontSize:"1.2rem"}}>Github</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="https://mayurkeswani.hashnode.dev/" className="navbar-link"  style={{fontSize:"1.2rem"}}>Blogs</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
      
    </>
  );
}

export default Navigation