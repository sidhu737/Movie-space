import React from "react";
import "./DetailPage.css";
import { useParams } from "react-router-dom";
const TVDetailPage = () => {
  const { id } = useParams();
  console.log("from detail_page", id);
  return <div className="detail_page">TVDetailPage</div>;
};

export default TVDetailPage;
