import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { theme } from '@/theme';
import 'react-multi-date-picker/styles/colors/analog_time_pocker_coustom.css';
import { useDispatch } from 'react-redux';
import { setDeliveryDate } from '@/Store/slice/cart.slice';

function SubmitOrderForm() {
  const { user } = window && JSON.parse(localStorage.getItem('data')!);
  const dispatch = useDispatch();

  return (
    <Box
      component={'form'}
      sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
    >
      <Typography variant="h4" align="center">
        نهایی کردن خرید
      </Typography>
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
          <DatePicker
            calendar={persian}
            onChange={(e) => {
              dispatch(setDeliveryDate(e?.valueOf()));
            }}
            locale={persian_fa}
            calendarPosition="bottom-right"
            className="coustom"
            placeholder="تاریخ تحویل"
            style={{
              width: '100%',
              borderRadius: '4px',
              height: '50px',
              color: theme.palette.primary.main,
            }}
          />
          <TextField
            disabled
            value={user.address}
            multiline
            rows={2}
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
      <Button fullWidth variant="contained">
        <a
          style={{ textDecoration: 'none', color: 'white' }}
          href="http://127.0.0.1:5500/index.html"
        >
          ثبت نهایی
        </a>
      </Button>
    </Box>
  );
}

export default SubmitOrderForm;
