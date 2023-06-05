import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import AdminLayout from '@/Layouts/AdminLayout/AdminLayout';
import { Box, Typography } from '@mui/material';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function Inventory() {
  return (
    <Box sx={{ marginTop: '40px', paddingX: '12px' }}>
      <Box>
        <Typography variant="h4">موجودی</Typography>
      </Box>
      <Box sx={{ marginTop: '6px' }} style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
}

Inventory.getLayout = function pageLayout(page: React.ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};
