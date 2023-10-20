import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Notfound from "../Notfound/Notfound";
import MainApi from "../../utils/MainApi";
import "../App/App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

 
  function handleSubmitLogin(data) {
    const { email, password } = data;
    MainApi.login(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        // setError("");
        navigate("/movies");
      })
      .catch((err) => {
        if (err.status === 400) {
          return ("Вы ввели неправильный логин или пароль");
        }
        console.error(`Ошибка: ${err}`);
      });
    }
      // .finally(() => {
      //   setIsSbmitting(false);
      // });

      function handleSubmitRegister(data) {
        const { email, password, name } = data;
        // setIsSbmitting(true);
        MainApi.register(name, email, password)
          .then(() => {
            navigate("/signin");
            handleSubmitLogin({ email, password });
            // setError("");
          })
          .catch((err) => {
            if (err.status === 409) {
              return ("Пользователь с таким email уже зарегистирован");
            }
            console.error(`Ошибка: ${err}`);
          });
          // .finally(() => {
          //   setIsSbmitting(false);
          // });
      }
      function checkToken() {
        const jwt = localStorage.getItem("token");
        if (jwt) {
          MainApi.getContent(jwt)
            .then((data) => {
              if (!data) {
                return;
              }
              console.log(data);
              setCurrentUser(data);
              setLoggedIn(true);
              // getMovies();
            })
            .catch(() => {
              setLoggedIn(false);
            });
        }
      }
 React.useEffect(() => {
    checkToken();
  }, []);

  function handleLoggedIn() {
    setLoggedIn(true);
  }
  function handlePageBack() {
    navigate(-1);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} />
            }
          />

          <Route
            path="/signup"
                element={<Register
                handleLoggedIn={handleLoggedIn}
                onSubmit={handleSubmitRegister}
              />
            }
          />
          <Route
            path="/signin"
                element={<Login 
                handleLoggedIn={handleLoggedIn}
                onSubmit={handleSubmitLogin}
              />
            }
          />
          <Route path="*" element={<Notfound onBack={handlePageBack} />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
