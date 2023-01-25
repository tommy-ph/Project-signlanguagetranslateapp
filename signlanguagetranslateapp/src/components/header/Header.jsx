import React, { useContext } from "react";
import "./header.css";
import { Context } from "../../context/userProvider";
export const Header = () => {
  const { user } = useContext(Context);
  return (
    <div className="header-container">
      <h1>Lost in translation</h1>
      <div>
        { user && (
         <div className="profile-container">
          <p>{user.username}</p>
          <div className="user-image"></div>
        </div>
        )} 
      </div>
    </div>
  );
};
