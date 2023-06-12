import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {loginThunk} from "../services/auth-thunks";

function LoginScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [user, setUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try{
            await dispatch(loginThunk({username, password}));
            navigate("/tuiter/profile");
        } catch (e) {
            alert (e);
        }
    };
    return (
        // <div className="container">
        //     <div className="row">
        //         <div className="col-lg-12 text-center">
        //             <h1 className="mb-2">Login Screen</h1>
        //             <div className="mt-2">
        //                 <label>Username</label>
        //                 <input className="form-control" type="text" value={user.username}
        //                        onChange={(event) =>setUser({...user, username: event.target.value})
        //                 }/>
        //             </div>
        //             <div className="mt-2">
        //                 <label>Password</label>
        //                 <input className="form-control" type="password" value={user.password}
        //                        onChange={(event) => setUser({...user, password: event.target.value})
        //                 }/>
        //             </div>
        //             <button onClick={handleLogin} className="btn btn-primary mt-2">Login</button>
        //         </div>
        //     </div>
        // </div>

    <div>
        <h1>Login Screen</h1>
        <div className="mt-2">
            <label>Username</label>
            <input className="form-control" type="text" value={username}
                   onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div className="mt-2">
            <label>Password</label>
            <input className="form-control" type="password" value={password}
                   onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button className="btn btn-primary mt-2"
                onClick={handleLogin}>
            Login
        </button>
    </div>

);
}

export default LoginScreen;