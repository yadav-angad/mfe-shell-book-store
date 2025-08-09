import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSharedContext } from "sharedContext/useSharedContext";
const App = () => {
  const [counter, setCounter] = useState(0);
  const {value, updateSharedState} = useSharedContext();
  return (
    <>
    <Typography variant="h6" onClick={() => { updateSharedState(counter => counter + 1); setCounter(counter => counter + 1) }} sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
      {`Account`}
    </Typography>
      {/* <button onClick={() => { updateSharedState(counter => counter + 1); setCounter(counter => counter + 1)}}>increment</button> */}
    </>
  );
};

export default App;
