'use client';
import instance from '@/shared/axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRegister = createAsyncThunk(
    'user/fetchRegister',
    async (data: any, { rejectWithValue }) => {
        try {
            const user = await instance.post('/register', data);

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
