import useEndDelivery from '@/api/services/editOrderDeliveryStatusById';
import { IOrder } from '@/types';
import { Box, Button, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';

const columns: GridColDef[] = [
  {
    field: 'n',
    flex: 1,
    headerName: 'نام محصول',
    width: 150,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return <Typography>{row.product.name}</Typography>;
    },
  },
  {
    field: 'p',
    flex: 1,
    headerName: 'قیمت',
    width: 150,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return <Typography>{row.product.price}</Typography>;
    },
  },
  {
    field: 'count',
    flex: 1,
    headerName: 'تعداد',
    width: 150,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
  },
];
function ShowOrderDetailForm({ orderInfo }: { orderInfo: IOrder }) {
  console.log(orderInfo.deliveryStatus);
  const { mutate } = useEndDelivery();
  return (
    <Box sx={{ height: '450px' }}>
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
          {new Date(orderInfo.createdAt).toLocaleString('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Typography>
      </Box>
      <DataGrid
        sx={{
          '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
            outline: 'none !important',
          },
          marginY: '12px',
          height: '200px',
        }}
        columns={columns}
        getRowId={(row) => row._id}
        rows={orderInfo.products}
      />
      <Button
        fullWidth
        variant="contained"
        disabled={orderInfo.deliveryStatus && true}
        color={orderInfo.deliveryStatus ? 'success' : 'primary'}
        onClick={() => mutate(orderInfo._id)}
      >
        {orderInfo.deliveryStatus
          ? new Date(orderInfo.deliveryDate).toLocaleString('fa-IR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }) + ' تحویل داده شده است '
          : 'تحویل داده شد'}
      </Button>
    </Box>
  );
}
export default ShowOrderDetailForm;
