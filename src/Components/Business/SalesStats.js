import  React, {createRef, useEffect} from 'react'
import Chart from 'chart.js'
import { Col, Row, Card } from 'react-bootstrap'
import classes from '../../styles/GraphLine.module.css'
import Food from '../../Image/Food.jpeg'
import { Popular } from './Data'

const SalesStats = (props) => {
  const chartRef = createRef()
  useEffect( ()=> {
    const myChartRef = chartRef.current.getContext("2d");

     new Chart(myChartRef, {
      type: "line",
      data: {
          //Bring in data
          labels: props.labels.length===props.data.length ? props.labels : new Array(props.data.length).fill("Data"),
          datasets: [
              {
                  label: "Sales",
                  fill : false,
                  borderColor: "#33388e",
                  data: props.data,
              }
          ]
      },
      options: {
          //Customize chart options,
          
      }
  });

  })
    return(
        <Row>
            <Col md={8}>
              <Card> 
                 <div className={classes.graphContainer}>
                   <div className="item-order">
                     <p className={classes.pbtn}>Sales analysis</p>

                   </div>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </div>
              </Card>
            </Col>
             <Col md={4}>
              <Card className={classes.y_axis}>
                <div className={classes.graphPopular}>
                  <p className={classes.popular}>Most popular Order</p>
                
               {Popular.map((prop, i) => (
                  <div className="my-row mb-3" key={i}>
                 <img src={Food} alt="Egusi" width= "50px" height="50px"/>
                 <div className="ml-3">
                
                <span className={classes.Name}>{prop}</span><br/>
                <span className="mr-3 orders-data-font f-15">3242 orders</span>
                <span className="orders-data-font bold">+£35,485<span className="f-15"> earned</span></span>
                
            </div>
            </div>
              ))}
            </div>
              </Card>
            </Col> 
          </Row>

          
    )
}
export default SalesStats