import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const BookTable = ({ data }) => {
  const handleAddToCart = (book) => {
    console.log("Adding to cart:", book);
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 150px)', width: '80%' }}>
      <Table stickyHeader sx={{ tableLayout: 'fixed', minWidth: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '10%' }}>Cover</TableCell>
            <TableCell sx={{ width: '25%' }}>Title</TableCell>
            <TableCell sx={{ width: '20%' }}>Authors</TableCell>
            <TableCell sx={{ width: '15%' }}>First Published</TableCell>
            <TableCell sx={{ width: '15%' }}>Genre</TableCell>
            <TableCell sx={{ width: '10%' }}>Price (USD)</TableCell>
            <TableCell sx={{ width: '5%' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item, index) => {
            const work = item.work;
            return (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                  '&:hover': { backgroundColor: '#e0e0e0' }
                }}
              >
                <TableCell align="center">
                  <img
                    src={work.cover_image}
                    alt={work.title}
                    style={{ height: '60px', borderRadius: '4px' }}
                  />
                </TableCell>
                <TableCell>{work.title}</TableCell>
                <TableCell>{work.author_names?.join(', ')}</TableCell>
                <TableCell>{work.first_publish_year}</TableCell>
                <TableCell>{work.genre}</TableCell>
                <TableCell>${work.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(item)}
                    sx={{ '&:hover': { bgcolor: 'secondary.main' } }}
                  >
                    Add to Cart
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookTable;
