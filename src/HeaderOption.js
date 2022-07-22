import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";
const HeaderOption = ({ avatar, title, Icon }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
