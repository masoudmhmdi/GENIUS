import { IOrder } from '@/types';
import { Box, Typography } from '@mui/material';
import React from 'react';

function ShowOrderDetailForm({ orderInfo }: { orderInfo: IOrder }) {
  return (
    <Box sx={{ height: '400px' }}>
      <Typography sx={{ paddingY: '12px' }} fontWeight={'bold'} variant="h5">
        جزئیات سفارش:
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <Typography>نام:{orderInfo.user.firstname}</Typography>
        <Typography>نام خانوادگی:{orderInfo.user.firstname}</Typography>
        <Typography> ادرس:{orderInfo.user.address}</Typography>
        <Typography> شماره تماس:{orderInfo.user.phoneNumber}</Typography>
        <Typography> نام کاربری:{orderInfo.user.username}</Typography>
        <Typography>
          تاریخ ثبت سفارش:
          {new Date(orderInfo.user.createdAt).toLocaleString('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Typography>
      </Box>
    </Box>
  );
}
export default ShowOrderDetailForm;
