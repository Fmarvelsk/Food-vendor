import React, {useEffect, useState} from "react";
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
import EditMenu from "./EditMenu";

const TableList = (props) =>  {
  const [menuDetails, useMenuDetails] = useState(true)
  const ViewMenu = () => (
    useMenuDetails(false)
  )    
    return (
        <>
     
      <div className="main-panel">
      {console.log(props.link)}
                         
        <Container fluid className="hurt">
          {menuDetails ? (
          <>
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
              <DropDown drop={items} key={i}/>
            
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
                      {props.col.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                            {props.link ? (<td className="link-data" onClick={ViewMenu}>{props.link}</td>) : ''}
                          </tr>
                        );
                      })}
                    </tbody>
                    
                  </Table>
                  </div>
                  </Card>

                              </Col>
</Row> </>) : <EditMenu/>}
            
</Container>
</div>
</>
)}
export default TableList