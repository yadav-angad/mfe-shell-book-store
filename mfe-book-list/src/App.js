import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Avatar, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useSharedContext } from "sharedContext/useSharedContext";
const App = () => {
  const [counter, setCounter] = useState(0);
  const { value, updateSharedState } = useSharedContext();
  const { bookList } = useSelector((state) => state?.bookList);
  console.log("Books in MFE1 :", bookList ?? {});

  const handleAddToCart = (book) => {
    console.log("Adding to cart:", book);
  };

  const columns = [
    {
      field: 'cover',
      headerName: 'Cover',
      width: 80,
      renderCell: (params) => (
        <Avatar src={params.value} variant="square" sx={{ width: 50, height: 70 }} />
      )
    },
    { field: 'title', headerName: 'Title', width: 220 },
    {
      field: 'authors',
      headerName: 'Authors',
      width: 250,
      renderCell: (params) => (
        <Typography variant="body2">{params.value.join(', ')}</Typography>
      )
    },
    { field: 'year', headerName: 'Published', width: 100, type: 'number' },
    { field: 'price', headerName: 'Price ($)', width: 100, type: 'number' },
    { field: 'action', headerName: 'Action', width: 160, renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleAddToCart(params.row)} sx={{'&:hover': { bgcolor: 'secondary.main' }}}>
          Add to Cart
        </Button>
      )}
  ];

  const rows = bookList?.map((book, index) => ({
    id: index,
    cover: book.work.cover_image,
    title: book.work.title,
    authors: book.work.author_names,
    year: book.work.first_publish_year,
    price: book.work.price
  }));


  return (
    <>
      {/* <h1>Remote 1's counter: {counter} : {value}</h1>
      <button onClick={() => { updateSharedState(counter => counter + 1); setCounter(counter => counter + 1) }}>increment</button> */}
      <Box sx={{ height: 500, width: 'auto', p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Book List ({bookList?.numFound} Found)
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default App;
