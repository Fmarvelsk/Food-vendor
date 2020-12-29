import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Menu, Managefilter } from "./Data";
import DropDown from "./DropDown";
import ManageMenuItem from "./ManageMenuItem";

//import FormCalender from './CalenderForm'
const ManageMenu = () => {
  return (
    <div className="main-panel">
      <Container fluid className="hurt">
        <div>
          <h3>Manage Menu</h3>
        </div>
        <div className="table-cat">
          <Form className="form-btn w-80">
            <Form.Control
              placeholder="search orders"
              className="change-input"
            />
            <div className="svg-btn">
              <Button className="search-food" />
              <SearchOutlinedIcon className="outline" />
            </div>
          </Form>
          {Managefilter.map((items, i) => (
            <DropDown drop={items} key={i} />
          ))}
        </div>
        {Menu.map((name, i) => (
          <ManageMenuItem nameId={name} i={i} />
       
       
       
       
       
       
       
        ))}
      </Container>
    </div>
  );
};
export default ManageMenu;
