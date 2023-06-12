import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "user/login",
    async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async () => {
        return await authService.logout();
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile",
    async () => {
        console.log("Inside profile thunk");
        return await authService.profile();
    }
);

export const updateUserThunk = createAsyncThunk(
    "user/updateUser",
    async (user) => {
        console.log("Inside update user thunk");
        await authService.updateUser(user);
        return user;
    }
);

export const registrationThunk = createAsyncThunk(
    "auth/register",
    async (credentials) => {
        console.log("Inside registration thunk")
        const u =  await authService.register(credentials);
        console.log("data = ", u);
        return u;
    }
);
