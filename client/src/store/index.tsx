import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {}

const store = configureStore({
    reducer: rootReducer
})
/* export type RootState = ReturnType<typeof rootReducer>; */ //TODO: The comment will be removed

export default store