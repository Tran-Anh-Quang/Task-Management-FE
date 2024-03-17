import { BASE_URL, api, setAuthHeader } from "../api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const login = createAsyncThunk("auth/login", async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, userData)
        localStorage.setItem("jwt", response.data.jwt)
        console.log("Login successful", response)
        return response;
    } catch (error) {
        console.log(error)
        throw Error(error.response.data.error)
    }
})

export const register = createAsyncThunk("auth/register", async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, userData)
        localStorage.setItem("jwt", response.data.jwt)
        console.log("Register successful", response)
        return response;
    } catch (error) {
        console.log(error)
        throw Error(error.response.data.error)
    }
})

export const logout = createAsyncThunk("auth/logout", async (userData) => {
    try {
        localStorage.clear();
    } catch (error) {
        console.log(error)
        throw Error(error.response.data.error)
    }
})

export const getUserProfile = createAsyncThunk("auth/getUserProfile", async (jwt) => {
    setAuthHeader(jwt, api)
    try {
        const response = await api.get(`/api/user/profile`)
        console.log("get user profile success", response)
        return response;
    } catch (error) {
        console.log(error)
        throw Error(error.response.data.error)
    }
})

export const getUserList = createAsyncThunk("auth/getUserList", async (jwt) => {
    setAuthHeader(jwt, api)
    try {
        const { response } = await api.get(`/api/user`)
        console.log("get user list successful", response)
        return response;
    } catch (error) {
        console.log(error)
        throw Error(error.response.data.error)
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLoggedIn: false,
        isLoading: false,
        error: null,
        jwt: null,
        users: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jwt = action.payload.jwt;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jwt = action.payload.jwt;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            .addCase(getUserProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            .addCase(getUserList.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUserList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(getUserList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.jwt = null;
                state.users = [];
                state.error = null;
                state.isLoggedIn = false;
            })
    }
})

export default authSlice.reducer;