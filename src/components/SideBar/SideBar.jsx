import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import "./style.css";
import CustomNavLinks from "../CustomNavLinks/CustomNavLinks";
import Logo from "../Logo/Logo";
import LogoutIcon from "@mui/icons-material/Logout";
const dataSideBar = [
  {
    icon: <HomeIcon style={{ fontSize: "30px", marginRight: ".7rem" }} />,
    active: "active",
    url: "/home",
    name: "Home",
  },
  {
    icon: <AddCircleIcon style={{ fontSize: "30px", marginRight: ".7rem" }} />,
    active: "active",
    url: "/",
    name: "ADD",
  },
  {
    icon: <ChatIcon style={{ fontSize: "30px", marginRight: ".7rem" }} />,
    active: "active",
    url: "/chat",
    name: "Chat",
  },
  {
    icon: <SettingsIcon style={{ fontSize: "30px", marginRight: ".7rem" }} />,
    active: "active",
    url: "/setting",
    name: "Setting",
  },
  {
    icon: <PersonIcon style={{ fontSize: "30px", marginRight: ".7rem" }} />,
    active: "active",
    url: "/person",
    name: "profile",
  },
];
function SideBar() {
  return (
    <nav>
      <div className="content">
        <div className="details_number_colum">
          <Logo className={"image_logo"} />
          <p className="title names">Sharif Naim</p>
        </div>

        <ul>
          {dataSideBar.map((item) => (
            <CustomNavLinks name={item.name} icons={item.icon} url={item.url} />
          ))}
        </ul>
        <div className="LogoutIcon">
          <LogoutIcon
            style={{ fontSize: "30px", color: "rgb(172, 171, 171)" }}
          />
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
