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
import { thArray, tdArray, DropDownInfo } from "./Data";
import Sidebar from './Sidebar'

const TableList = (prop) =>  {
  
    useEffect( () => {
        document.body.style.background= '#F3F3F3 0% 0% no-repeat padding-box'
       })
       
    return (
        <>
           <Sidebar/>
     
      <div className="main-panel">
        <Container fluid className="hurt">
            <div>
                <h3>Manage Order</h3>
                <div className="item-order">
                <Form className="form-btn w-80">
            <Form.Control placeholder="search orders" className="change-input"/>
            <div className="svg-btn">
            <Button className="search-food"/>
            <SearchOutlinedIcon className="outline"/>
            </div>
          </Form>
            <DropDown item={DropDownInfo}/>
                   </div>
            </div>
          <Row className="mt-5">
            <Col md={12}>
              <Card>
                  <div className="table-responsive">
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
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