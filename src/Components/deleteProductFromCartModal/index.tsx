import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SubmitOrderForm from '../submitOrderForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/types';
import { deleteProduct } from '@/Store/slice/cart.slice';
import { handleDeleteModal } from '@/Store/slice/modalAndToast.slice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '100%',
    md: '40%',
  },
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: '20px 24px 24px 24px',
  borderRadius: '6px',
  outline: 'none',
};

export default function DeleteProductFromCartModal({ id }: any) {
  const { deleteModal } = useSelector(
    (state: RootState) => state.modalAndToast
  );
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => dispatch(handleDeleteModal(false));

  return (
    <div>
      <Modal
        open={deleteModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography
              sx={{ paddingBottom: '24px' }}
              variant="h5"
              align="center"
            >
              آیا از حذف این محصول مطمئنید
            </Typography>
            <Box
              sx={{
                marginY: '6px',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  dispatch(deleteProduct(id));
                  dispatch(handleDeleteModal(false));
                }}
              >
                بله
              </Button>
              <Button
                variant="contained"
                onClick={() => dispatch(handleDeleteModal(false))}
              >
                خیر
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
