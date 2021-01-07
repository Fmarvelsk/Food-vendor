import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DropDownInfo from '../Business/DropDown' 
import StatsCard from './StatsCard'
const StatsData = (prop) => {
    return(<>
        <div className="item-order">
        <h3>{prop.topic.h3}</h3>
        <div></div>
        </div>
        <p className="f-15"><span>{prop.topic.span}</span> overview and dashboard.</p>
        
        <Row>
          {prop.data?.map( (data, i) => (
              <Col lg={3} sm={6} key={i}>
              <StatsCard statsInfo={data}/>
              
            </Col>
          
    ))}
          </Row>
 </>      
    )
}
export default StatsData
