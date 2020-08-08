import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewSongs = () => {
  const [playlist, setPlaylist] = useState([]);
  const apiUrl = "http://localhost:3000/songs";
  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await axios(apiUrl);
        setPlaylist(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, []);
  const playlistSongs = playlist.map((info, i) => {
    return (
    //   <div key={i}>
    //     <p>{info.title}</p>
    //     <p>{info.artist}</p>
    //     <p>{info.time}</p>
    <div key={i} className="song-data-ctn">
    <div className="left-data">
      <p>{info.title}</p>
      <p id="small-artist">{info.artist}</p>
    </div>
    <div className="right-data">
      <p>{info.time}</p>
        <button className="view-toggle-btn" onClick={() => removeSong(info.id)}>X</button>
        <button className="view-toggle-btn" onClick={() => addToFave(info)}>♡</button>
      </div>
      </div>
    );
  });
  const addToFave = async (info) => {
    axios({
      url: `${apiUrl}/${info.id}`,
      method: "PUT",
      data: { favorite: true },
    });
    await console.log(info);
    console.log("favorite to true");
    window.location.reload();
  };
  const removeSong = (id) => {
    axios({
      url: `${apiUrl}/${id}`,
      method: "DELETE",
    });
    window.location.reload();
  };
  return (
    <div className="playlist-ctn">
      <h2>My Playlist</h2>
      {playlistSongs}
    </div>
  );
};

export default ViewSongs;
