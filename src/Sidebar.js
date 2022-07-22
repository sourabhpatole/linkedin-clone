import { Avatar } from "@mui/material";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1658195771962-93726079f35b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Sourabh Patole</h2>
        <h4>sourabhpatole@outlook.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,321</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">2,400</p>
        </div>
      </div>
      <div className="sidebar_button">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
