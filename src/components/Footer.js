import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar
        position="fixed"
        sx={{ background: '#b3e5fc', top: 'auto', bottom: 0, color: 'black' }}
      >
        <Typography sx={{fontWeight: 'bold', fontSize: 21, textAlign: 'center'}}>
          Зв'яжіться з нами
        </Typography>
        
        <p style={{textAlign: 'center', marginBlock: 10}}><a href= "mailto:krotulyanejmot@gmail.com"><img src='./email.jpg' style={{ width: 40, height: 40}}/></a></p>

        <div style={{ width: 'auto', height: 'auto', textAlign: 'center', marginTop: 10, fontStyle: 'italic'}}>
          &copy; Copyright 2022. All Rights Reserved. 
        </div>
      </AppBar>
    </Box>
  );
};
