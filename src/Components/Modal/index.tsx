import * as React from 'react';
import Box from '@mui/material/Box';
import Button, { ButtonPropsColorOverrides } from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useDeleteProduct from '@/api/services/useDeleteProduct';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type IDeleteModalProps = {
  btnText: string;
  id: string;
  btnProps: {
    color:
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'error'
      | 'info'
      | 'warning'
      | undefined;
    variant: 'contained' | 'outlined' | 'text';
  };
};

export default function MyModal({ btnProps, btnText, id }: IDeleteModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { mutate } = useDeleteProduct();

  return (
    <div>
      <Button size="large" {...btnProps} onClick={handleOpen}>
        {btnText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {' '}
          <Box>
            <Typography variant="h6" align="center">
              آیااز حذف این محصول اطمینان دارید؟
            </Typography>
            <Box
              sx={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Button variant="contained">خیر</Button>
              <Button
                onClick={() => {
                  mutate(id);
                  handleClose();
                }}
                color="error"
                variant="contained"
              >
                بله
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
