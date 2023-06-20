import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { IProductFromBack } from '@/types';

export default function ProductCard({
  productData,
}: {
  productData: IProductFromBack;
}) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 250, height: 350 }}>
      <CardMedia
        sx={{ borderRadius: '12px', padding: '20px', maxWidth: '100%' }}
        component="img"
        image={productData.images[0]}
      />
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Button
            variant="contained"
            sx={{
              maxWidth: '40px',
              maxHeight: '40px',
              minWidth: '40px',
              minHeight: '40px',
              borderRadius: '5px',
            }}
          >
            <ShoppingCartTwoToneIcon />
          </Button>
        </Box>
        <Box>
          <Typography align="right">{productData.name}</Typography>
          <Typography align="right" fontWeight={'bold'}>
            {productData.price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
