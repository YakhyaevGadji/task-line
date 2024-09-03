import { createSlice } from '@reduxjs/toolkit';
import { IState } from './api.types';
import { fetchAuth, fetchRegister } from '../api/api';

const initialState = {} as IState;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers(builder) {
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.isLogged = true;
        });
        builder.addCase(fetchRegister.pending, (state) => {
            state.isLogged = false;
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.isLogged = false;
        });
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.isLogged = true;
        });
        builder.addCase(fetchAuth.pending, (state) => {
            state.isLogged = false;
        });
        builder.addCase(fetchAuth.rejected, (state) => {
            state.isLogged = false;
        });
    },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
