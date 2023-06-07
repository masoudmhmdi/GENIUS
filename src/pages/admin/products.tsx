/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import AdminLayout from '@/Layouts/AdminLayout/AdminLayout';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useGetOrders } from '@/api/services/useGetOrders';
import { RootState } from '@/types';
import PanelAdminSkeleton from '@/Components/panelAdminSkeleton';
import useGetProducts from '@/api/services/useGetProducts';
import { setPage } from '@/Store/slice/orderPaginate.slice';
import Image from 'next/image';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Column 1', width: 200 },
  { field: 'price', headerName: 'Column 2', width: 150 },
  { field: 'quantity', headerName: 'Column 2', width: 150 },
  { field: 'brand', headerName: 'Column 2', width: 150 },
  {
    field: 'image',
    headerName: 'image',
    width: 150,
    renderCell: ({ row }) => {
      console.log(row);
      const imageLink = row.images[0].split('8000');

      return (
        <Box sx={{ width: '150px', height: '150px' }}>
          <img
            src={`${row.images[0]}`}
            alt="product-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          ;
        </Box>
      );
    },
  },
];

export default function Product() {
  const orderPaginate = useSelector((state: RootState) => state.orderPaginate);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProducts();
  if (isLoading) return <PanelAdminSkeleton />;
  const products = data.data.products;
  console.log(data);

  return (
    <Box sx={{ marginTop: '40px', paddingX: '12px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingX: '12px',
        }}
      >
        <Typography variant="h4">محصولات</Typography>
      </Box>
      <Box sx={{ marginTop: '6px' }} style={{ height: '100%', width: '100%' }}>
        <DataGrid
          rowHeight={150}
          rows={products}
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

Product.getLayout = function pageLayout(page: React.ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};
