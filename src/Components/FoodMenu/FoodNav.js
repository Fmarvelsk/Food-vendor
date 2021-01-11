import { Nav, Navbar } from 'react-bootstrap'
import Result from './Result'
import { useDispatch } from 'react-redux'
import { showModalLogin, showModalSignup } from '../../store/actionTypes'
import Logo from '../../Image/vendr..svg'
import { useSelector } from 'react-redux'
import Details from './Details'
import { TotalProduct} from '../../store/filterStore'


const FoodNav = (props) => {
  const userValidate = useSelector((state) => state.filterStore)
  const totalCarts = useSelector((state) => state.Carts)

  const dispatch = useDispatch()
	const showModalLoginHandler = () => {
        dispatch(showModalLogin())
	}

	const showModalSignupHandler = () => {
		dispatch(showModalSignup())
	}    
    
        return (
            <>
            {console.log(userValidate.user)}
            <Navbar collapseOnSelect variant="light" expand="lg" className="overwrite-nav">
				
        <Navbar.Brand className="navbrand mb-3" href="/">
        <img src={Logo} alt="logo"/>
            </Navbar.Brand>
            
<Navbar.Toggle  aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">

{ userValidate.user ? (<div>

  {userValidate.user.email}
</div>) : 
(<>
<div>
  <Nav.Item 
  className="adapt"
   onClick={showModalLoginHandler}>
      Login
    </Nav.Item>
  </div>
            <div>
  <Nav.Item className="adapt" onClick={showModalSignupHandler}>
    Sign Up
  </Nav.Item>
            </div></>
    )}
            <div >
    <Nav.Item className="adapt">
          Help
    </Nav.Item>
  </div>
  <div >
    <Nav.Item className="adapt total">
     £ {TotalProduct(totalCarts.carts)}
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