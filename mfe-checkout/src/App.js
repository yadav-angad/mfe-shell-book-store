import React, { useState } from 'react';
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
  IconButton
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { EventBusService } from "sharedContext/EventBusService";

const App = () => {
  const { value, updateSharedState } = useSharedContext();
  const cart = store.getState().cart.map(item => ({
    ...item,
    quantity: item.quantity || 1 // default quantity = 1
  }));

  const [cartItems, setCartItems] = useState(cart);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateQuantity = (index, newQty) => {
    if (newQty < 1) return; // prevent zero or negative
    const updated = [...cartItems];
    updated[index].quantity = newQty;
    setCartItems(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EventBusService.fire('MESSAGE', {
      detail: {
        message: `Order placed for ${form.name}!\nTotal: $${total.toFixed(2)}`,
        type: 'success',
      }
    });
  };

  return (
    <Card sx={{ maxWidth: 800, margin: "20px auto", p: 2, bgcolor: "#F2F2f2" }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Grid container spacing={2}>
          {cartItems.map((book, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ display: "flex", alignItems: "center", p: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 80, height: 120, objectFit: "cover", mr: 2 }}
                  image={book.cover}
                  alt={book.title}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{book.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    by {book?.authors?.join(", ")}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    ${book.price.toFixed(2)} × {book.quantity} = ${(book.price * book.quantity).toFixed(2)}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(index, book.quantity - 1)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 1 }}>{book.quantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(index, book.quantity + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 2 }}>
          Total: ${total.toFixed(2)}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2, p: 2, borderRadius: 1 }}>
          <TextField
            name="name"
            label="Full Name"
            variant="outlined"
            value={form.name}
            onChange={handleChange}
            required
            sx={{ bgcolor: 'background.paper' }}
          />
          <TextField
            name="email"
            label="Email Address"
            type="email"
            variant="outlined"
            value={form.email}
            onChange={handleChange}
            required
            sx={{ bgcolor: 'background.paper' }}
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
            sx={{ bgcolor: 'background.paper' }}
          />
          <Button variant="contained" color="primary" type="submit" size="large">
            Place Order
          </Button>
        </Box>
      </Container>
    </Card>
  );
};

export default App;
