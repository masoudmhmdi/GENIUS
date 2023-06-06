import { Box, Skeleton } from '@mui/material';
import React from 'react';

function PanelAdminSkeleton() {
  return (
    <Box sx={{ marginTop: '40px', paddingX: '12px' }}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '2rem', width: '200px' }} />

      <Skeleton variant="rounded" sx={{ height: 300, width: '100%' }} />
    </Box>
  );
}

export default PanelAdminSkeleton;
