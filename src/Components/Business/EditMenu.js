import React from 'react'
import Blank from '../../Image/assests/blank-profile-picture.png'
import { Row, Col, Container, Button } from 'react-bootstrap'
import  GraphLine from "../../styles/GraphLine.module.css";
import {Popular} from './Data'
import { useSelector, useDispatch } from 'react-redux'
import { showMealOrder } from '../../store/actionTypes'
const EditMenu = (props) => {
    const classes = GraphLine,
         menuDetails = useSelector(state => state.filterStore),
        dispatch = useDispatch()
  
    const ConfirmOrder = (e) => {
            dispatch(showMealOrder(!menuDetails.order))
            
    }
    return(
        <Container className={classes.menu} >
                    <Row>
                        
                    <Col md={4} sm={5} >
                        <div className={classes.buyer}>
                            <img src={Blank} className="profile-pic" alt="buyer"/>
                            <p>George Diaz</p>
                            <p>george.diaz@mail.com</p>
                            
                            <p>Delivery address</p>
                            <p className={classes.location}>St. Edmondsbury, Lucan, Co.Dublin, K78 Y892</p>
                            
                        </div>
                        <div className="buss-sign-btn">
                        <Button className={classes.orderNoBtn} onClick={ConfirmOrder}>
                            Confirm Order
                            </Button>
                            </div>
                    </Col>
                    <Col md={8} sm={7} className={classes.color}>
                        <div className={classes.orderNo}>
                        <div className={classes.header_order}>
                            <div className="padding-order">
                            <h5>Order Number: 2345473856</h5>
                            <p>5 items</p>
                            </div>
                        </div>
                            {Popular.map((meal, i) => (<div key={i}>
                                     <div className={classes.header_row} >

                                     <div className={classes.size}>{i+1}</div>
                                     <div className={classes.size}><b>{meal}</b></div>
                                     <div className={classes.size}>(3)</div>
                                     <div className={classes.size}><b>£ 15.00</b></div>
                                     <div className={classes.size}><i className={classes.link}>Remove</i></div>
                                 </div>
                                 <hr/>
                             </div>   )
                            )}
                        </div>
                        
                    </Col>
                    
                    </Row>
        </Container>
    )
}
export default EditMenu