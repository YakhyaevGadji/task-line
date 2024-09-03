import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAuth, fetchRegister } from '../api/api';

const initialState = {
    user: {
        login: '',
        email: '',
        password: '',
    },
    isLogged: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers(builder) {
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLogged = true;
        });
        builder.addCase(fetchRegister.pending, (state) => {
            state.isLogged = false;
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.isLogged = false;
        });
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.user = action.payload;
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
