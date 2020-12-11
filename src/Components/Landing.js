import { Container, Row, Col } from "react-bootstrap"
import Phone from '../Image/phone.png'
import SVG from './Svg.js'
import FooterHeader from './FooterHead'
import Bulk from './Bulk'
const Landing = () => {
    const stateFav = [{
        number : 1,
        header : "Set delivery location",
        body : "Select the location you want us to deliver"
       },
       {
        number : 2,
        header : "Browse Vendors",
        body : "Order from your preferred african vendors"
       },
       {
        number : 3,
        header : "Recieve at your doorstep",
        body : "Your order will be delivered in no time!"
       }]
    return(
       <>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col md={6}>
                    <img className="landing-image" src={Phone} alt="landing"/>
                    
                        </Col>
                    <Col md={6} className="order-steps mt-3">
                        
                        <div className="favs mt-3">
                        <h2 className="reduce-h2">Order from your favourite restuarant in 3 Steps?</h2>
                        </div>      
                            <SVG items={stateFav}/>
                            <div className="go-left">
                            
                                <img src="https://belladivafitness.com/wp-content/uploads/2019/05/Download-on-the-app-store-button-01.svg" width="30%" alt="palystore"/>
                                
                            <img src="http://svgur.com/i/2PY.svg" width="33%" alt="svgur"/>
                  </div>
            
                    </Col>
                </Row>
                <Bulk/>
               </Container>
        
        <FooterHeader/>
        </>
    );
}
export default Landing