import React, { useState } from 'react';
import { useSharedContext } from "sharedContext/useSharedContext";
import {
  Container,
  Box,
  Avatar,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

const App = () => {
  const [counter, setCounter] = useState(0);
  const {value, updateSharedState} = useSharedContext();
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let temp = {};
    temp.firstName = formData.firstName ? "" : "First name is required";
    temp.lastName = formData.lastName ? "" : "Last name is required";
    temp.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is not valid";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Profile Updated:", formData);
      alert("Profile saved successfully!");
    }
  };

  return (
    <>
      {/* <button onClick={() => { updateSharedState(counter => counter + 1); setCounter(counter => counter + 1)}}>increment</button> */}
        <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Avatar sx={{ width: 80, height: 80, bgcolor: "primary.main", mb: 2 }}>
            {formData.firstName ? formData.firstName[0] : "U"}
          </Avatar>
          <Typography variant="h5">Edit Profile</Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="bio"
                label="Bio"
                multiline
                rows={4}
                fullWidth
                value={formData.bio}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box mt={3} textAlign="center">
            <Button type="submit" variant="contained" size="large">
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default App;
