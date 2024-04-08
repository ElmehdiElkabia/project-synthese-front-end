import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerAsync = createAsyncThunk('auth/register', async (userData) => {
    const response = await axios.post('http://localhost:8000/api/register', userData);
    return response.data;
});

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
                // Redirect to appropriate dashboard or homepage after registration
                window.location.href = '/login'; // Change this to your desired destination
            })
            .addCase(registerAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.error = action.error.message;
            });
    },
});

export const selectRegisteredUser = (state) => state.register.user;

export default registerSlice.reducer;
