import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import V from '../Image/v@2x.svg'
import E from '../Image/e@2x.svg'
import N from '../Image/n@2x.svg'
import D from '../Image/d@2x.svg'
import R from '../Image/r@2x.svg'
import Dot from '../Image/-@2x.svg'
const Foodnav = () => {
    return(<div className="bg-height">
        <div className="nav-adjust">
        <Nav className="d-whole" activeKey="/home">
          <Navbar.Brand>
            <Nav.Link href="/home">
            <img src={V} alt="logo"/>
                <img src={E} alt="logo"/>
                <img src={N} alt="logo"/>
                <img src={D} className="d-stroke"alt="logo"/>
                <img src={R} alt="logo"/>
                <img src={Dot} className="dot-stroke" alt="logo"/>
                
            </Nav.Link>
          </Navbar.Brand>
          <div className="carts-brand">
               <Nav.Link to ="/">
                <p><PermIdentityOutlinedIcon className="black-cls"/></p>
            </Nav.Link>
          
            <Nav.Link href="/home">
<p className="dw"><ShoppingCartOutlinedIcon className="black-cls"/><p className="da">s</p></p>
            </Nav.Link>
           </div>
          </Nav>
        <div className="nav-home mt-4 mb-4">
     <Link to="/">   <p className="home p-btn ">Home</p></Link> 
                    <p className="home p-btn">Choose customer</p>
        </div>
        <Nav className="mr-3 pb-3" activeKey="/home">
          <Nav.Item className="ml-3 nav-location">
            <p><strong>25 Merchants</strong> delivering to your area: <strong>35 Parnell street, D09 H45</strong> </p>
            <Link className="pl-nav mb-3" to="/">change address</Link>
          </Nav.Item>
            <div class="form-nav form-inline">
              <Form.Control className="nav-search" placeholder="Search"/>
              <div className="search-svg">
              <SearchOutlinedIcon className="svg-width"/>
              </div>
              
              </div>
          </Nav>
        </div>
      </div>
    )
}
export default Foodnav