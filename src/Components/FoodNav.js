import { Nav, Navbar } from 'react-bootstrap'
import Result from './Result'
import Logo from '../Image/vendr..svg'
import Details from './Details'
const FoodNav = (props) => {
        return (
            <>
            {console.log(props)}
            <Navbar collapseOnSelect variant="light" expand="lg">
				
        <Navbar.Brand className="navbrand mb-3" href="/">
        <img src={Logo} alt="logo"/>
            </Navbar.Brand>
            
<Navbar.Toggle  aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">


<div >
    <Nav.Item className="log-btn">
      Login
    </Nav.Item>
  </div>
            <div>
  <Nav.Item className="  log-btn">
    Sign Up
  </Nav.Item>
            </div>
            <div >
    <Nav.Item className="log-btn">
          Help
    </Nav.Item>
  </div>
  <div >
    <Nav.Item className="log-btn ">
      Carts
    </Nav.Item>
  </div>


            </Nav>

</Navbar.Collapse>
</Navbar>
          {( props.details ? (
      <Details/>   ) : (<Result/>))}
      
            </>
        )
}
export default FoodNav