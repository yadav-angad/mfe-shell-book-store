import React, { Suspense } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as BookStore from './book.json';

import { useSharedContext } from "sharedContext/useSharedContext";

const MfeHeader = React.lazy(() => import("MfeHeader/MfeHeaderApp"));
const MfeBookGenres = React.lazy(() => import("MfeBookGenres/MfeBookGenresApp"));

export default function () {
  const { value } = useSharedContext();
  const { bookList } = useSelector((state) => state?.bookList);
  const dispatch = useDispatch();
  console.log("Books in Host App :", BookStore?.books);
  console.log("Shared Context Value 10 :", value);

  React.useEffect(() => {
    dispatch({ type: "SET_BOOK", payload: BookStore?.books });
  }, [BookStore?.books]);

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
