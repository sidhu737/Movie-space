import React, { useEffect, useState } from "react";
import "./Banner.css";
import fetchUtil from "../../common/fetch-utils";
import { apiEndpoint } from "../../common/constants";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
const Banner = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [bannerData, setBannerData] = useState([]);
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 6000;
  useEffect(() => {
    const resultData = fetchUtil.get("movie/now_playing");
    resultData.then((data) => {
      setBannerData(data["results"].slice(0,4));
    });
    setCurrentSlide(0);
  }, []);
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  const nextSlide = () => {
    setCurrentSlide((prevVal) => {
      return prevVal == bannerData.length - 1 ? 0 : prevVal + 1;
    });
  };
  const prevSlide = () => {
    setCurrentSlide((prevVal) => {
      return prevVal === 0 ? bannerData.length - 1 : prevVal - 1;
    });
  };
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  const getDayMonth = (date) => {
    const d = new Date(date);
    return d.getDate() + "th " + months[d.getMonth()];
  };
  return (
    <div className="slider">
      <AiOutlineCaretLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineCaretRight className="arrow next" onClick={nextSlide} />
      {bannerData.map((data, index) => (
        <div
          className={index === currentSlide ? "slide current" : "slide"}
          key={index}
        >
          {index === currentSlide && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/original${data["backdrop_path"]}`}
                alt="banner image"
              />
              <div className="content">
                <div className="slider_details">
                  <h1>Now Playing</h1>
                  <h2 className="title">{data.title}</h2>
                  <hr />
                  <p className="releaseDate">
                    Release date: {getDayMonth(data.release_date)}
                  </p>
                  {/* <p className="overview">{data.overview}</p> */}
                  <span>
                    Rating: {data.vote_average}
                    <AiFillStar className="rating-icon" />
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Banner;