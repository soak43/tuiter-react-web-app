import React from "react";
import {GoVerified} from "react-icons/go";
import {FaRegComment} from "react-icons/fa";
import {AiOutlineRetweet, AiOutlineHeart, AiFillHeart, AiOutlineDislike, AiFillDislike} from "react-icons/ai";
// import {GoShare} from "react-icons/go";
import {FiShare} from "react-icons/fi";
import {FaHeart} from "react-icons/fa";
// import {deleteTuit} from "../reducer/tuits-reducer";
import { likeToggle } from "../reducer/tuits-reducer";
import {useDispatch} from "react-redux";
import {RxCross1} from "react-icons/rx";
// import {BiDislike, BiSolidDislike} from "react-icons/bi";
import {deleteTuitThunk, updateTuitThunk} from "../services/tuits-thunks";

const TuitItem = ({
    tuit = {
        // "_id" : 111,
        "topic": "Energy",
        "username": "Tesla",
        "time": "2h",
        "title": `Tesla CyberTruck lands on Mars and
                picks up the Curiosity rover on its 6' bed`,
        "image": "tesla.png",
        "handle": "@spacex",
        "liked" : true,
        "disliked": false,
        "replies": 234,
        "retuits": 567,
        "likes" : 567,
        "dislikes": 2,
        "tuit" : "This morning at 12:34 EST Earth time, a convoy of Tesla CyberTruck drove across the Martian landscape after picking up the Curiosity, Sojourner , Spirit, and Perserance on 6' beds"
    }
    }) => {

    

    const dispatch = useDispatch();

    
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }

    const updateTuitHandler = (tuit) => {
        console.log("Inside update tuit handler");
        console.log(tuit);
        dispatch(updateTuitThunk(tuit));
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
                                <div>{tuit.username} <GoVerified/>. {tuit.time} {tuit.handle} </div>
                            </div>
                            <div className="col-4"></div>
                            <div className="col-1">
                            <button className="btn btn-white float-end ms-2 vertical-align" onClick={() => deleteTuitHandler(tuit._id)}><RxCross1 /></button>
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
                                {/*<FaHeart*/}
                                {/*    className="text-danger"*/}
                                {/*    onClick={() =>*/}
                                {/*        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))*/}
                                {/*    }*/}
                                {/*/>*/}
                                {/*<span className="ms-2">{tuit.likes}</span>*/}

                                {tuit.liked && (<button onClick={() => {
                                    // dispatch(likeToggle({...tuit, likeStatus: false}));
                                    updateTuitHandler({...tuit, likes: tuit.likes - 1, liked: !tuit.liked})
                                }}
                                className="btn btn-white">
                                    <AiFillHeart className="me-1" style={{color: "#e01a24",}} />
                                    {tuit.likes}</button>)}
                                {!tuit.liked && (<button onClick={() => {
                                    // dispatch(likeToggle({...tuit, likeStatus: false}));
                                    updateTuitHandler({...tuit, likes: tuit.likes + 1, liked: !tuit.liked})
                                    //dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: !tuit.liked}));
                                }}
                                className="btn btn-white"><AiOutlineHeart className="me-1"/>{tuit.likes}</button>)}
                                {/* Tuit like button */}
                            </div>
                            <div className="col-2">
                                {tuit.disliked && (<button onClick={() => {
                                    updateTuitHandler({...tuit, dislikes: tuit.dislikes - 1, disliked: false})
                                }} className="btn btn-white"><AiFillDislike/>{tuit.dislikes}</button>)}
                                {!tuit.disliked && (<button onClick={() => {
                                    updateTuitHandler({...tuit, dislikes: tuit.dislikes + 1, disliked: true})
                                }} className="btn btn-white"><AiOutlineDislike/>{tuit.dislikes}</button>)}
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