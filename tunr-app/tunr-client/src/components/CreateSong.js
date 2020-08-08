import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const CreateSong = () => {
  const [input, setInput] = useState({
    title: "",
    artist: "",
    time: "",
  });
  const history = useHistory();
  const apiUrl = "http://localhost:3000/songs/";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: apiUrl,
      method: "POST",
      data: input,
    });
    window.location.reload();
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const [active, setActive] = useState(false);
  const handleFocus = () => {
    setActive(true);
  };
  const handleBlur = (e) => {
    if (e.target.value) {
      return;
    } else {
      setActive(false);
    }
  };
  return (
    <div className="create-song-ctn">
      <h2>Add A New Song</h2>
      <form
        onSubmit={handleSubmit}
        className={active ? "float-wrapper active" : "float-wrapper"}
      >
        <label htmlFor="float-input">
          Title
        </label>
        <input
          type="text"
          value={input.title}
          name="title"
          onChange={handleChange}
          id="float-input"
          onFocus={handleFocus} onBlur={handleBlur}
        />
        <br/>
        <label htmlFor="float-input">
          Artist
        </label>
        <input
          type="text"
          value={input.artist}
          name="artist"
          onChange={handleChange}
          id="float-input"
          onFocus={handleFocus} onBlur={handleBlur}
        />
        <br/>
        <label htmlFor="float-input">
          Time
        </label>
        <input
          type="text"
          value={input.time}
          name="time"
          onChange={handleChange}
          id="float-input"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <br/>
        <button type="submit" className="create-btn">Add New Song</button>
      </form>
    </div>
  );
};
export default CreateSong;
