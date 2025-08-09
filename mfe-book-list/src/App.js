import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Avatar, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useSharedContext } from "sharedContext/useSharedContext";
import { useDispatch } from 'react-redux';

const App = () => {
  const { bookList } = useSelector((state) => state?.bookList);
  const { genres } = useSharedContext();
  const dispatch = useDispatch(); 

  const handleAddToCart = (book) => {
    console.log("Adding to cart:", book);
    dispatch({ type: 'SET_CART', payload: book });
  };

  const filteredBooks = genres && genres !== 'ALL' ? bookList.filter(
    (book) => book.work.genre === genres
  ) : bookList;

  const columns = [
    {
      field: 'cover',
      headerName: 'Cover',
      width: 80,
      renderCell: (params) => (
        <Avatar src={params.value} variant="square" sx={{ width: 70, height: 70 }} />
      )
    },
    { field: 'title', headerName: 'Title', width: 220 },
    {
      field: 'authors',
      headerName: 'Authors',
      width: 250,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ wordWrap: 'break-word', textWrap: 'wrap', textAlign: 'left' }}>{params.value.join(', ')}</Typography>
      )
    },
    { field: 'genre', headerName: 'Genre', width: 150 },
    { field: 'year', headerName: 'Published', width: 100, type: 'number' },
    { field: 'price', headerName: 'Price ($)', width: 100, type: 'number' },
    {
      field: 'action', headerName: 'Action', width: 160, renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleAddToCart(params.row)} sx={{ '&:hover': { bgcolor: 'secondary.main' } }}>
          Add to Cart
        </Button>
      )
    }
  ];

  const rows = filteredBooks?.map((book, index) => ({
    id: index,
    cover: book.work.cover_image,
    title: book.work.title,
    authors: book.work.author_names,
    genre: book.work.genre,
    year: book.work.first_publish_year,
    price: book.work.price
  }));


  return (
    <>
      {/* <h1>Remote 1's counter: {counter} : {value}</h1>
      <button onClick={() => { updateSharedState(counter => counter + 1); setCounter(counter => counter + 1) }}>increment</button> */}
      <Box sx={{ height: 'calc(100vh - 180px)', flexGrow: 1, padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          {`Book List (${bookList?.length} Found)`}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns.map(col => ({
            ...col,
            headerAlign: 'center'
          }))}
          disableRowSelectionOnClick
          pagination={false}
          sx={{
            '& .MuiDataGrid-cell': {
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center'
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#f5f5f5'
            }
          }}
        />
      </Box>
    </>
  );
};

export default App;
