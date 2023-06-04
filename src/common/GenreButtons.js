import React, { useEffect, useState } from "react";
import fetchUtil from "./fetch-utils";
import "./common-styles.css";
function GenreButtons({ paramValue, handleGenre }) {
  const [genreInfo, setGenreInfo] = useState([]);
  // const [activeButton, setActiveButton] = useState("genre_button");
  function handleButton(id) {
    handleGenre(id);
  }
  useEffect(() => {
    const result = fetchUtil.get(paramValue);
    result.then((data) => {
      setGenreInfo(data["genres"]);
    });
  }, []);
  return (
    <div className="genre_container">
      {genreInfo &&
        genreInfo.length > 0 &&
        genreInfo.map((data) => {
          return (
            <button
              className="genre_button"
              key={data.id}
              onClick={() => handleButton(data.id)}
            >
              {data.name}
            </button>
          );
        })}
    </div>
  );
}

export default GenreButtons;
