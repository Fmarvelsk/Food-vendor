import {Col, Row } from 'react-bootstrap'
import Rating from '../Order/Rating'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import TocOutlinedIcon from '@material-ui/icons/TocOutlined';
import style from '../../styles/moblie.module.css'
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
                        <div><Rating/></div>
                        <p>African and Continental dishes</p>
                        </div>

                    </Col>
                    <Col md={4} sm={12} className="mk-border mt-3">
                        <div className="ktchen details"> 
                        <div className={style.checkbox_menu}>                     
                        <AccessTimeIcon/> <p>Starting from: 12noon </p>
                        </div>
                        <div className={style.checkbox_menu}>                     
                        <LocalShippingOutlinedIcon/> <p>Delieverly fee : £20 </p>
                        </div>
                        <div className={style.checkbox_menu}>                     
                        <TocOutlinedIcon/> <p>Minimum Order : £20 </p>
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