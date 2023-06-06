import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import whoReducer from "./reducer/who-reducer";
import tuitsReducer from "./reducer/tuits-reducer";


const store = configureStore(
    {reducer: {who: whoReducer, tuits : tuitsReducer}}
);




function Tuiter() {

    return (
        <Provider store={store}>
            <div>
                <Nav />
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-1 d-sm-none d-md-block d-none">
                        <NavigationSidebar />
                    </div>
                    <div className="col-xl-7 col-lg-11 col-md-11 col-sm-12 col-xs-12">
                        <Routes>
                            <Route path="/home" element={<HomeScreen />} />
                            <Route path="/explore" element={<ExploreScreen />} />
                            <Route path="/bookmarks" element={<BookmarksScreen />} />
                            <Route path="/profile" element={<ProfileScreen />} />
                        </Routes>
                    </div>
                    <div className="col-xl-3 d-none d-xl-block">
                        <WhoToFollowList />
                    </div>
                </div>
            </div>
        </Provider>
    );

}

export default Tuiter;

