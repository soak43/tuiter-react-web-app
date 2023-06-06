import React from "react";
// import tuitsArray from './tuits.json';
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";
// import { Provider } from "@reduxjs/toolkit";
// import store from "./tuit-store";

const TuitList = () => {

    const tuitsStore = useSelector((state) => state.tuits);

    return(
        <div>
            <ul className="list-group">
                {
                    tuitsStore.tuits.map(tuit =><TuitItem key={tuit._id} tuit={tuit}/> )
                }
            </ul> 

            {/* <pre>
                <code>{JSON.stringify(tuitsStore, null, 2)}</code>
            </pre> */}
        </div>
    );

};

export default TuitList;
