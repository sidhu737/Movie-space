import React, { useEffect, useState } from "react";
import "./DetailPage.css";
import { useParams } from "react-router-dom";
import fetchUtil from "./fetch-utils";
import { apiEndpoint } from "./constants";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [Movieinfo, setMovieinfo] = useState('')
  // const result = fetchUtil.get();


  useEffect(() => {
    details()
  }, [])
  async function details() {
    const fetchurl = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c13a3b6a16f4d71c66ffdc6d124c6851`)
    const data = await fetchurl.json();
    // console.log(data)
    setMovieinfo(data)
  }
  console.log(Movieinfo.map((data)=>{
    return data
  }))
  console.log("MovieDetailPage: " + id)
  return (
    <div className="detail_page">
      <div className="bg_detail_page" style={{
        backgroundImage: `url(${apiEndpoint.imageUrl}/kyeqDT2cFhTmwlvtuQY3n2W6Vf3.jpg)`,
      }}>
        <div className="bg_grad"></div>
        <div className="page_header">
          <div className="header_content">
            <div className="left_content">
              <img src={`${apiEndpoint.imageUrl}/dniWicB6fa7NvpGbguxWlNPMc5f.jpg`}></img>
            </div>
            <div className="right_content">
              <div className="original_title">
                <h1>Guardians of the Galaxy Vol. 3</h1>
                <p >Once more with feeling.</p>
              </div>
              <div className="movie_info">
                <div className="movie_rating">
                  <p>rating:4.5</p>
                  <p>(1817 Votes)</p>
                </div>
                <div className="movie_data">
                  <p>runtime<br /> 150 min</p>
                  <p> Realse Date<br /> 2023-05-03</p>
                </div>
              </div>
              <div className="movie_genres">
                <p>Science Fiction</p>
                <p>Adventure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
