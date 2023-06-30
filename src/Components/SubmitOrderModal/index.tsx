import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SubmitOrderForm from '../submitOrderForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/types';
import { toast } from 'react-hot-toast';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '100%',
    md: '60%',
  },
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: '20px 24px 24px 24px',
  borderRadius: '6px',
  outline: 'none',
};

export default function SubmitOrderModal() {
  const { cartSlice } = useSelector(
    (state: RootState) => state.persistedReducer
  );
  const numberOfProduct = cartSlice.allCart.length;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        onClick={() => {
          if (!numberOfProduct) {
            toast('هیچ محصولی در سبد خرید نیست');
          } else {
            handleOpen();
          }
        }}
      >
        تکمیل خرید
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SubmitOrderForm />
        </Box>
      </Modal>
    </div>
  );
}
