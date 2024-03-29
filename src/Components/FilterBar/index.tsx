import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { brandSetter, priceSetter } from '@/Store/slice/singleCategory.slice';
import { RootState } from '@/types';

type IFilterProps = {
  setter: React.Dispatch<
    React.SetStateAction<
      | {}
      | {
          sort: string;
          brand: string;
        }
    >
  >;
};

export default function FilterBar() {
  const dispatch = useDispatch();
  const { brand, sort } = useSelector(
    (state: RootState) => state.singleCategory
  );
  console.log(brand);

  const handleRadioPriceChange = (value: string) => {
    dispatch(priceSetter(value));
  };
  const handleRadioBrandChange = (value: string) => {
    dispatch(brandSetter(value));
  };
  return (
    <Box>
      <Typography sx={{ padding: '8px' }} variant="h5" fontWeight={'bold'}>
        فیلتر ها
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>قیمت</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => handleRadioPriceChange(e.target.value)}
              value={sort}
            >
              <FormControlLabel
                value="-price"
                control={<Radio />}
                label="گران ترین"
              />
              <FormControlLabel
                value="price"
                control={<Radio />}
                label="ارزان ترین"
              />
              <FormControlLabel value="" control={<Radio />} label="هیچ کدام" />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>برند</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => handleRadioBrandChange(e.target.value)}
            value={brand}
          >
            <FormControlLabel value="" control={<Radio />} label="همه" />
            <FormControlLabel value="apple" control={<Radio />} label="اپل" />
            <FormControlLabel
              value="sumsung"
              control={<Radio />}
              label="سامسونگ"
            />
            <FormControlLabel
              value="xiaomi"
              control={<Radio />}
              label="شیائومی"
            />
            <FormControlLabel value="hp" control={<Radio />} label="اچ پی" />
            <FormControlLabel
              value="huawei"
              control={<Radio />}
              label="هووای"
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
