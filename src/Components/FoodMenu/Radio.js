import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from 'react-bootstrap';
import { hideFood } from '../../store/actionTypes';
import { useDispatch } from 'react-redux'

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('');

  const dispatch = useDispatch()
  const handleChange = (event) => {
    setValue(event.target.value);
  };
const handleClose = () => {
    dispatch(hideFood())
}
  return (
    <FormControl component="fieldset">
      <FormLabel component="Swallow">Swallow</FormLabel>
      <RadioGroup aria-label="food" name="foodList" value={value} onChange={handleChange}>
        <FormControlLabel value="FuFu" control={<Radio />} label="FuFu" />
        <FormControlLabel value="Pounded Yam" control={<Radio />} label="Pounded Yam" />
        <FormControlLabel value="Eba" control={<Radio />} label="Ebar" />
        <Button onClick = { handleClose}> Continue </Button>
      </RadioGroup>
    </FormControl>
  );
}
