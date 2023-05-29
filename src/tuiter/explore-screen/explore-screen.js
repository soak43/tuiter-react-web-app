import TuitSummaryList from "../tuit-summary-list";
import TuitSummaryItem from "../tuit-summary-list/tuit-summary-item";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";

function ExploreScreen(){
    return(
        <div>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter" className="form-control rounded-pill ps-5"/>
                    <AiOutlineSearch className="fs-3 position-absolute wd-nudge-up"/>
                </div>
                <div className="col-1">
                    <GoGear className="wd-top-4 float-end fs-3 position-relative"/>
                </div>
                </div>
                <ul className="nav nav-pills mb-2 mt-2">
                <li className="nav-item">
                    <a href = "#" className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a href = "#" className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href = "#" className="nav-link">News</a>
                </li>
                </ul>
                <div className="position-relative mb-2">
                <img src="/images/spacex-starship.jpg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white"> SpaceX Starship</h1>
        </div>

            {/* <TuitSummaryItem />
            <TuitSummaryItem tuit={{
                topic: "Space",
                userName: "SpaceX",
                time: "2h",
                title: `The commercial spaceflight company SpaceX scrapped its first scheduled 
                test flight of Starship, a huge, stainless-steel rocket that could one day carry humans to the moon, Mars and beyond.`,
                image: "spacex.png" }} />
            <TuitSummaryItem tuit={{
                topic: "Space",
                userName: "SpaceX",
                time: "3h",
                title: `Starship is a super heavy-lift space vehicle under development by SpaceX. 
                At 120 metres in height and with a liftoff mass of 5,000 metric tons, Starship is the largest and most powerful rocket ever`,
                image: "spacex.png" }} /> */}

        <TuitSummaryList />
        </div>
    );
}

export default ExploreScreen;