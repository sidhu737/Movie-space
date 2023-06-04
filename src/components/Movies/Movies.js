import React, { useState } from "react";
import "./Movies.css";
import GenreButtons from "../../common/GenreButtons";
import ListingPage from "../../common/ListingPage";

export default function Movies() {
  const [genreID, setGenreID] = useState("");
  const urlParams = {
    genreParams: "genre/movie/list",
    popularParams: "movie/popular",
    genreParam: {
      mainparam: "discover/movie",
      subparam: `with_genres=${genreID}&page=1&`,
    },
  };
  return (
    <div className="movies_container">
      <GenreButtons
        paramValue={urlParams.genreParams}
        handleGenre={setGenreID}
      />
      <ListingPage
        paramValue={
          genreID ? urlParams.genreParam.mainparam : urlParams.popularParams
        }
        subparam={genreID && urlParams.genreParam.subparam}
        genreID={genreID}
      />
    </div>
  );
}
