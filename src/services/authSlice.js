import { createSlice } from "@reduxjs/toolkit";

const savedToken = localStorage.getItem("token");
const savedUser = localStorage.getItem("user");

const initialState = {
    user: savedUser ? JSON.parse(savedUser) : null,
    token: savedToken,
    isAuthenticated: !!savedToken,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
