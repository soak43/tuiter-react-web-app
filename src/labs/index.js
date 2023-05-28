import Nav from "../nav";
import Assignment3 from "./a3";
// import {Link} from "react-router-dom";

function Labs(){
    return(
        <div>
            {/* <Link to="/labs/a3">A3</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link> */}
            <Nav />
            <Assignment3 />
        </div>
    );
}

export default Labs;