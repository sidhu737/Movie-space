import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchUtil from "./fetch-utils";
import { apiEndpoint } from "./constants";
import "./common-styles.css";
function ListingPage({ paramValue, genreID, subparam }) {
  const navigate = useNavigate();
  //using navigate to push the id of clicked movie
  const handleNavigate = (id) => {
    navigate(`${id}`);
  };

  const [listData, setListData] = useState([]);
  //api calling here in useEffect on change of genre id
  useEffect(() => {
    const result = fetchUtil.get(paramValue, subparam);
    result.then((data) => {
      setTimeout(() => {
        setListData(data["results"]);
      }, 1500);
    });
  }, [genreID]);
  // console.log(paramValue, subparam);
  // console.log("From listing page", listData);
  return (
    <div className="page_container">
      {listData &&
        listData.length > 0 &&
        listData.map((data, index) => {
          return (
            <div
              className="list_card"
              style={{
                backgroundImage: `url(${apiEndpoint.imageUrl}${data["poster_path"]})`,
              }}
              key={index}
              onClick={() => {
                handleNavigate(data.id);
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
