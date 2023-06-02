import React, { useEffect } from "react";
import fetchUtil from "../../common/fetch-utils";
import MovieGrid from "./MovieGrid";
import "./Home.css";
function Home() {
  const apiParams = [
    "trending/movie/week",
    "trending/tv/week",
    "movie/upcoming",
  ];
  return (
    <div className="home_container">
      {/* Add a trending movie banner later */}
      <div className="grid_container">
        <p>Trending Movies</p>
        <MovieGrid apiends={apiParams[0]} />
      </div>
      <div className="grid_container">
        <p>Trending Tv shows</p>
        <MovieGrid apiends={apiParams[1]} />
      </div>
      <div className="grid_container">
        <p>Upcoming Flicks</p>
        <MovieGrid apiends={apiParams[2]} />
      </div>
    </div>
  );
}

export default Home;
