/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AdminLayout from '@/Layouts/AdminLayout/AdminLayout';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/types';
import PanelAdminSkeleton from '@/Components/panelAdminSkeleton';
import useGetProducts from '@/api/services/useGetProducts';
import Image from 'next/image';
import {
  handleSortingProducts,
  productSetPage,
} from '@/Store/slice/products.slice';
import DownDrawer from '@/Components/AddProductDownDrawer';
import AddProductForm from '@/Components/AddProductForm';
import MyModal from '@/Components/Modal';
import EditProductForm from '@/Components/EditProductForm';
import AddProductDownDrawer from '@/Components/AddProductDownDrawer';
import EditProductDownDrawer from '@/Components/EditProductDownDrawer';

const columns: GridColDef[] = [
  {
    field: 'image',
    flex: 1,
    align: 'center',
    headerName: 'تصویر',
    headerAlign: 'center',
    sortable: false,
    minWidth: 150,
    renderCell: ({ row }) => {
      return (
        <Box sx={{ minWidth: '150px', height: '150px', position: 'relative' }}>
          <img
            src={row.images[0]}
            // fill
            alt="product-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      );
    },
  },
  {
    field: 'name',
    headerName: 'نام',
    width: 200,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
  },

  {
    field: 'brand',
    headerName: 'دسته بندی',
    width: 150,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return <div>{`${row.subcategory.name}/${row.category.name}`}</div>;
    },
  },

  {
    field: 'edit',
    headerName: '',
    flex: 1,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return <EditProductDownDrawer productInfo={row} />;
    },
  },
  {
    field: 'delete',
    headerName: '',
    flex: 1,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: ({ row }) => {
      return (
        <MyModal
          btnText="حذف"
          btnProps={{ color: 'error', variant: 'contained' }}
          id={row._id}
        />
      );
    },
  },
];

export default function Product() {
  const orderPaginate = useSelector((state: RootState) => state.productsSlice);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProducts();

  if (isLoading) return <PanelAdminSkeleton />;
  console.log(data);
  const products = data.data.products;
  console.log(orderPaginate);

  return (
    <Box sx={{ marginTop: '40px', paddingX: '12px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4">محصولات</Typography>
        <AddProductDownDrawer />
      </Box>
      <Box sx={{ marginTop: '6px' }} style={{ height: '550px', width: '100%' }}>
        <DataGrid
          sx={{
            '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
              outline: 'none !important',
            },
          }}
          rowHeight={150}
          rows={products}
          loading={isLoading}
          columns={columns}
          paginationMode="server"
          sortingMode="server"
          onSortModelChange={(i) => dispatch(handleSortingProducts(i))}
          getRowId={(row) => row._id}
          rowCount={data.total}
          pageSizeOptions={[5, 10, 20]}
          onPaginationModelChange={(w) => dispatch(productSetPage(w))}
          paginationModel={orderPaginate}
        />
      </Box>
    </Box>
  );
}

Product.getLayout = function pageLayout(page: React.ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};
