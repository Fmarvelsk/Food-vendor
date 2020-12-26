import {Col, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom' 
import GrowVendr from '../../Image/vendrmerc.png'
const BussHome = () => {
    return(
        <div className="merchant-row">
        <Col md={6} lg={5} sm={12}>
            <div className="mt-40 home-2-content">
                <h1 className="font-weight-bold home-2-title display-3 mb-0">Grow with Vendr!</h1>
                <h3 className="text-white-70 mt-4 f-15 mb-0">Delivery made with ease</h3>
                <div className="mt-5">
                    <p className="change-font">Use vendr's delivery platform to drive order traffic, grow sales, and deliver exceptional customer service.</p>
                   <div className="mt-5">
                    <Link to="/merchant/signup" className=" p-btn login-btn ">
                        
                Signup
            </Link>
            </div>
            
                </div>
                </div>
                </Col>
                <Col md={6} lg={7} sm={12}>
                    <div className="mt-40">
                        
                        <img src={GrowVendr} alt="" className="img-fluid mx-auto d-block home-2-img mover-img"/>
                        <div className="home-2-bottom-img">
                            <img src="images/homr-2-bg-bottom.png" alt="" className="img-fluid d-block mx-auto"/>
                                </div>
                                </div>
                                </Col>
                                </div>
                      
    )
}
export default BussHome