import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DropDownInfo from '../Business/DropDown' 
import StatsCard from './StatsCard'
const StatsData = (prop) => {
    return(<>
        <div className="item-order">
        <span className="dashboard-style">{prop.topic.h3}</span>
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
