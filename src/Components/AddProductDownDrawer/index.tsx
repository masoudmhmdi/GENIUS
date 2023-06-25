import { Box, Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import AddProductForm from '../AddProductForm';

function AddProductDownDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box>
        <Button
          onClick={() => setOpen(true)}
          size="large"
          variant="contained"
          color="success"
        >
          اضافه کردن محصول
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
            maxHeight: '550px',
          }}
        >
          <AddProductForm setOpen={setOpen} />
        </Box>
      </Drawer>
    </Box>
  );
}

export default AddProductDownDrawer;
