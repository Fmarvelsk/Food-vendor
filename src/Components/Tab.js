import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
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
            <Tab label="Information" value="2" />
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
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
    </div>
  );
}
