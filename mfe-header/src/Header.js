import React, { Suspense } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Grid } from '@mui/material';
import { useSharedContext } from "sharedContext/useSharedContext";

const MfeUser = React.lazy(() => import("MfeUser/MfeUserApp"));
const MfeCheckout = React.lazy(() => import("MfeCheckout/MfeCheckoutApp"));

export default function Header() {
  const { sharedState } = useSharedContext();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {'Online Book Store'}
        </Typography>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {`Counter: ${sharedState ?? 0}`}
            </Typography> */}
        <Suspense fallback={<div>Loading User...</div>}>
          <MfeUser />
        </Suspense>
       <Typography variant="h6">
          {`Account`}
        </Typography>
        <Typography variant="h6" sx={{ color: 'gray', marginLeft: '10px', marginRight: '10px' }}>
          {` | `}
        </Typography>
        <Typography variant="h6">
          {`Help`}
        </Typography>
        <Typography variant="h6" sx={{ color: 'gray', marginLeft: '10px', marginRight: '10px' }}>
          {` | `}
        </Typography>
        <MfeCheckout />
      </Toolbar>
    </AppBar>
  );
}
