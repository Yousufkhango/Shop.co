import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    seller: false,
    userData: null,
    userAddress: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
            state.seller = state.userData?.labels[0] == 'seller'? true: false
            
        },
        userAddress: (state, action) => {
            state.userAddress = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.seller = false;
            state.userAddress = null;
        }
    }
})

export const { login, logout, userAddress } = authSlice.actions;

export default authSlice.reducer;