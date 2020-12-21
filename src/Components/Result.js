import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Form, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Result = (props) => {
    return(
        <>
           <div className="nav-home mt-4 mb-4">
        
        {props.result ? props.result.map((navlink, i) => (
           <div key={i}>
           <Link to={navlink.url}>   <p className="home">{`${navlink.link}${'>'}`}</p></Link> 
       </div>    
        )) : <div></div>  }
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
    </div>
             </>
             
   
    )
}
export default Result