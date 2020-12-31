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
import { useDispatch, useSelector } from 'react-redux'
import { showMealOrder } from '../../store/actionTypes'

const TableList = (props) =>  {
  const menuDetails = useSelector(state => state.filterStore)
  const dispatch = useDispatch()
  const ViewMenu = () => (
    dispatch(showMealOrder(false))
   
  )   
    return (
        <>
      <div className="main-panel">
        <Container fluid className="hurt">
          {menuDetails.order ? (
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
                            {props.link ? (<td className="link-data" onClick={ViewMenu}>{props.link}</td>) : null}
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