import React, {useEffect} from "react";
// import tuitsArray from './tuits.json';
import TuitItem from "./tuit-item";
import { useDispatch, useSelector } from "react-redux";
import {findTuitsThunk} from "../services/tuits-thunks";
// import { Provider } from "@reduxjs/toolkit";
// import store from "./tuit-store";

const TuitList = () => {

    const {tuits, loading} = useSelector((state) => state.tuits);
    // const tuitsStore = useSelector((state) => state.tuits);
    const dispatch = useDispatch();

    //initializes the state variable
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, []);

    return(
        <div>
            <ul className="list-group">
                {loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                   tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
                }
                {/*tuits.tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>);*/}
            </ul> 

            {/* <pre>
                <code>{JSON.stringify(tuitsStore, null, 2)}</code>
            </pre> */}
        </div>
    );

};

export default TuitList;
