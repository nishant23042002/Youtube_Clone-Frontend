import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("user");
const savedToken = localStorage.getItem("token");

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
            const { user, token } = action.payload;
            state.user = {
                name: user.name,
                profilePic: user.profilePic,
                id: user.id,
            };
            state.token = token;
            state.isAuthenticated = true;

            // Optional: persist in localStorage
            localStorage.setItem("user", JSON.stringify(state.user));
            localStorage.setItem("token", token);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("user")
            localStorage.removeItem("token")
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
