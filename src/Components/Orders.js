import { Row, Container, Col} from 'react-bootstrap'

const Orders = () => {
    return(
        <Container>
            <Row>
        <Col md={5} xl={5}>
            <div className="trans">
            <h3>Order details</h3>
            </div>
            <div className="panel">
                <div className="padding-order">
                <div className="merchant-header">
                    <h3>Logo</h3>
                    <div className="setspacing">
                        <p>Heritage Kitchen (African Cuisine)</p>
                        <p className="f-15">St. Edmondsbury, Lucan, Co.Dublin, K78 Y892</p>
                    </div> 
                </div>
                <hr/>
                <div>
                    <p className="order-p"><b>delivering to :</b></p>
                </div>
                </div>
            </div>
        </Col>

        
        <Col md={4} xl={4}>
            
        <div className="trans">
        <h3>Track Order</h3>
        </div>
        <div className="panel">

            </div>
        
           
        </Col>
        
        <Col md={3} xl={3}>
        <div className="trans">
        <h3>Rate mercent</h3>
          </div>
          <div className="panel">

</div>

       
        </Col>
        </Row>
        </Container>
    )
}
export default Orders