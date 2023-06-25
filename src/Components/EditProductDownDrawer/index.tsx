import { handleDowDrawer } from '@/Store/slice/modalAndToast.slice';
import { RootState } from '@/types';
import { Box, Button, Drawer } from '@mui/material';
import React, { ReactNode, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddProductForm from '../AddProductForm';
import EditProductForm from '../EditProductForm';

function EditProductDownDrawer({ productInfo }: { productInfo: any }) {
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
          ویرایش محصول
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
          <EditProductForm productInfo={productInfo} setOpen={setOpen} />
        </Box>
      </Drawer>
    </Box>
  );
}

export default EditProductDownDrawer;
