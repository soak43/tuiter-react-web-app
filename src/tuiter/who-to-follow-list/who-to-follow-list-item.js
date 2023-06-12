import React from "react";

const WhoToFollowListItem = ({
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }) => {

    return(

        <li className="list-group-item">
                
            <div className="row">
                <div className="col-3">
                    <img alt="profileIcon" className="rounded-circle" height="48px" width="48px" src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-7">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
    
            {/* <div class="row">
            <div class="col-3">
            <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
            </div>
            <div class="col-3">
                <div className="fw-bold">{who.userName}</div>
                <div>@{who.handle}</div>
            </div>
            <div class="col-6">
                <button type="button" class="btn rounded-pill btn-primary float-end">Follow</button>
            </div>
            </div> */}
        </li>

    );

};
export default WhoToFollowListItem;

