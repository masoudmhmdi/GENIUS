import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Box } from '@mui/material';
import CartCard from '../cartcard';
import { useSelector } from 'react-redux';
import { RootState } from '@/types';
import SmallCartCard from '../smallCartCard';

export default function CartPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const { cartSlice } = useSelector(
    (state: RootState) => state.persistedReducer
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onMouseEnter={handleClick}
      >
        <ShoppingCartRoundedIcon />
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
        </Box>
      </Popover>
    </div>
  );
}
