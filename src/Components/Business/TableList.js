import React, {useEffect} from "react";
import {
Container, 
Row,
Col,
Table,
Card,
Button,
Form } from "react-bootstrap";
import DropDown from './DropDown'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'

const TableList = (props) =>  {
  
    useEffect( () => {
        document.body.style.background= '#F3F3F3 0% 0% no-repeat padding-box'
       })
       
    return (
        <>
     
      <div className="main-panel">
        <Container fluid className="hurt">
            <div>
                <h3 className="mb-3">{props.h3}</h3>
                <div className="table-cat">
                <Form className="form-btn w-80">
            <Form.Control placeholder="search orders" className="change-input"/>
            <div className="svg-btn">
            <Button className="search-food"/>
            <SearchOutlinedIcon className="outline"/>
            </div>
          </Form>
         {props.open.map( (items, i) =>(
              <DropDown drop={items}/>
            
         ))}
              </div>
            </div>
          <Row className="mt-5">
            <Col md={12}>
              <Card>
                  <div className="table-responsive">
                  <Table striped hover>
                    <thead>
                      <tr>
                        {props.row.map((props, key) => {
                          return <th key={key}>{props}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {props.col.map((props, key) => {
                        return (
                          <tr key={key}>
                            {props.map((props, key) => {
                              return <td key={key}>{props}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                    
                  </Table>
                  </div>
                  </Card>
                              </Col>
</Row>
</Container>
</div>
</>
)}
export default TableList