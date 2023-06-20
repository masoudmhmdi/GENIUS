import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/dist/client/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        top: '100%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingX: '12px',
      }}
      component={'footer'}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          borderBottom: '1px solid #484848',
          paddingBottom: '12px',
        }}
      >
        <Box>
          <Typography
            align="left"
            sx={{ fontSize: '16px', fontWeight: 'bold', marginY: '8px' }}
          >
            با جینیس
          </Typography>
          <Typography align="left" sx={{ fontSize: '14px', opacity: '0.7' }}>
            اتاق خبر
          </Typography>
          <Typography align="left" sx={{ fontSize: '14px', opacity: '0.7' }}>
            فروش کالا
          </Typography>
          <Typography align="left" sx={{ fontSize: '14px', opacity: '0.7' }}>
            فرصت های شغلی
          </Typography>
        </Box>
        <Box>
          <Typography
            align="left"
            sx={{ fontSize: '16px', fontWeight: 'bold', marginY: '8px' }}
          >
            خدمات مشتریان
          </Typography>
          <Typography align="left" sx={{ fontSize: '14px', opacity: '0.7' }}>
            پرسش های متداول
          </Typography>
          <Typography align="left" sx={{ fontSize: '14px', opacity: '0.7' }}>
            شرایط استفاده
          </Typography>
          <Typography align="left" sx={{ fontSize: '14px', opacity: '0.7' }}>
            حریم خصوصی
          </Typography>
        </Box>
        <Box>
          <Typography
            align="left"
            sx={{ fontSize: '16px', fontWeight: 'bold', marginY: '8px' }}
          >
            راهنمای خرید
          </Typography>
          <Typography align="left" sx={{ fontSize: '14px', opacity: '0.7' }}>
            نحوه تبت سفارش
          </Typography>
          <Typography align="left" sx={{ fontSize: '14px', opacity: '0.7' }}>
            رویه ارسال سفارش
          </Typography>
          <Typography align="left" sx={{ fontSize: '14px', opacity: '0.7' }}>
            شیوه پرداخت
          </Typography>
        </Box>
        <Box>
          <Typography
            align="left"
            sx={{ fontSize: '16px', fontWeight: 'bold', marginY: '8px' }}
          >
            همراه ما باشید
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '30px',
            }}
          >
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <LinkedInIcon />
          </Box>
          <Typography
            align="left"
            sx={{ fontSize: '14px', fontWeight: 'bold', marginY: '8px' }}
          >
            با ثبت ایمیل از جدید ترین تخفیف ها با خبر باشید
          </Typography>
          <Box sx={{ display: 'flex', gap: '4px' }}>
            <TextField
              sx={{
                backgroundColor: 'white',
                height: '36px',
                overflow: 'hidden',
                borderRadius: '2px',
              }}
              inputProps={{ style: { height: '36px' } }}
            />
            <Button variant="contained" color="secondary">
              ثبت
            </Button>
          </Box>
        </Box>
      </Toolbar>
      <Typography sx={{ fontSize: '14px', opacity: '0.7', paddingY: '6px' }}>
        برای استفاده از مطالب جینیس شاپ داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست
      </Typography>
    </AppBar>
  );
}
