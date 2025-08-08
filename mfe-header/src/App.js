import React, { useState } from 'react';
import { useSharedContext } from "sharedContext/useSharedContext";
import Header from './Header';
const App = () => {
  const [counter, setCounter] = useState(0);
  const {value, updateSharedState} = useSharedContext();
  return (
    <>
       <Header />
    </>
  );
};

export default App;
