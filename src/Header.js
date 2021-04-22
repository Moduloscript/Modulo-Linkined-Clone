import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Notification from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import HeaderOption from "./HeaderOption";
import { useDispatch, } from "react-redux";
import { logout, } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
 

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://thumbs.dreamstime.com/b/colored-linkedin-logo-colored-linkedin-logo-vector-ai-file-easily-editable-have-white-background-high-resolution-155698459.jpg"
          alt="profile logo"
        />
        <img src="" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home " />
        <HeaderOption Icon={SupervisorAccountIcon} title=" Network " />
        <HeaderOption Icon={BusinessCenterIcon} title="Job" />
        <HeaderOption Icon={Notification} title="Notifications " />
        <HeaderOption Icon={ChatIcon} title="Chat " />
        <HeaderOption
          avatar={true}
          title="me"
          onClick={logOutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
