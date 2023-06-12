import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, registrationThunk, updateUserThunk} from "../services/auth-thunks";
//
// const initialState = {
//     users : [],
//     currentUser : null,
// };

const authSlice = createSlice({
    name: "auth",
    initialState: {currentUser: null},
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        },
        [registrationThunk.fulfilled]: (state, {payload}) => {
            console.log("Inside registration thunk");
            console.log("payload = ",payload);
            state.currentUser = payload;
        },
    },
});

export default authSlice.reducer;