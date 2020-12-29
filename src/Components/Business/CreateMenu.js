import { Col, Row, Container, Card, Form, Button } from 'react-bootstrap';
import CurrencySvg from '../../Image/assests/Group 270.svg'
//import SideBar from "./Sidebar";
const CreateMenu =  () => {
    return(
        <>
        <div className="main-panel">
      <Container fluid className="hurt">

        <div>
        <p className="dashboard-style">Create new menu</p>
           </div>
           <p className="f-15">Add you new menu here</p>
            <Row>
            <Col xl={12}>
                <Card>
                <Form className="menu-form" >
				<Form.Row>
					
					<Col xs={12} sm={6} md={6} className="mt-3">
						<Form.Group>
							<label>Menu name</label>
							<Form.Control type="text"  className="change-input" placeholder="Name" />
						</Form.Group>
					</Col>
					<Col xs={12} sm={6} md={6} className="mt-3" >
						<Form.Group>
                        <label>Select Categories</label>
							
							<Form.Control as="select" className="change-input">
                                <option value={null}>Pick an Option</option>
                            <option value="Soup">Soup</option>
                            <option value="Swallow">Swallow</option>
                            <option value="Rice">Rice</option>
                            <option value="Slides">Slides </option>
                            <option value="Breads">Breads</option>
                            <option value="Beans">Beans</option>
                            <option value="Others">Others</option>
                            </Form.Control>
						
						</Form.Group>
					</Col>
                    <Col md={12} className="mt-3">
                    <Form.Group>
                        <label>Set Price</label>
                        <Form.Control placeholder="Set Price" className="change-input"/>
            <div className="currency-svg">
            <img src={CurrencySvg} alt="Currency" width="83%"/>
           {/*<SearchOutlinedIcon className="outline"/>*/}
            </div>

                        </Form.Group>

                        </Col> 
                        <Col xs={12} sm={6} md={6} className="mt-3">
						<Form.Group>
							<label>Description of menu</label>
							<Form.Control as="textarea"  className="change-textarea" placeholder="Write a short description about the menu..."/>
						</Form.Group>
					</Col>
					<Col xs={12} sm={6} md={6} className="mt-3" >
						<Form.Group>
                        <label>Upload picture</label>
							
							<Form.Control as="textarea" className="change-textarea">
                            </Form.Control>
						
						</Form.Group>
					</Col>
                    
				</Form.Row>
                <div className="buss-sign-btn mt-3">
					<button variant="primary" className="w-100 p-btn login-btn" type="submit">
						Save
					</button>
				</div>
			
               
                    </Form>
                </Card>
            </Col>
            </Row>
        </Container>
        </div>
        
        </>
    )
}
export default CreateMenu