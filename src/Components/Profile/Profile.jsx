
import { Box, Button, MenuItem, Stack, TextField, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function Profile() {
  const theme = useTheme();
  const [successMessage, setSuccessMessage] = useState("");

  const currencies = [
    { value: 'User', label: 'User' },
    { value: 'Admin', label: 'Admin' },
    { value: 'Manager', label: 'Manager' },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = data => {
    console.log(data);
    setSuccessMessage("User created successfully!");
    reset();  
  };

  return (
    <>
      <Box component="main" sx={{ mt: 10, ml: 12 }}>
        <Typography sx={{ fontSize: 30, fontWeight: 700, color: theme.palette.primary.main }}>
          CREATE USER
        </Typography>
        <Typography>Create a new user profile</Typography>
      </Box>
      <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          sx={{
            width: '80%',
            maxWidth: '600px',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
          noValidate
          autoComplete="off"
        >
          {successMessage && (
            <Typography sx={{ color: 'green', textAlign: 'center' }}>
              {successMessage}
            </Typography>
          )}

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              {...register("firstName", { required: "First name is required", minLength: { value: 3, message: "Minimum length is 3" } })}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
              fullWidth
              label="First Name"
              variant="filled"
            />
            <TextField
              {...register("lastName", { required: "Last name is required", minLength: { value: 3, message: "Minimum length is 3" } })}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
              fullWidth
              label="Last Name"
              variant="filled"
            />
          </Stack>

          <TextField
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Enter a valid email" }
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            fullWidth
            label="Email"
            variant="filled"
          />

          <TextField
            {...register("contactNumber", {
              required: "Contact number is required",
              pattern: { value: /^\d+$/, message: "Enter a valid contact number" },
              minLength: { value: 10, message: "Minimum length is 10 digits" }
            })}
            error={Boolean(errors.contactNumber)}
            helperText={errors.contactNumber?.message}
            fullWidth
            label="Contact Number"
            variant="filled"
          />

          <TextField
            {...register("address1", { required: "Address 1 is required" })}
            error={Boolean(errors.address1)}
            helperText={errors.address1?.message}
            fullWidth
            label="Address 1"
            variant="filled"
          />

          <TextField
            {...register("address2", { required: "Address 2 is required" })}
            error={Boolean(errors.address2)}
            helperText={errors.address2?.message}
            fullWidth
            label="Address 2"
            variant="filled"
          />

          <TextField
            id="standard-select-currency"
            select
            label="Select Role"
            defaultValue="User"
            variant="filled"
            {...register("role", { required: "Role selection is required" })}
            error={Boolean(errors.role)}
            helperText={errors.role?.message}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              type='submit'
              variant='contained'
              sx={{ width: "50%", fontSize: '1.2rem', textTransform: 'capitalize' }}
            >
              Create New User
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

