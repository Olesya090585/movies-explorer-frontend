import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Notfound from "../Notfound/Notfound";
import "../App/App.css";

function App() {
  const [isLogin, setIsLogin] = React.useState(false);

  function handleIsLogin() {
    setIsLogin(true);
  }
  return (
        <div className="page">
          <Routes>
            <Route path="/" element={<Main handleIsLogin={handleIsLogin} isLogin={isLogin} />} />
            <Route path="/movies" element={<Movies handleIsLogin={handleIsLogin} isLogin={isLogin}/>} />
            <Route path="/saved-movies" element={<SavedMovies handleIsLogin={handleIsLogin} isLogin={isLogin}/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
  );
}

export default App;
