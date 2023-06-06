import { configureStore } from "@reduxjs/toolkit";
import tuitsReducer from "../reducer/tuits-reducer";

const store = configureStore({
    reducer : {
        tuits : tuitsReducer,
    },
});

export default store;