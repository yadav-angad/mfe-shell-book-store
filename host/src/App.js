import React, { Suspense } from "react";

import { useSharedContext } from "sharedContext/useSharedContext";

const MfeHeader = React.lazy(() => import("MfeHeader/MfeHeaderApp"));
const MfeBookGenres = React.lazy(() => import("MfeBookGenres/MfeBookGenresApp"));

export default function () {
  const { value } = useSharedContext();
  console.log("Shared Context Value 10 :", value);
  return (
    <>
      <Suspense fallback={<div>Loading MFE1...</div>}>
        <MfeHeader />
      </Suspense>
      <Suspense fallback={<div>Loading MFE2...</div>}>
        <MfeBookGenres />
      </Suspense>
    </>
  );
}
