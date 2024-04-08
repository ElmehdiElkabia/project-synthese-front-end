import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginAsync = createAsyncThunk('auth/login', async (userData) => {
    const response = await axios.post('http://localhost:8000/api/login', userData);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        url:null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
                localStorage.setItem('token', action.payload.token);
                if (action.payload.role === 'admin') {
                    // Redirect to admin dashboard
                    localStorage.setItem('role', action.payload.role);
                    localStorage.setItem('url', action.payload.redirect_url);
                    state.url=action.payload.redirect_url;
                    window.location.href = action.payload.redirect_url;
                } else if (action.payload.role === 'agent') {
                    // Redirect to agent dashboard
                    localStorage.setItem('role', action.payload.role);
                    localStorage.setItem('url', action.payload.redirect_url);
                    state.url=action.payload.redirect_url;
                    window.location.href = action.payload.redirect_url;
                } else {
                    // Redirect to homepage
                    localStorage.setItem('role', action.payload.role);
                    localStorage.setItem('url', action.payload.redirect_url);
                    state.url=action.payload.redirect_url;
                    window.location.href = action.payload.redirect_url;
                }
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.error = action.error.message;
            });
    },
});

export const { logout } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
