import { createSlice } from "@reduxjs/toolkit";
import tuits from "../tuit-summary-list/tuits.json"
// import store from "../tuits/tuit-store";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../services/tuits-thunks";

const initialState = {
    tuits : [],
    loading : false
}

const currentUser = {
    "username": "NASA",
    "handle": "@nasa",
    "image": "nasalogo.png",
};


const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   

const tuitsSlice = createSlice({
    name : "tuits",
    initialState : initialState, //{tuits : tuits},
    extraReducers: {
        [findTuitsThunk.pending]: (state) => {
            state.loading = true
                state.tuits = [] },
        [findTuitsThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.tuits = payload },
        [findTuitsThunk.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [deleteTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.tuits = state.tuits.filter(t => t._id !== payload)
        },
        [createTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.tuits.push(payload)
        },
        [updateTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            console.log("Inside reducer")
            console.log({payload})
            const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
            state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
        },
    },
    reducers : {

        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => {
        //       if (todo.id === action.payload.id) {
        //         return action.payload;
        //       }
        //       return todo;
        //     });
        // },

        likeToggle: (state, action) => {

            // const tuit = state.find((tuit) => tuit._id === action.payload._id);
            //state.liked = !action.payload;
            // state.liked = !tuit.liked;

            const changeTuit = state.tuits.find((t) => t._id === action.payload._id)
            if(changeTuit.liked === true){
                changeTuit.likes = changeTuit.likes - 1;
            }else{
                changeTuit.likes = changeTuit.likes + 1;
            }
            changeTuit.liked = !changeTuit.liked
            
            const newStore = state.tuits.map((t) => t._id === action.payload._id ? changeTuit : t)
            state = newStore;
        },

        createTuit(state, action) {

            state.tuits.unshift({
                ...action.payload, 
                ...templateTuit,
                _id: (new Date()).getTime(), 
            })
        },

        deleteTuit(state, action) {
            const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },
       
    },
});

export default tuitsSlice.reducer;
export const {likeToggle, createTuit, deleteTuit} = tuitsSlice.actions;