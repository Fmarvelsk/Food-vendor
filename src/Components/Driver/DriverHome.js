import {Col, Form, Button} from 'react-bootstrap'
import DeliverVendr from '../../Image/driver.svg'
const DriverHome = () => {
    return(
        <div className="merchant-row">
        <Col md={6} lg={5} sm={12}>
            <div className="mt-40 home-2-content">
                <h1 className="font-weight-bold home-2-title display-3 mb-0">Deliver with Vendr.</h1>
                <div className="mt-5">
                 
                 <Form>
                     <Form.Group>
                         <Form.Control 
                         className="change-input spec" 
                         placeholder="Email address"/>
                     </Form.Group>
                     
                     <Form.Group>
                         <Form.Control 
                         className="change-input spec" 
                         placeholder="Password"/>
                     </Form.Group>
                 </Form>
                 <div className="mt-3">
			<p className="orders-data-font">By clicking "Sign Up" you agree to the <span className="vendr-color">Vendr.</span> Privacy Policy and <span className="vendr-color"> Terms of Service.</span> This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                    </div>
                    <div className="buss-sign-btn mt-3">
                    <Button 
                    variant="primary" 
                    className="w-100 p-btn login-btn" 
                    type="submit">
						Sign Up
					</Button>
				</div>
			
                </div>
                </div>
                </Col>
                <Col md={6} lg={7} sm={12}>
                    <div className="mt-40">
                        
                        <img src={DeliverVendr} alt="Driver" className="img-fluid mx-auto d-block home-2-img mover-img"/>
                        <div className="home-2-bottom-img">
                            <img src="images/homr-2-bg-bottom.png" alt="" className="img-fluid d-block mx-auto"/>
                                </div>
                                </div>
                                </Col>
                                </div>
                      
    )
}
export default DriverHome