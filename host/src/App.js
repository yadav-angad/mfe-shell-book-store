import React, { Suspense } from "react";

import { useSharedContext } from "sharedContext/useSharedContext";

const MfeHeader = React.lazy(() => import("MfeHeader/MfeHeaderApp"));

export default function () {
  const { value } = useSharedContext();
  console.log("Shared Context Value 10 :", value);
  return (
    <>
      <Suspense fallback={<div>Loading MFE1...</div>}>
        <MfeHeader />
        <h1>Host Application</h1>
      <p>Shared State: {value}</p>
      </Suspense>
    </>
  );
}
