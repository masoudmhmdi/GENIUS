import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel
        sx={{ fontWeight: 'bold' }}
        id="demo-row-radio-buttons-group-label"
      >
        قیمت:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="گران ترین"
          control={<Radio />}
          label="گران ترین"
        />
        <FormControlLabel
          value="ارزان ترین"
          control={<Radio />}
          label="ارزان ترین"
        />
        <FormControlLabel value="همه" control={<Radio />} label="همه" />
      </RadioGroup>
    </FormControl>
  );
}
