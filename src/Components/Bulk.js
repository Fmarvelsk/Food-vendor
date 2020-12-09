import { Container, Row, Col } from "react-bootstrap"
import SVG from './Svg.js'
import Food from '../Image/foodgroup.png'
//import Star from '../Image/star-1@2x.svg'
const Bulk = () => {
  
const bulkOrder = [{
  number : 1,
  body : "Bulk orders suitale for birthdays, hangouts, anniversaries, and all special occassion"
},{
number : 2,
body : "Order lunchs, fuel for meetings, or late-night deliveries to the office"
},
{
  number :3,
  body : 'Order from a list of favorite vendors near you'
}
]
	return (
<>
<Container className="mt-5">
                <Row>
                    <Col md={6} lg={6} >
                      <div className="header-bulk">
                    <h3>Bulk Orders for special Occasions?</h3>
                    </div>
          <SVG items={bulkOrder}/>

                        </Col>
                    <Col md={6} lg={6} className="steps">
                        
                        <div className="favs">
                           <img className="responsive-img mt-5 mb-3" src={Food} alt="food"/>
                       
                          
                      
                                            </div>      
                            
                 
                    </Col>
                </Row>
               </Container>
        
</>	
	);
}
export default Bulk