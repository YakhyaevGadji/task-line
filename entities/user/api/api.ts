'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// First, create the thunk
export const fetchRegister = createAsyncThunk(
    'user/fetchRegister',
    async (data: any, { rejectWithValue }) => {
        try {
            console.log(data);
            const user = await axios.post('/register', data);
            console.log(user);

            return user.data;
        } catch (error: any) {
            if (error.message && error.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);
