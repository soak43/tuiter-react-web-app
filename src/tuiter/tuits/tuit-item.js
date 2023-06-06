import React from "react";
import {GoVerified} from "react-icons/go";
import {FaRegComment} from "react-icons/fa";
import {AiOutlineRetweet, AiOutlineHeart, AiFillHeart} from "react-icons/ai";
// import {GoShare} from "react-icons/go";
import {FiShare} from "react-icons/fi";
import { likeToggle, deleteTuit } from "../reducer/tuits-reducer";
import {useDispatch} from "react-redux";
import {RxCross1} from "react-icons/rx";


const TuitItem = ({
    tuit = {
        // "_id" : 111,
        "topic": "Energy",
        "userName": "Tesla",
        "time": "2h",
        "title": `Tesla CyberTruck lands on Mars and
                picks up the Curiosity rover on its 6' bed`,
        "image": "tesla.png",
        "handles": "@spacex",
        "liked" : true,
        "replies": 234,
        "retuits": 567,
        "likes" : 567,
        "tuit" : "This morning at 12:34 EST Earth time, a convoy of Tesla CyberTruck drove across the Martian landscape after picking up the Curiosity, Sojourner , Spirit, and Perserance on 6' beds"
    }
    }) => {

    

    const dispatch = useDispatch();

    
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
      

    // const tuits = useSelector(state => state.todos);

    return(
        <div className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img alt = "profile logo" width={70} className="float-start rounded-circle" src={`/images/${tuit.image}`}/>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-5"> 
                                <div>{tuit.userName} <GoVerified/>. {tuit.time} {tuit.handles} </div>
                            </div>
                            <div className="col-5">
                            <button className="btn btn-white float-end vertical-align" onClick={() => deleteTuitHandler(tuit._id)}><RxCross1 /></button>
                            </div>
                        </div>
                        <div className="small">
                            {tuit.tuit}
                        </div>
                        <div className="row">
                            <div className="col-2 mt-2">
                                <FaRegComment className="me-1"/>{tuit.replies}
                            </div>
                            <div className="col-2 mt-2">
                                <AiOutlineRetweet className="me-1"/>{tuit.retuits}
                            </div>
                            <div className="col-2">
                                {tuit.liked && (<button onClick={() => {
                                    dispatch(likeToggle({...tuit, likeStatus: false}));
                                }} 
                                className="btn btn-white">
                                    <AiFillHeart className="me-1" style={{color: "#e01a24",}} />
                                    {tuit.likes}</button>)}
                                {!tuit.liked && (<button onClick={() => {
                                    dispatch(likeToggle({...tuit, likeStatus: false}));
                                }}
                                className="btn btn-white"><AiOutlineHeart className="me-1"/>{tuit.likes}</button>)}
                                {/* Tuit like button */}
                            </div>
                            <div className="col-2 mt-2">
                                <FiShare className="mb-2 ms-2" />
                            </div>
                        </div>
                    </div>    
                </div>
            </li>
            
        </div>
    );

};

export default TuitItem;