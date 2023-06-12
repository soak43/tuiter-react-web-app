import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GoComment, GoBell, GoBookmark, GoChecklist, GoPerson, GoSearch, GoHome, GoKebabHorizontal } from "react-icons/go";
import {useSelector} from "react-redux";
import {CiLogin} from "react-icons/ci";
import {FaUserPlus} from "react-icons/fa";


const NavigationSidebar = () => {

    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const {currentUser} = useSelector((state) => state.user);

    return (

        <div className="list-group">
            <Link to={"/tuiter/home "} className={`list-group-item ${active === "home" ? "active" : ""}`}><GoHome className="me-2" /><span className = "d-none d-xl-inline">Home</span></Link>
            <Link to={"/tuiter/explore "} className={`list-group-item ${active === "explore" ? "active" : ""}`}><GoSearch className="me-2" /><span className = "d-none d-xl-inline">Explore</span></Link>
            <Link to={"/tuiter/notifications "} className={`list-group-item ${active === "notifications" ? "active" : ""}`}><GoBell className="me-2" /><span className = "d-none d-xl-inline">Notifications</span></Link>
            <Link to={"/tuiter/messages "} className={`list-group-item ${active === "messages" ? "active" : ""}`}><GoComment className="me-2"/><span className = "d-none d-xl-inline">Messages</span></Link>
            <Link to={"/tuiter/bookmarks "} className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}><GoBookmark className="me-2" /><span className = "d-none d-xl-inline">Bookmarks</span></Link>
            <Link to={"/tuiter/lists "} className={`list-group-item ${active === "lists" ? "active" : ""}`}><GoChecklist className="me-2" /><span className = "d-none d-xl-inline">Lists</span></Link>
            { currentUser && <Link to={"/tuiter/profile "} className={`list-group-item ${active === "profile" ? "active" : ""}`}><GoPerson className="me-2" /><span className = "d-none d-xl-inline">Profile</span></Link>}
            {!currentUser && <Link to={"/tuiter/login "} className={`list-group-item ${active === "login" ? "active" : ""}`}><CiLogin className="me-2" /><span className = "d-none d-xl-inline">Login</span></Link>}
            {!currentUser && <Link to={"/tuiter/register "} className={`list-group-item ${active === "register" ? "active" : ""}`}><FaUserPlus className="me-2" /><span className = "d-none d-xl-inline">Register</span></Link>}
            <Link to={"/tuiter/more "} className={`list-group-item ${active === "more" ? "active" : ""}`}><GoKebabHorizontal className="me-2" /><span className = "d-none d-xl-inline">More</span></Link>
        </div>

    );

};

export default NavigationSidebar;





