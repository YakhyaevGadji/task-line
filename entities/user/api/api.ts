'use client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import instance from '@/shared/axios';

interface IAuth {
    login: string;
    password: string;
}

export const fetchRegister = createAsyncThunk(
    'user/fetchRegister',
    async (data: any, { rejectWithValue }) => {
        try {
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

export const fetchAuth = createAsyncThunk(
    'auth/authUser',
    async (props: IAuth, { rejectWithValue }) => {
        try {
            const user = await instance.post(`/auth`, props);
            console.log(user);
            return user.data;
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);
