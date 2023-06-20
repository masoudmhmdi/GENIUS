import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { IProductFromBack } from '@/types';
import { theme } from '@/theme';
import Link from 'next/link';

export default function ProductCard({
  productData,
}: {
  productData: IProductFromBack;
}) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 200, height: 300 }}>
      <CardActionArea sx={{ width: '100%', height: '100%' }}>
        <Link
          style={{ textDecoration: 'none', color: theme.palette.primary.main }}
          href={`/product/${productData._id}`}
        >
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
              <Box
                sx={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  color: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '5px',
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                {productData.rating.rate}
              </Box>
            </Box>
            <Box>
              <Typography align="right">{productData.name}</Typography>
              <Typography align="right" fontWeight={'bold'}>
                {productData.price}
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
