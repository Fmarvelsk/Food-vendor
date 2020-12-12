import { Container, Col, Row, Form } from 'react-bootstrap'
import Group1 from '../Image/Group 113.png'

const Menu = () => {
    return(
        <Container className="jumbotron jumbocolor">
            <Row>
            <Col md={2}  className="content">
                <div className="checkbox-menu pt-3">
                <Form.Check /> <p>Soup</p>
                </div>
            </Col>
            <Col md={8}>
            </Col>
            
            </Row>
        </Container>
    )
}
export default Menu