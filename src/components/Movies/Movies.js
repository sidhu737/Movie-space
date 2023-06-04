import React from "react";
import "./Movies.css";
import GenreButtons from "../../common/GenreButtons";
export default function Movies() {
  const urlParams = {
    genreParams: "genre/movie/list",
  };
  return (
    <div className="movies_container">
      <GenreButtons paramValue={urlParams.genreParams} />
    </div>
  );
}
