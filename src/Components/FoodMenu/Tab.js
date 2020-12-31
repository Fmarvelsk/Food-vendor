import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Popular } from '../Business/Data'
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import FoodList from './FoodList'
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
  const daysOfWeek = [{
    day : 'Monday',
    time : '10.00 - 12.00'
  },
  {
    day : 'Tuesday',
    time : '10.00 - 12.00'
  },
  {
    day : 'Wednesday',
    time : '10.00 - 12.00'
  },
  {
    day : 'Thursday',
    time : '10.00 - 12.00'
  },
  {
    day : 'Friday',
    time : '10.00 - 12.00'
  },
  {
    day : 'Saturday',
    time : '10.00 - 12.00'
  },
  {
    day : 'Sunday',
    time : '10.00 - 12.00'
  },

]

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
            <Form.Control placeholder="search for your favourite menu" className="change-input"/>
            <div className="svg-btn">
            <Button className="search-food"/>
            <SearchOutlinedIcon className="outline"/>
            </div>
          </Form>
      {Popular.map((Food, i) => (
          
  <FoodList menu={Food} key={i}/>
      ))}
        </TabPanel>
        <TabPanel value="2">
      <h5>About Heritage Kitchen</h5>
      <p className="f-15">St. Edmondsbury, Lucan, Co.Dublin, K78 Y892</p>
      <div className="row mt-3 opac">
        <div className="col-md-12 col-sm-12 col-xl-6">
            <h5 className="f-15">Opening hours</h5>
            <hr/>
            {daysOfWeek.map( (day, i) => (
            <div key={i}>
              <div className='item-order mt-3'>
              <p>{day.day}</p>
              <p >{day.time}</p>
            </div>
            <hr className="cancel c"/>
            </div>)
            )}
            
        </div>
        <div className="col-md-12 col-sm-12 col-xl-6 mobli-c">
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
