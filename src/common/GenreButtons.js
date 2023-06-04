import React, { useEffect, useState } from "react";
import fetchUtil from "./fetch-utils";
import "./common-styles.css";
function GenreButtons({ paramValue }) {
  const [genreInfo, setGenreInfo] = useState([]);
  useEffect(() => {
    const result = fetchUtil.get(paramValue);
    result.then((data) => {
      setGenreInfo(data["genres"]);
    });
  }, []);
  // console.log(genreInfo);
  return (
    <div className="genre_container">
      {genreInfo &&
        genreInfo.length > 0 &&
        genreInfo.map((data, index) => {
          return (
            <button className="genre_button" key={index}>
              {data.name}
            </button>
          );
        })}
    </div>
  );
}

export default GenreButtons;
