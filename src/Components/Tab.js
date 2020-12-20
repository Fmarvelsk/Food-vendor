import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import Meats from '../Image/Meats.jpeg'
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Form,Button } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function LabTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="ChooseMenu" value="1" />
            <Tab label="More Information" value="2" />
           </TabList>
        </AppBar>
        <TabPanel value="1">
          <Form className="form-btn">
            <Form.Control placeholder="search for your favourite menu"/>
            <div className="svg-btn">
            <Button className="search-food"/>
            <SearchOutlinedIcon className="outline"/>
            </div>
          </Form>
          <div className="mt-3 merchant-header">
          <div className="">
            <img className="menu-img" src={Meats} alt="menu"/>
          </div>
          <div className="ml-3 weatr">
            <h5>Egusi soup</h5>
            <p>Served with choice of swallow (e.g poundo, eba, etc), and choice of protein (e.g goat meat, fish, assorted, etc)</p>
          </div>
          <div className="wde4">
            <span>£10.00</span>
          <span class="span-btn">+</span>
          </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
      <h5>About Heritage Kitchen</h5>
      <p className="f-15">St. Edmondsbury, Lucan, Co.Dublin, K78 Y892</p>
      <div className="row mt-3 opac">
        <div className="col-md-12 col-sm-12 col-xl-6">
            <h5 className="f-15">Opening hours</h5>
            <hr/>
            <div className='item-order'>
              <p>Monday</p>
              <p >10.00 - 12.00</p>
            </div>
            <hr className="cancel c"/>
        </div>
        <div className="col-md-12 col-sm-12 col-xl-6 ">
          <h5 className="f-15">Delivery areas</h5>
          <hr/>
            <div className='item-order'>
              <p>Monday</p>
              <p>Minimum</p>
              <p> Delievry</p>
            </div>
            <hr className="cancel c"/>
        
        </div>
      </div>
        </TabPanel>
        </TabContext>
    </div>
  );
}
