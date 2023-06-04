import React from "react";
import "./DetailPage.css";
import { useParams } from "react-router-dom";
import fetchUtil from "./fetch-utils";
const MovieDetailPage = () => {
  const { id } = useParams();
  const result = fetchUtil.get();
  return (
    <div className="detail_page">
      <p>Movie details</p>
    </div>
  );
};

export default MovieDetailPage;
