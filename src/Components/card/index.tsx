/* eslint-disable react/display-name */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { IProductFromBack } from '@/types';
import { theme } from '@/theme';
import Link from 'next/link';
import Image from 'next/image';
import { forwardRef } from 'react';

export const ProductCard = forwardRef(
  ({ productData }: { productData: IProductFromBack }, ref) => {
    const content = ref ? (
      <Card ref={ref as any} variant="outlined" sx={{ maxWidth: 235 }}>
        <CardActionArea sx={{ width: '100%', height: '100%' }}>
          <Link
            style={{
              textDecoration: 'none',
              color: theme.palette.primary.main,
            }}
            href={`/product/${productData._id}`}
          >
            <CardMedia
              sx={{ borderRadius: '12px', padding: '10px', maxWidth: '100%' }}
              component="img"
              image={productData.images[0]}
            />
            <CardContent
              sx={{ display: 'flex', gap: '6px', flexDirection: 'column' }}
            >
              <Box>
                <Typography align="left">{productData.name}</Typography>
                <Typography align="left" fontWeight={'bold'}>
                  {productData.price}
                  تومان
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  padding: '6px',
                  borderRadius: '6px',
                }}
              >
                <Typography align="center"> جزئیات</Typography>
              </Box>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    ) : (
      <Card variant="outlined" sx={{ maxWidth: 235 }}>
        <CardActionArea sx={{ width: '100%', height: '100%' }}>
          <Link
            style={{
              textDecoration: 'none',
              color: theme.palette.primary.main,
            }}
            href={`/product/${productData._id}`}
          >
            <CardMedia
              sx={{ borderRadius: '12px', padding: '10px', maxWidth: '100%' }}
              component="img"
              image={productData.images[0]}
            />
            <CardContent
              sx={{ display: 'flex', gap: '6px', flexDirection: 'column' }}
            >
              <Box sx={{ flex: '1' }}>
                <Typography align="left" className="card-text">
                  {productData.name}
                </Typography>
                <Typography align="left" fontWeight={'bold'}>
                  {productData.price}
                  تومان
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  padding: '6px',
                  borderRadius: '6px',
                }}
              >
                <Typography align="center"> جزئیات</Typography>
              </Box>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    );

    return content;
  }
);
