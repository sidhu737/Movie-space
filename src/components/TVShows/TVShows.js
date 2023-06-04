import React, { useState } from "react";
import GenreButtons from "../../common/GenreButtons";
import "./TVShows.css";
import ListingPage from "../../common/ListingPage";
function TVShows() {
  const [genreID, setGenreID] = useState("");
  const urlParams = {
    genreParams: "genre/tv/list",
    popularParams: "tv/popular",
    genreParam: {
      mainparam: "discover/tv",
      subparam: `with_genres=${genreID}&page=1&`,
    },
  };
  return (
    <div className="tv_container">
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

export default TVShows;
