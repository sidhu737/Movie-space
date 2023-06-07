import React, { useState , useEffect } from "react";
import "./DetailPage.css";
import { apiEndpoint } from "./constants";
import fetchUtil from "./fetch-utils";
import { useParams } from "react-router-dom";

const TVDetailPage = () => {
  const[TVDetail,setTVDetail] = useState('')
  const { id } = useParams();

  const details =  () => {
    const result = fetchUtil.get(`tv/${id}`)
      .then((data) => {
        setTVDetail(data)
      }).catch((error) => {
        console.log(error.message + "details error")
      })
  }
  useEffect(() => {
    details()
  }, [])
  console.log("from detail_page", id);
  return <div className="detail_page">
    <div className="bg_detail_page" style={{
      backgroundImage: `url(${apiEndpoint.imageUrl}${TVDetail.backdrop_path})`,
    }}>
      <div className="bg_grad"></div>
      <div className="page_header">
        <div className="header_content">
          <div className="left_content">
            <img src={`${apiEndpoint.imageUrl}${TVDetail.poster_path}`}></img>
          </div>
          <div className="right_content">
            <div className="original_title">
              <h1>{TVDetail.original_name}</h1>
              <p >{TVDetail.tagline}</p>
            </div>
            <div className="movie_info">
              <div className="movie_rating">
                <p>rating:{TVDetail.vote_average}</p>
                <p>({TVDetail.vote_count}votes)</p>
              </div>
              <div className="movie_data">
                <p>runtime<br />{TVDetail.runtime}</p>
                <p> Realse Date<br />{TVDetail.release_date}</p>
              </div>
            </div>
            <div className="movie_genres">
              {/* {TVDetail.genres.map((movie_genres, index) =>{
                return ( <p key={movie_genres.id}>
                  {movie_genres.name}</p>) 
              })
              } */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default TVDetailPage;
