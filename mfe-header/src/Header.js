import React, { Suspense } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { Divider, Grid, Link, Menu, MenuItem } from '@mui/material';
import { useSharedContext } from "sharedContext/useSharedContext";
import styled from "styled-components";
import { store } from 'sharedContext/store';
import { useSelector } from "react-redux";

const MfeUser = React.lazy(() => import("MfeUser/MfeUserApp"));
const MfeCheckout = React.lazy(() => import("MfeCheckout/MfeCheckoutApp"));
const basePath = window.location.origin.includes('localhost') ? "http://localhost:3000" : `${window.location.origin}/mfe-shell-book-store/host`;
export default function Header() {
  const { sharedState } = useSharedContext();
  //Initialize the store to access the cart state
  useSelector((state) => state?.cart);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <MenuIcon onClick={handleClick} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
                sx: {
                  py: 0,
                },
              },
            }}
          >
            <Link
              href={`${basePath}/#/user`}
              onClick={handleClose}
              sx={linkStyleUnderLineNone}
            >
              {`My Account`}
            </Link>
            <Link
              href={`${basePath}/#/user`}
              onClick={handleClose}
              sx={linkStyleUnderLineNone}
            >
              {`Purchase Hostory`}
            </Link>
            <Link
              href={`${basePath}/#/user`}
              onClick={handleClose}
              sx={linkStyleUnderLineNone}
            >
              {`About Us`}
            </Link>
            <Link
              href={`${basePath}/#/user`}
              onClick={handleClose}
              sx={linkStyleUnderLineNone}
            >
              {`Help`}
            </Link>
          </Menu>
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Link
            href={`${basePath}`}
            sx={linkStyleUnderLine}
          >
            <HomeIcon />
          </Link>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {'Online Book Store'}
        </Typography>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {`Counter: ${sharedState ?? 0}`}
            </Typography> */}
        <Suspense fallback={<div>Loading User...</div>}>
          <Link
            href={`${basePath}/#/checkout`}
            underline="none" // remove default underline
            sx={linkStyleUnderLine}
          >
            {`Cart (${store?.getState().cart?.length || 0})`}
          </Link>
        </Suspense>
      </Toolbar>
    </AppBar>
  );
}

const linkStyleUnderLine = {
  cursor: "pointer",
  color: "inherit", // inherit from parent or theme
  marginLeft: "10px",
  marginRight: "10px",
  display: 'flex',
  fontSize: (theme) => theme.typography.h6.fontSize,
  fontWeight: (theme) => theme.typography.h6.fontWeight,
  lineHeight: (theme) => theme.typography.h6.lineHeight,
  "&:hover": { textDecoration: "underline" },
}

const linkStyleUnderLineNone = {
  cursor: "pointer",
  color: "inherit", // inherit from parent or theme
  padding: '16px',
  display: 'flex',
  textDecorationLine: 'none',
  'fontFamily': ` "Roboto", "Helvetica", "Arial", sans-serif`,
  fontWeight: 500,
  fontSize: 'Large',
  "&:hover": { textDecorationLine: "none", backgroundColor: '#F2F2F2' },
}
