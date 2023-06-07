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

const columns: GridColDef[] = [
  { field: 'user', headerName: 'user id', width: 150 },
  { field: '_id', headerName: 'order id', width: 150 },
  { field: 'deliveryDate', headerName: 'deliveryDate ', width: 150 },
  { field: 'deliveryStatus', headerName: 'deliveryStatus', width: 150 },
  { field: 'totalPrice', headerName: 'totalPrice', width: 150 },
];

export default function Orders() {
  const orderPaginate = useSelector((state: RootState) => state.orderPaginate);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetOrders();
  if (isLoading) return <PanelAdminSkeleton />;
  console.log(orderPaginate);

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
          onChange={() => {
            dispatch(changeStatus());
          }}
          defaultValue={10}
        >
          <MenuItem value={10}>درحال انجام</MenuItem>
          <MenuItem value={20}>به اتمام رسیده</MenuItem>
        </Select>
      </Box>
      <Box sx={{ marginTop: '6px' }} style={{ height: '400px', width: '100%' }}>
        <DataGrid
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
