// HostApp.jsx
import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { EventBusService } from "sharedContext/EventBusService";
import { Alert, Button } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import "react-toastify/dist/ReactToastify.css";

const MfeCheckout = React.lazy(() => import("MfeCheckout/MfeCheckoutApp"));
const MfeHeader = React.lazy(() => import("MfeHeader/MfeHeaderApp"));
const MfeUser = React.lazy(() => import("MfeUser/MfeUserApp"));

const basePath = window.location.origin.includes('localhost') ? "/" : `${window.location.origin}/mfe-shell-book-store/host`;

export default function HostApp() {
  const showAlert = (event) => {
    const { detail } = event;
    toast(<Alert severity={detail?.type}>{detail?.message}</Alert>);
  };

  React.useEffect(() => {
    EventBusService.subscribe("MESSAGE", showAlert);
    return () => {
      EventBusService.unsubscribe("MESSAGE", showAlert);
    };
  }, [showAlert]);

  return (
    <Router basename={basePath}>
      <Suspense fallback={<div>Loading Header...</div>}>
        <MfeHeader />
        <ToastContainer />
        <Routes>
          <Route
            path={basePath}
            element={
              <Home />
            }
          />
          <Route
            path="/checkout"
            element={
              <React.Suspense fallback={<div>Loading MFE...</div>}>
                <MfeCheckout />
              </React.Suspense>
            }
          />
          <Route
            path="/user"
            element={
              <React.Suspense fallback={<div>Loading MFE...</div>}>
                <MfeUser />
              </React.Suspense>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
