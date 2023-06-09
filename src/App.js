import "./App.css";
import Header from "./components/Header/Header";
import "./fonts/Gotham-Bold.otf";
import { Routes, Route } from "react-router-dom";
import fetchUtil from "./common/fetch-utils";
import { apiEndpoint } from "./common/constants";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import TVShows from "./components/TVShows/TVShows";
import Movies from "./components/Movies/Movies";
import Shimmer from "./components/Shimmer/Homeshimmer";
import MovieDetailPage from "./common/MovieDetailPage";
import TVDetailPage from "./common/TVDetailPage";

function App() {
  return (
    // <div className="bg-slate-400">
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Shimmer />}></Route>
        <Route path="/tvshows" element={<TVShows />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetailPage />}></Route>
        <Route path="tvshows/:id" element={<TVDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
