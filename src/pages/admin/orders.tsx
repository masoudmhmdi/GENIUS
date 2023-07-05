import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import AdminLayout from '@/Layouts/AdminLayout/AdminLayout';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useGetOrders } from '@/api/services/useGetOrders';
import { useDispatch, useSelector } from 'react-redux';
import next from 'next/types';
import { changeStatus, setPage } from '@/Store/slice/orderPaginate.slice';
import { RootState } from '@/types';
import PanelAdminSkeleton from '@/Components/panelAdminSkeleton';
import ShowOrderDownDrawer from '@/Components/ShowOrderDownDrawer';

const columns: GridColDef[] = [
  {
    field: 'user',
    flex: 1,
    headerName: ' نام کاربر',
    width: 150,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return <div>{row.user.username}</div>;
    },
  },
  {
    field: 'deliveryDate',
    flex: 1,
    headerName: 'تاریخ سفارش ',
    width: 150,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return (
        <div>
          {new Date(row.createdAt).toLocaleString('fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      );
    },
  },

  {
    field: 'totalPrice',
    flex: 1,
    headerName: 'مجموع قیمت',
    width: 150,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: '',
    // headerName: 'مشاهده جزئیات',
    flex: 1,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return <ShowOrderDownDrawer orderInfo={row} />;
    },
  },
];

export default function Orders() {
  const orderPaginate = useSelector((state: RootState) => state.orderPaginate);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetOrders();
  if (isLoading) return <PanelAdminSkeleton />;

  return (
    <Box sx={{ marginTop: '40px', paddingX: '12px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingX: '12px',
        }}
      >
        <Typography variant="h4">سفارشات</Typography>

        <Select
          variant="standard"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={(e) => {
            dispatch(changeStatus(e.target.value));
          }}
          value={orderPaginate.deliveryStatus}
        >
          <MenuItem value={'all'}> همه</MenuItem>
          <MenuItem value={false as any}>درحال انجام</MenuItem>
          <MenuItem value={true as any}>به اتمام رسیده</MenuItem>
        </Select>
      </Box>
      <Box sx={{ marginTop: '6px' }} style={{ height: '550px', width: '100%' }}>
        <DataGrid
          sx={{
            '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
              outline: 'none !important',
            },
          }}
          rows={data.data.orders}
          loading={isLoading}
          columns={columns}
          paginationMode="server"
          getRowId={(row) => row._id}
          rowCount={data.total}
          pageSizeOptions={[5, 10, 20]}
          onPaginationModelChange={(w) => dispatch(setPage(w))}
          paginationModel={orderPaginate}
        />
      </Box>
    </Box>
  );
}

Orders.getLayout = function pageLayout(page: React.ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};
