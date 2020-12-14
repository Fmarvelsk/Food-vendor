import {Col, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom' 
const BussHome = () => {
    return(
        <div class="align-items-center my-row">
        <Col md={6} lg={5} >
            <div class="mt-40 home-2-content">
                <h1 class="font-weight-bold home-2-title display-4 mb-0">Grow with Vendr.</h1>
                <h3 class="text-white-70 mt-4 f-15 mb-0">Delivery made with ease</h3>
                <div class="mt-5">
                    <p>Use vendr's delivery platform to drive order traffic, grow sales, and deliver exceptional customer service.</p>
                   <div className="mt-5">
                    <Link to="" className=" p-btn login-btn ">
                        
                Signup
            </Link>
            </div>
            
                </div>
                </div>
                </Col>
                <Col md={6} lg={7}>
                    <div class="mt-40">
                        <img src="images/home-2-img.png" alt="" class="img-fluid mx-auto d-block home-2-img mover-img"/>
                        <div class="home-2-bottom-img">
                            <img src="images/homr-2-bg-bottom.png" alt="" class="img-fluid d-block mx-auto"/>
                                </div>
                                </div>
                                </Col>
                                </div>
                      
    )
}
export default BussHome