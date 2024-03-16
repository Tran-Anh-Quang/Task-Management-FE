import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, setAuthHeader } from '../api/api';

export const submitTask = createAsyncThunk(
    "submissions/submitTask", async ({ taskId, githubLink }) => {
        setAuthHeader(localStorage.getItem("jwt"), api)

        try {
            const { response } = await api.post(
                `/api/submissions?task_id=${taskId}&github_link=${githubLink}`,
                {}
            );
            console.log("submit task: ", response)
            return response;
        } catch (error) {
            console.log(error)
            throw Error(error.response.data.error)
        }
    })

export const fetchAllSubmissions = createAsyncThunk(
    "submissions/fetchAllSubmissions", async () => {
        setAuthHeader(localStorage.getItem("jwt"), api)

        try {
            const { response } = await api.get(
                `/api/submissions`,
                {}
            );
            console.log("submitted task: ", response)
            return response;
        } catch (error) {
            console.log(error)
            throw Error(error.response.data.error)
        }
    })

export const fetchAllSubmissionsByTaskId = createAsyncThunk(
    "submissions/fetchAllSubmissionsByTaskId", async ({ taskId }) => {
        setAuthHeader(localStorage.getItem("jwt"), api)

        try {
            const { response } = await api.get(
                `/api/submissions/task/${taskId}`,
                {}
            );
            console.log("submitted task: ", response)
            return response;
        } catch (error) {
            console.log(error)
            throw Error(error.response.data.error)
        }
    })


export const acceptDeclineSubmission = createAsyncThunk(
    "submissions/acceptDeclineSubmission", async ({ id, status }) => {
        setAuthHeader(localStorage.getItem("jwt"), api)

        try {
            const { response } = await api.put(
                `/api/submissions/${id}?status = ${status}`,
                {}
            );
            console.log("accept task: ", response)
            return response;
        } catch (error) {
            console.log(error)
            throw Error(error.response.data.error)
        }
    })

const submissionSlice = createSlice({
    name: "submission",
    initialState: {
        submissions: [],
        status: '',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.submissions.push(action.payload);
            })
            .addCase(submitTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(fetchAllSubmissions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.submissions = action.payload;
            })
            .addCase(fetchAllSubmissions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchAllSubmissionsByTaskId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.submissions = action.payload;
            })
            .addCase(acceptDeclineSubmission.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.submissions = state.submissions.map((submission) =>
                    submission.id !== action.payload.id ? submission : action.payload
                )
            })
    }
})

export default submissionSlice.reducer;
