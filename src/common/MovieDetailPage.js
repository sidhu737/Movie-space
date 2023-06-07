import React, { useEffect, useState } from "react";
import "./DetailPage.css";
import { useParams } from "react-router-dom";
import fetchUtil from "./fetch-utils";
import { apiEndpoint } from "./constants";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [moviedata, setmoviedata] = useState('')

  const details =  () => {
    const result = fetchUtil.get(`movie/${id}`)
      .then((data) => {
        setmoviedata(data)
      }).catch((error) => {
        console.log(error.message + "details error")
      })
  }
  useEffect(() => {
    details()
  }, [])

  console.log("MovieDetailPage: " + id)
  console.log(moviedata.genres)
  console.log(moviedata)
  
  return (
    <div className="detail_page">
      <div className="bg_detail_page" style={{
        backgroundImage: `url(${apiEndpoint.imageUrl}${moviedata.backdrop_path})`,
      }}>
        <div className="bg_grad"></div>
        <div className="page_header">
          <div className="header_content">
            <div className="left_content">
              <img src={`${apiEndpoint.imageUrl}${moviedata.poster_path}`}></img>
            </div>
            <div className="right_content">
            <div className="original_title">
                <h1>{moviedata.original_title}</h1>
                <p >{moviedata.tagline}</p>
            </div>
            <div className="movie_info">
                <div className="movie_rating">
                    <p>rating:{moviedata.vote_average}</p>
                    <p>({moviedata.vote_count}votes)</p>
                </div>
                <div className="movie_data">
                    <p>runtime <br />{moviedata.runtime} min</p>
                    <p> Realse Date<br />{moviedata.release_date}</p>
                </div>
            </div>
            <div className="movie_genres">
              {/* {moviedata.genres.map((movie_genres, index) =>{
                return ( <p key={movie_genres.id}>
                  {movie_genres.name}</p>) 
              })
              } */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
