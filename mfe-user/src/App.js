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
  MenuItem,
  Card
} from "@mui/material";
import { store } from 'sharedContext/store';
import { EventBusService } from "sharedContext/EventBusService";

const App = () => {
  const { value, updateSharedState } = useSharedContext();

  const [formData, setFormData] = useState(store.getState().user || {});

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let temp = {};
    temp.userName = formData.userName ? "" : "Username is required";
    temp.firstName = formData.firstName ? "" : "First name is required";
    temp.lastName = formData.lastName ? "" : "Last name is required";
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid";
    temp.phone = formData.phone ? "" : "Phone number is required";
    temp.gender = formData.gender ? "" : "Please select gender";
    temp.address = formData.address ? "" : "Address is required";

    if (formData.currentPassword || formData.newPassword || formData.confirmPassword) {
      temp.currentPassword = formData.currentPassword ? "" : "Current password is required";
      temp.newPassword =
        formData.newPassword.length >= 6 ? "" : "New password must be at least 6 characters";
      temp.confirmPassword =
        formData.newPassword === formData.confirmPassword ? "" : "Passwords do not match";
    }

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      EventBusService.fire('MESSAGE', {
        detail: {
          message: 'INFO',
        }
      });
    console.log("Profile Updated:", formData);
  }
};

return (
  <Card sx={{ maxWidth: 800, margin: "20px auto", p: 2, bgcolor: "#F2F2f2" }}>
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ my: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Avatar sx={{ width: 80, height: 80, bgcolor: "primary.main", mb: 2 }}>
            {formData.firstName ? formData.firstName[0] : "U"}
          </Avatar>
          <Typography variant="h5">Edit Profile</Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="userName"
                label="Username"
                fullWidth
                value={formData.userName}
                onChange={handleChange}
                error={!!errors.userName}
                helperText={errors.userName}
                sx={{ bgcolor: "background.paper" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                sx={{ bgcolor: "background.paper" }}
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
                sx={{ bgcolor: "background.paper" }}
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
                sx={{ bgcolor: "background.paper" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone"
                label="Phone"
                type="tel"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                sx={{ bgcolor: "background.paper" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                name="gender"
                label="Gender"
                fullWidth
                value={formData.gender}
                onChange={handleChange}
                error={!!errors.gender}
                helperText={errors.gender}
                sx={{ bgcolor: "background.paper" }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                label="Address"
                multiline
                rows={2}
                fullWidth
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
                sx={{ bgcolor: "background.paper" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="bio"
                label="Bio"
                multiline
                rows={3}
                fullWidth
                value={formData.bio}
                onChange={handleChange}
                sx={{ bgcolor: "background.paper" }}
              />
            </Grid>

            {/* Change Password Section */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
                Change Password
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="currentPassword"
                label="Current Password"
                type="password"
                fullWidth
                value={formData.currentPassword}
                onChange={handleChange}
                error={!!errors.currentPassword}
                helperText={errors.currentPassword}
                sx={{ bgcolor: "background.paper" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="newPassword"
                label="New Password"
                type="password"
                fullWidth
                value={formData.newPassword}
                onChange={handleChange}
                error={!!errors.newPassword}
                helperText={errors.newPassword}
                sx={{ bgcolor: "background.paper" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                label="Confirm New Password"
                type="password"
                fullWidth
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                sx={{ bgcolor: "background.paper" }}
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
  </Card>
);
};

export default App;
