import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import Midsection from './Midsection';
// background-color: #08AEEA;
// background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);


const App = (props) => {

  return (
    <div className="App" style={{background: "linear-gradient(#e66465, #9198e5)",backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"}}> 
      <div className="navHeader" >
          <Navbar style={{backgroundColor:"black"}} >
            <NavbarBrand href="/" style={{color:"white"}}>Hiren Thakore</NavbarBrand>
            
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink  style={{color:"white"}} href="https://github.com/thakoreh">Visit my GitHub</NavLink>
                </NavItem>
              </Nav>
              <NavbarText  style={{color:"white"}}>Portfolio</NavbarText>
            
          </Navbar>
        <Midsection />
          
        </div>
      </div>
  );
}
Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
NavbarText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

export default App;