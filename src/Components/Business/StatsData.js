import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StatsCard from './StatsCard'
const StatsData = () => {
    return(<>
        <div>
        <h3>Overview</h3>
        <p className="f-15"><span>Heritage Kitchen restaurant</span> overview and dashboard.</p>
        </div>
        <Row>
          <Col lg={3} sm={6}>
            <StatsCard
              statsText="Orders"
              statsValue="£35,485"
              statsInfo="+2.8%"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              statsText="Avg.Order amount"
              statsValue="£31,345"
              statsInfo="-2.8%"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              statsText="Unique customer"
              statsValue="33,785"
              statsInfo="+2.8%"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              statsText="Net Sales"
              statsValue="+2.8%"
              statsInfo=" £35,485"
            />
          </Col>
        </Row>
 </>      
    )
}
export default StatsData
