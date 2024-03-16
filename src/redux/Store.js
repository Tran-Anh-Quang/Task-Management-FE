import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./AuthSlice";
import TaskSlice from "./TaskSlice";
import SubmissionSlice from "./SubmissionSlice";
import { thunk } from 'redux-thunk';
const rootReducer = combineReducers({
    auth: authReducer,
    task: TaskSlice,
    submission: SubmissionSlice
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store;