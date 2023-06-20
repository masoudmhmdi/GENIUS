import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 200, maxHeight: 300 }}>
      <CardActionArea>
        <CardMedia
          sx={{ borderRadius: '12px', padding: '20px' }}
          component="img"
          image="./headphone.png"
        />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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
            <ShoppingCartIcon />
          </Button>
          <Box>
            <Typography>name</Typography>
            <Typography>price</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
