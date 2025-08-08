import React, { Suspense } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import { useSharedContext } from "sharedContext/useSharedContext";

const MfeUser = React.lazy(() => import("MfeUser/MfeUserApp"));

export default function Header() {
  const {sharedState} = useSharedContext();
  return (
    <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
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
            {'Demo Application'}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`Counter: ${sharedState ?? 0}`}
          </Typography>
          <Suspense fallback={<div>Loading User...</div>}>
            <MfeUser />
          </Suspense>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
