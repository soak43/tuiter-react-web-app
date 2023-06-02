import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
// import {createStore} from "redux";
import {Provider} from "react-redux";
// import todosReducer from "./reducers/todos-reducer";
import { configureStore } from "@reduxjs/toolkit";
import Todos from "./todos-component";
import todos from "./reducers/todos-reducer";

//combining reducers
const store = configureStore({reducer : {hello, todos} });

// const store = createStore(hello);


const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos />
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    );
};

export default ReduxExamples;

