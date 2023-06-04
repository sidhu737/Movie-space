import React, { useEffect, useState } from "react";
import fetchUtil from "../../common/fetch-utils";
import { apiEndpoint } from "../../common/constants";
import "./MovieGrid.css";
import Shimmer from "../Shimmer/Homeshimmer";
function MovieGrid({ apiends }) {
  const [gridData, setGridData] = useState("");
  useEffect(() => {
    const mdata = fetchUtil.get(apiends);
    mdata.then((data) => {
      setTimeout(() => {
        console.log('This will run after 1 second!')
        setGridData(data["results"]);
      }, 1500);
      
    });
  }, []);
  console.log(gridData);
  return gridData.length === 0 ? <Shimmer /> : (
    <div className="grid_slider">
      {gridData &&
        gridData.map((data) => {
          return (
            <div
              className="grid_card"
              style={{
                backgroundImage: `url(${apiEndpoint.imageUrl}${data["poster_path"]})`,
              }}
            >
              <p className="grid_movieName">
                {data.title ? data.title : data.name}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default MovieGrid;
