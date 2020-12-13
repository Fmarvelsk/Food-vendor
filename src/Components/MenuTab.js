import {Col, Row } from 'react-bootstrap'
import Rating from './Rating'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import TocOutlinedIcon from '@material-ui/icons/TocOutlined';
const MenuTab = (props) => {
    return(<>
                
                    <div className="content ">
                        <Row className="moblie-m">
                    <Col md={4} sm={6} className="food ">
                        <img src={props.Image} className="img-food-menu" alt="group"/>
                    </Col>
                    <Col md={4} sm={6}>
                        <div className="ktchen pt-3">
                        <p><b>{props.Name}</b></p>
                        <p><Rating/></p>
                        <p>African and Continental dishes</p>
                        </div>
                    </Col>
                    <Col md={4} sm={8} className="mk-border mt-3">
                        <div className="ktchen pt-3"> 
                        <div className="checkbox-menu">                     
                        <AccessTimeIcon/> <p>Starting from: 12 noon </p>
                        </div>
                        <div className="checkbox-menu">                     
                        <LocalShippingOutlinedIcon/> <p>Delieverly fee : £20 </p>
                        </div>
                        <div className="checkbox-menu">                     
                        <TocOutlinedIcon/> <p>Minimum Order : £ 20   </p>
                        </div>
                      
                      
                              </div>
                    </Col>
                    </Row>
                 
                    </div>
                
            <hr className="mk-changes"/>
            </>
    )
}
export default MenuTab