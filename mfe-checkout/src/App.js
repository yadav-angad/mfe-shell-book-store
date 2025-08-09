import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSharedContext } from "sharedContext/useSharedContext";
import { store } from 'sharedContext/store';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
  Divider,
  Box,
} from "@mui/material";

const App = () => {
  const [counter, setCounter] = useState(0);
  const { value, updateSharedState } = useSharedContext();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const cart = store.getState().cart;
  console.log('Cart contents:', store.getState().cart);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const total = cart?.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for ${form.name}!\nTotal: $${total.toFixed(2)}`);
  };
  return (
    <>
      <Typography variant="h6" onClick={() => { setShowCheckoutForm(true); updateSharedState(counter => counter + 1); setCounter(counter => counter + 1) }} sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
        {`Cart (${store.getState().cart?.length || 0})`}
      </Typography>
      {/* <button onClick={() => { updateSharedState(counter => counter + 1); setCounter(counter => counter + 1)}}>increment</button> */}
      {showCheckoutForm && (
        <Container maxWidth="md" sx={{ py: 4 }}>
          {/* Cart Items */}
          <Grid container spacing={2}>
            {cart?.map((book, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ display: "flex", alignItems: "center", p: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 80, height: 120, objectFit: "cover", mr: 2 }}
                    image={book.cover_image}
                    alt={book.title}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      by {book?.author_names?.join(", ")}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      ${book.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Total */}
          <Typography variant="h6" sx={{ mb: 2 }}>
            Total: ${total.toFixed(2)}
          </Typography>

          {/* Checkout Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2 }}>
            <TextField
              name="name"
              label="Full Name"
              variant="outlined"
              value={form.name}
              onChange={handleChange}
              required
            />
            <TextField
              name="email"
              label="Email Address"
              type="email"
              variant="outlined"
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextField
              name="address"
              label="Shipping Address"
              multiline
              rows={3}
              variant="outlined"
              value={form.address}
              onChange={handleChange}
              required
            />
            <Button variant="contained" color="primary" type="submit" size="large">
              Place Order
            </Button>
          </Box>
        </Container>
      )}
    </>
  );
};

export default App;
