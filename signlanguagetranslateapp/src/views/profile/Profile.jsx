import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignImage } from "../../Utils/SignImage";
import { Context } from "../../context/userProvider";
import imagesData from "../../Utils/ImagesData";
import { useEffect } from "react";

const Profile = () => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parseUser = JSON.parse(user);
    if (parseUser) {
      setUser(parseUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  },[user])

  const deleteHistory = (id) => {
    const removedItem = user.translations.filter((word, index) => index !== id)
    setUser({...user, translations: [...removedItem]})
    console.log(user)
  }

  const logout = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <div>
      <h1>Profile</h1>
      <div className="profile-container">
        <div className="container">
          <div className="list-header">
            <h3>Last 10 translated word</h3>
          </div>
          <div className="list-container">
            <div className="list-images">
              {user &&
                user.translations.map((t, key) => {
                  const char = t.split("");
                  const images = [];
                  char.forEach((c) =>
                    imagesData.forEach(
                      (img) => img.key === c && images.push(img)
                    )
                  );
                  return (
                    <div>
                      <p>{t}</p>
                      {images.map((image, key) => {
                        return <SignImage key={key} src={image.src} />;
                      })}
                      <button onClick={ () => deleteHistory(key)}>Delete</button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="logout-button">
            <button onClick={logout}>logout</button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
