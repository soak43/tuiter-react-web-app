import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-services";

export const findTuitsThunk = createAsyncThunk(
    "tuits/findTuits",  //unique name
    async () => await service.findTuits()   //returned data goes in redux action's payload
);

export const deleteTuitThunk = createAsyncThunk(
    "tuits/deleteTuit",
    async (tuitID) => {
        await service.deleteTuit(tuitID)
        return tuitID
    }
);

export const createTuitThunk = createAsyncThunk(
    "tuits/createTuit",
    async (tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit
    }
);

export const updateTuitThunk = createAsyncThunk(
    "tuits/updateTuit",
    async (tuit) => {
        await service.updateTuit(tuit)
        return tuit
    }
);