import React, { useEffect, useState } from "react";
import fetchUtil from "./fetch-utils";
import { apiEndpoint } from "./constants";
import "./common-styles.css";
function ListingPage({ paramValue, genreID, subparam }) {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const result = fetchUtil.get(paramValue, subparam);
    result.then((data) => {
      setTimeout(() => {
        setListData(data["results"]);
      }, 1500);
    });
  }, [genreID]);
  console.log(paramValue, subparam);
  return (
    <div className="page_container">
      {listData &&
        listData.length > 0 &&
        listData.map((data) => {
          return (
            <div
              className="list_card"
              style={{
                backgroundImage: `url(${apiEndpoint.imageUrl}${data["poster_path"]})`,
              }}
            >
              <p className="card_title">
                {data.title ? data.title : data.name}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default ListingPage;
