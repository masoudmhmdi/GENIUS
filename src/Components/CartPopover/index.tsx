import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Badge, Box, Link } from '@mui/material';
import CartCard from '../cartcard';
import { useSelector } from 'react-redux';
import { RootState } from '@/types';
import SmallCartCard from '../smallCartCard';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

export default function CartPopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { cartSlice } = useSelector(
    (state: RootState) => state.persistedReducer
  );

  const numberOfProductInCart = cartSlice.allCart.length;
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  console.log(router.pathname);
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <Badge badgeContent={numberOfProductInCart} color="primary">
          <ShoppingCartRoundedIcon />
        </Badge>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box
          sx={{
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '10px',
          }}
        >
          {cartSlice.allCart?.map((product) => {
            return (
              <SmallCartCard
                cartProductDate={product}
                key={product.product._id}
              />
            );
          })}
          {!!!cartSlice.allCart.length && (
            <Typography align="center">
              هیچ محصولی در سبد خرید شما وجود ندارد
            </Typography>
          )}
          {router.pathname !== '/cart' && (
            <Link href="/cart">
              <Button fullWidth variant="contained">
                <ShoppingCartRoundedIcon />
              </Button>
            </Link>
          )}
        </Box>
      </Popover>
    </Box>
  );
}
