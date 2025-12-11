import { configureStore } from "@reduxjs/toolkit";
import bagReducer from './bagSlice'
import historySlice from './historySlice'

export const store = configureStore({
    reducer: {
        'bag': bagReducer,
        'history': historySlice
    }
})