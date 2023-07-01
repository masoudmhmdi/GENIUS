import { Box, Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import AddProductForm from '../AddProductForm';
import FilterBar from '../FilterBar';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

function FilteringDownDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box>
        <Button
          onClick={() => setOpen(true)}
          size="small"
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        >
          <TuneOutlinedIcon />
        </Button>
      </Box>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            gap: '15px',
            flexDirection: 'column',
            marginTop: '10px',
            paddingX: '12px',
            minHeight: '300px',
            maxHeight: '550px',
          }}
        >
          <FilterBar />
        </Box>
      </Drawer>
    </Box>
  );
}

export default FilteringDownDrawer;
