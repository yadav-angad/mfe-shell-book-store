// HostApp.jsx
import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const MfeCheckout = React.lazy(() => import("MfeCheckout/MfeCheckoutApp"));
const MfeHeader = React.lazy(() => import("MfeHeader/MfeHeaderApp"));

export default function HostApp() {
  return (
    <Router basename="/">
      <Suspense fallback={<div>Loading Header...</div>}>
        <MfeHeader />
      <Routes>
        <Route
          path="/"
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
      </Routes>
      </Suspense>
    </Router>
  );
}
