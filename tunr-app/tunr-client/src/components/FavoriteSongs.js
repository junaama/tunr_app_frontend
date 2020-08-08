import React, { useState, useEffect } from "react";
import axios from "axios";

const FavoriteSongs = () => {
  const [isFave, setIsFave] = useState([]);

  const apiUrl = "http://localhost:3000/songs";

  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await axios(`${apiUrl}`);
        const filtered = res.data.filter((info) => {
          return info.favorite;
        });
        setIsFave(filtered);
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, []);

  const showData = isFave.map((fave) => {
    return (
      <div className="song-data-ctn">
        <div className="left-data">
          <p>{fave.title}</p>
          <p id="small-artist">{fave.artist}</p>
        </div>
        <div className="right-data">
          <p>{fave.time}</p>
          <button
            className="fave-toggle-btn"
            onClick={() => removeFromFave(fave)}
          >
            ♥
          </button>
        </div>
      </div>
    );
  });
  const removeFromFave = async (info) => {
    axios({
      url: `${apiUrl}/${info.id}`,
      method: "PUT",
      data: { favorite: false },
    });
    window.location.reload();
  };
  return (
    <div className="favorites-ctn">
      <h2>Favorite Songs</h2>
      {showData}
    </div>
  );
};
export default FavoriteSongs;
