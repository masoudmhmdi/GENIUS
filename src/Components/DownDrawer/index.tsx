import { Box, Button, Drawer } from '@mui/material';
import React, { ReactNode, useState } from 'react';

function DownDrawer({ children }: { children: ReactNode }) {
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
            maxHeight: '400px',
          }}
        >
          {children}
        </Box>
      </Drawer>
    </Box>
  );
}

export default DownDrawer;
