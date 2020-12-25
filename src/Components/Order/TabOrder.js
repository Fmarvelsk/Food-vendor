import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Orders from "./OrderDetails";
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
          <TabList onChange={handleChange} className="jub" aria-label="simple tabs example">
            <Tab selected label="OrderDetails" value="1" />
            
            <Tab label="Track order" value="2" />
            
            <Tab label="Merchant Rating" value="3"/>
           </TabList>
        </AppBar>
        <TabPanel value="1">
          <Orders/>
         </TabPanel>
        <TabPanel value="2">
        </TabPanel>
        </TabContext>
    </div>
  );
}
