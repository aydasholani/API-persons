import React from "react";
import Button from "@mui/material/Button";
import "./user.css";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const User = (props) => {
  return (
    <div className="userCard" key={props.id} onClick={props.onClick}>
      <img src={props.avatar} alt="User Avatar" className="avatar" />
      <div>
        <h3>
          {props.first_name} {props.last_name}
        </h3>

        <Button
          variant="text"
          href={`mailTo:${props.email}`}
          startIcon={<EmailOutlinedIcon fontSize="small" />}
        >
          CONTACT
        </Button>
      </div>
    </div>
  );
};

export default User;
