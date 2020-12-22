import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Form, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Result = (props) => {
    return(
        <>
        {props.result ? (
          <div className="nav-home mt-4 mb-4">
        {
          props.result.map((navlink, i) => (
                     

           <div key={i}>
           <Link to={navlink.url}>   <p className="home">{`${navlink.link}${'>'}`}</p></Link> 
       
       </div>
        ))}
        </div>) : (<>
        {props.sucess ?<div></div> :(<>
        <div className="nav-home home-m">
        <Link to='/'>   <p className="home">Home{`${`>`}`}</p></Link>
        <Link to='/home'>   <p className="home bold">Choose Customer</p></Link>
        </div>
        <div className="mt-4 mb-4">

          <Nav className="mr-3 ml-3 pb-3" activeKey="/home">
             <Nav.Item className="nav-location">
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
             </div>
             </>)
 }
        </> ) }
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