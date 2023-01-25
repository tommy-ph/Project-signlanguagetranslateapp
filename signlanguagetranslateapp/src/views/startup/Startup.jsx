import LoginForm from "../../components/loginform/LoginForm";
import { fetchUser, createUser } from "../../API/user";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../../context/userProvider";
import { useEffect } from "react";
import "./startup.css";
import robot from "../../Utils/robot.png";

const Startup = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Context);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parseUser = JSON.parse(user);
    if (parseUser) {
      setUser(parseUser);
      navigate("/translate");
    }
  }, []);

  const handleSubmitedValue = (username) => {
    if (username) {
      fetchUser(username).then((users) => {
        const user = foundUser(username, users);
        if (user) {
          setUser(user);
          window.localStorage.setItem("user", JSON.stringify(user));
          return navigate("/translate");
        }
        createUser(username).then((user) => {
          setUser(user);
          localStorage.setItem("user", user);
          navigate("/translate");
        });
      });
    }
  };

  const foundUser = (username, users) => {
    if (users.length > 0) {
      return users.find((user) => user.username === username);
    }
  };

  return (
    <>
      <div className="sub-container">
        <img src={robot} alt="image" width="200" />
        <div>
          <p>Lost in translation</p>
          <p>Get started</p>
        </div>
      </div>
      
      <LoginForm getSubmitedValue={handleSubmitedValue} />
    </>
  );
};
export default Startup;
