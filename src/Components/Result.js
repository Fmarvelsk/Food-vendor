import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Form, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Result = () => {
    return(
        <>
        <div className="nav-home mt-4 mb-4">
        <Link to="/home">   <p className="home">Home</p></Link> {`${'>'}`}
        <Link to="/">
                       <p className="home">Choose customer</p></Link>
           </div>
           {/*<Nav className="mr-3 pb-3" activeKey="/home">
             <Nav.Item className="ml-3 nav-location">
               <p><strong>25 Merchants</strong> delivering to your area: <strong>35 Parnell street, D09 H45</strong> </p>
               <Link className="pl-nav mb-3" to="/">change address</Link>
             </Nav.Item>
               <div className="form-nav form-inline">
                 <Form.Control className="nav-search" placeholder="Search"/>
                 <div className="search-svg">
                 <SearchOutlinedIcon className="svg-width"/>
                 </div>
                 
                 </div>
             </Nav>
    **/}
             </>
             
   
    )
}
export default Result