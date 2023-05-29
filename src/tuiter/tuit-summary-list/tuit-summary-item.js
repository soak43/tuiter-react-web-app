import React from "react";

const TuitSummaryItem = ({
    tuit = {
        "topic": "Energy",
        "userName": "Tesla",
        "time": "2h",
        "title": `Tesla CyberTruck lands on Mars and
                picks up the Curiosity rover on its 6' bed`,
        "image": "tesla.png"
    }
    }) => {

    return(
        <div className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <div className="col-10">
                        <div>{tuit.userName} . {tuit.time}</div>
                        <div className="fw-bolder">{tuit.topic}</div>
                        <div>{tuit.title}</div>
                    </div>
                    <div className="col-2">
                        <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
                    </div>
                </div>
            </li>
        </div>
    );

};

export default TuitSummaryItem;