import React, { useContext, useState } from "react";
import { SignImage } from "../../Utils/SignImage";
import { Context } from "../../context/userProvider";
import imagesData from "../../Utils/ImagesData";
import { useEffect } from "react";

const Translate = () => {
  const { user, setUser } = useContext(Context);
  const [searchInput, setSearchInput] = useState("");
  const [filterData, setFilterData] = useState([]);
  const copiedArr = [];

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parseUser = JSON.parse(user);
    if (parseUser) {
      setUser(parseUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const submitValue = () => {
    searchInput.split("").map((input) => {
      imagesData.map((item) => {
        if (input === item.key) {
          copiedArr.push(item);
        }
      });
    });
    setUser({...user, translations: [...user.translations, searchInput]})
    setFilterData([...copiedArr]);
  };
  return (
    <div>
      <h1>{user && user.username}</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      {filterData.map((data) => {
        return <SignImage src={data.src} />;
      })}
      <button onClick={submitValue}>Seach</button>
    </div>
  );
};
export default Translate;
