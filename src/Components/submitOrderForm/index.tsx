import { Box, TextField } from '@mui/material';
import React from 'react';

function SubmitOrderForm() {
  const { user } = window && JSON.parse(localStorage.getItem('data')!);
  console.log(user);
  return (
    <Box sx={{ display: 'flex', gap: '40px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          width: '50%',
        }}
      >
        <TextField disabled value={user.firstname} label={'نام'} fullWidth />
        <TextField label={'تاریخ تحویل'} fullWidth />
        <TextField
          disabled
          value={user.address}
          multiline
          rows={2}
          maxRows={4}
          label={'ادرس'}
          fullWidth
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          width: '50%',
        }}
      >
        <TextField
          disabled
          value={user.lastname}
          label={'نام خانوادگی'}
          fullWidth
        />
        <TextField
          disabled
          value={user.phoneNumber}
          label={'شماره تماس'}
          fullWidth
        />
      </Box>
    </Box>
  );
}

export default SubmitOrderForm;
