import Nav from "../nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
// import {Link} from "react-router-dom";
import { Route, Routes } from "react-router";

function Labs(){
    return(
        <div>
            {/* <Link to="/labs/a3">A3</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link> */}
            <Nav />
            <Routes>
                <Route path="a3" element={<Assignment3/>}/>
                <Route path="a4" element={<Assignment4/>}/>
            </Routes>
        </div>
    );
}

export default Labs;