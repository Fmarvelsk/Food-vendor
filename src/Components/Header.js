import { Jumbotron, Row, Col, Container} from 'react-bootstrap'
import Form from './Form'
import Jollof from '../Image/jollof.jpeg'
const Header = () => {
    return(
        <Jumbotron className="bg-height">
            <Container className="mt-5">
            <Row >
                <Col md={5} sm={12} >
                    <div>
                        <h2 className="header-highlight">Want Jollof?</h2>
                    </div>
                    <div>
                        <p>Order food, drinks and more from African Vendors</p>
                    </div>
                    <div className="form-field">
                        <Form/>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                <img className="jollof" src={Jollof} alt="jollof-rice"/>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
    )
}
export default Header