/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AdminLayout from '@/Layouts/AdminLayout/AdminLayout';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IProductFromBack, RootState } from '@/types';
import PanelAdminSkeleton from '@/Components/panelAdminSkeleton';
import useGetProducts from '@/api/services/useGetProducts';
import {
  handleSortingProducts,
  productSetPage,
} from '@/Store/slice/products.slice';
import useParallelEditProduct from '@/api/services/useParallelEditProduct';

const columns: GridColDef[] = [
  {
    field: 'image',
    flex: 1,
    align: 'center',
    headerName: 'تصویر',
    headerAlign: 'center',
    sortable: false,
    width: 150,
    renderCell: ({ row }) => {
      return (
        <Box sx={{ width: '150px', height: '150px' }}>
          <img
            src={`${row.images[0]}`}
            alt="product-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      );
    },
  },
  {
    field: 'name',
    flex: 1,
    headerName: 'کالا',
    width: 200,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
  },

  {
    field: 'price',
    editable: true,
    flex: 1,
    headerName: 'قیمت',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    type: 'number',
  },
  {
    field: 'quantity',
    editable: true,
    flex: 1,
    headerName: 'موجودی',
    width: 150,
    headerAlign: 'center',
    type: 'number',
    align: 'center',
  },
];

export default function Inventory() {
  const orderPaginate = useSelector((state: RootState) => state.productsSlice);
  const [editedProduct, setEditedProduct] = React.useState<
    [] | IProductFromBack[]
  >([]);
  const { field, sort } = orderPaginate;
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProducts();
  const { mutate, isLoading: mutateLoading } = useParallelEditProduct();
  if (isLoading) return <PanelAdminSkeleton />;

  const products = data.data.products;

  return (
    <Box sx={{ marginTop: '40px', paddingX: '12px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingX: '12px',
        }}
      >
        <Typography variant="h4">موجودی</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Button
            variant="contained"
            onClick={() => {
              mutate(editedProduct);
            }}
          >
            ذخیره
          </Button>
          {mutateLoading && <CircularProgress />}
        </Box>
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
          sortModel={[{ field, sort }]}
          getRowId={(row) => row._id}
          rowCount={data.total}
          pageSizeOptions={[5, 10, 20]}
          onPaginationModelChange={(w) => dispatch(productSetPage(w))}
          paginationModel={orderPaginate}
          processRowUpdate={(updatedRow) =>
            setEditedProduct((prev) => [...prev, updatedRow])
          }
        />
      </Box>
    </Box>
  );
}

Inventory.getLayout = function pageLayout(page: React.ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};
