import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Notfound from "../Notfound/Notfound";

function App() {
  const [isLogin, setIsLogin] = React.useState(false);

  function handleIsLogin() {
    setIsLogin(true);
  }
  return (
    <div className="App">
      <div className="body">
        <div className="page">
          <Header handleIsLogin={handleIsLogin} isLogin={isLogin} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
