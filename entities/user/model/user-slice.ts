import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRegister } from '../api/api';
import { IState } from './api.types';

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
    },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
