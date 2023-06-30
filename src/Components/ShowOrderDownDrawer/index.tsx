import { Box, Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import AddProductForm from '../AddProductForm';
import ShowOrderDetailForm from '../ShowOrderDetailForm';

function ShowOrderDownDrawer({ orderInfo }: any) {
  const [open, setOpen] = useState(false);
  console.log(orderInfo);
  return (
    <Box>
      <Box>
        <Button
          onClick={() => setOpen(true)}
          size="large"
          variant="contained"
          color="success"
        >
          جزئیات
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
            maxHeight: '750px',
          }}
        >
          <ShowOrderDetailForm orderInfo={orderInfo} />
        </Box>
      </Drawer>
    </Box>
  );
}

export default ShowOrderDownDrawer;
