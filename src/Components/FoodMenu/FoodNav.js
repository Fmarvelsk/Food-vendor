import { Nav, Navbar } from 'react-bootstrap'
import Result from './Result'
import { useDispatch } from 'react-redux'
import { showModalLogin, showModalSignup } from '../../store/actionTypes'
import Logo from '../../Image/vendr..svg'
import Details from './Details'
const FoodNav = (props) => {
  const dispatch = useDispatch()

	const showModalLoginHandler = () => {
        dispatch(showModalLogin())
	}

	const showModalSignupHandler = () => {
		dispatch(showModalSignup())
	}    
    
        return (
            <>
            <Navbar collapseOnSelect variant="light" expand="lg" className="overwrite-nav">
				
        <Navbar.Brand className="navbrand mb-3" href="/">
        <img src={Logo} alt="logo"/>
            </Navbar.Brand>
            
<Navbar.Toggle  aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">


<div >
    <Nav.Item className="adapt" onClick={showModalLoginHandler}>
      Login
    </Nav.Item>
  </div>
            <div>
  <Nav.Item className="adapt" onClick={showModalSignupHandler}>
    Sign Up
  </Nav.Item>
            </div>
            <div >
    <Nav.Item className="adapt">
          Help
    </Nav.Item>
  </div>
  <div >
    <Nav.Item className="adapt total">
      Carts
    </Nav.Item>
  </div>


            </Nav>

</Navbar.Collapse>
</Navbar>
          {( props.details ? (
      <Details/>   ) : (<Result result={props.orderLink} sucess={props.Succeeded} /> ))}
      
            </>
        )
}
export default FoodNav