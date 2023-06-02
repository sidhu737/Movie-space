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

function App() {
  return (
    <div className="bg-slate-400">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tvshows" element={<TVShows />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </div>
  );
}

export default App;
