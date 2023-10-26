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
import * as MoviesApi from "../../utils/MoviesApi";
import "../App/App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { searchMovies, littleMovies } from "../../utils/utils";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isErrorMessage, setIsErrorMessage] = React.useState("");
  const [isSuccessMessage, setIsSuccessMessage] = React.useState("");
  const [allMovies, setAllMovies] = React.useState(
    JSON.parse(localStorage.getItem("allMovies")) || []
  );
  const [isSaveMovies, setIsSaveMovies] = React.useState(
    JSON.parse(localStorage.getItem("saveMovies")) || []
  );
  const [isShort, setIsShort] = React.useState(
    JSON.parse(localStorage.getItem("short")) || false
  );
  const [isQuery, setIsQuery] = React.useState(
    localStorage.getItem("query") || ""
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const saveMovieId = (id) => isSaveMovies.some((card) => card.movieId === id);
  const [isErrorLoadingMessage, setErrorLoadingMessage] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  //функция логина пользователя
  function handleSubmitLogin({ email, password }) {
    MainApi.login(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        setCurrentUser(data.user);
        setIsErrorMessage("");
        navigate("/movies");
      })
      .catch((err) => {
        if (err.status === 400) {
          return setIsErrorMessage("Вы ввели неправильный логин или пароль");
        }
        setIsErrorMessage("При авторизации произошла ошибка");
      });
  }
  // .finally(() => {
  //   setIsSbmitting(false);
  // });
  //функция регистрации пользователя
  function handleSubmitRegister({ name, email, password }) {
    // setIsSbmitting(true);
    console.log(name);
    MainApi.register(name, email, password)
      .then(() => {
        navigate("/signin");
        handleSubmitLogin({ email, password });
        setIsErrorMessage("");
      })
      .catch((err) => {
        if (err.status === 409) {
          return setIsErrorMessage(
            "Пользователь с таким email уже зарегистирован"
          );
        }
        setIsErrorMessage(
          "Переданы некорректные данные при создании пользователя"
        );
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
          setCurrentUser(data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  React.useEffect(() => {
    checkToken();
  }, []);

  //функция редактирования страницы пользователя
  function handleEditProfile(data) {
    const token = localStorage.getItem("token");
    // setIsSbmitting(true);
    MainApi.editUserInfo(data, token)
      .then(() => {
        setCurrentUser({
          ...currentUser,
          name: data.name,
          email: data.email,
        });
        setIsSuccessMessage("Данные изменены успешно");
        setIsErrorMessage("");
      })
      .catch((err) => {
        if (err.status === 11000) {
          setIsErrorMessage("Пользователь с таким email уже существует");
        }
        setIsErrorMessage("Произошла ошибка при сохранении изменений");
      });
    // .finally(() => {
    //   setIsSbmitting(false);
    // });
  }
  //функция обработки фильмов
  function handleGetMovies(query) {
    if (allMovies.length === 0) {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then((res) => {
          setAllMovies(res);
          localStorage.setItem("allMovies", JSON.stringify(res));
          // ПОИСК
          const dataMovies = searchMovies(res, query);
          const filterMovies = littleMovies(dataMovies, isShort);
          localStorage.setItem("movies", JSON.stringify(filterMovies));
          localStorage.setItem("query", query);
          setErrorLoadingMessage("");
          setMovies(filterMovies);
          if (filterMovies.length === 0) {
            setErrorLoadingMessage("По вашему запросу ничего не найдено");
          }
        })
        .catch((err) => {
          setErrorLoadingMessage(
            "Во время запроса произошла ошибка, пожалуйста подождите"
          );
          console.log(`Ошибка ${err}`);
        })
        .finally(() => {
          setIsLoading(false);
        });

      const token = localStorage.getItem("token");
      MainApi.getInitialMovies(token)
        .then((data) => {
          setIsSaveMovies(data);
          localStorage.setItem("saveMovies", JSON.stringify(data));
        })
        .catch((err) => {
          console.log(`Ошибка ${err}`);
        });
    } else {
      const dataMovies = searchMovies(allMovies, query);
      const filterMovies = littleMovies(dataMovies, isShort);
      localStorage.setItem("movies", JSON.stringify(filterMovies));
      localStorage.setItem("query", query);
      setErrorLoadingMessage("");
      setMovies(filterMovies);
      if (filterMovies.length === 0) {
        setErrorLoadingMessage("По вашему запросу ничего не найдено");
      }
    }
  }

  function handleCheckbox(event) {
    const checkbox = event.target.checked;
    localStorage.setItem("short", checkbox);
    setIsShort(checkbox);
    const query = localStorage.getItem("query");
    if (query) {
      const dataMovies = searchMovies(allMovies, isQuery);
      const filterMovies = littleMovies(dataMovies, checkbox);
      localStorage.setItem("movies", JSON.stringify(filterMovies));
      localStorage.setItem("query", isQuery);
      setMovies(filterMovies);
    }
  }

  // функция сохранения фильма в сохраненные фильмы
  function handleSaveMovie(movie) {
    MainApi.addSaveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: "https://api.nomoreparties.co" + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail:
        "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
      .then((movie) => {
        setIsSaveMovies([movie, ...isSaveMovies]);
        localStorage.setItem(
          "saveMovies",
          JSON.stringify([movie, ...isSaveMovies])
        );
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }
  // функция удаления фильма
  function handleDelete(movieId) {
    const token = localStorage.getItem("token");
    console.log(movieId._id);
    MainApi.deleteMovie(movieId._id, token)
      .then(() => {
        setIsSaveMovies((state) => state.filter((c) => c._id !== movieId._id));
        localStorage.setItem(
          "saveMovies",
          JSON.stringify(
            isSaveMovies.filter((item) => item._id !== movieId._id)
          )
        );
        setMovies((state) => state.filter((c) => c._id !== movieId._id));
        localStorage.setItem(
          "movies",
          JSON.stringify(movies.filter((item) => item._id !== movieId._id))
        );
      })
      .catch(() => {});
  }

  function Exit() {
    localStorage.removeItem("token");
    localStorage.removeItem("saveMovies");
    localStorage.removeItem("movies");
    // localStorage.removeItem("checkbox");
    setIsQuery("");
    navigate("/");
    setIsLoggedIn(false);
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
              <ProtectedRoute
                element={Movies}
                movies={movies}
                setMovies={setMovies}
                isLoggedIn={isLoggedIn}
                onSearch={handleGetMovies}
                isLoading={isLoading}
                isErrorLoadingMessage={isErrorLoadingMessage}
                isQuery={isQuery}
                setIsQuery={setIsQuery}
                onCheckbox={handleCheckbox}
                isShort={isShort}
                handleSaveMovie={handleSaveMovie}
                onDelete={handleDelete}
                saveMovieId={saveMovieId}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                movies={movies}
                isSaveMovies={isSaveMovies}
                setIsSaveMovies={setIsSaveMovies}
                saveMovieId={saveMovieId}
                onDelete={handleDelete}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
                onSubmit={handleEditProfile}
                isErrorMessage={isErrorMessage}
                isSuccessMessage={isSuccessMessage}
                onClick={Exit}
              />
            }
          />

          <Route
            path="/signup"
            element={
              <Register
                isLoggedIn={isLoggedIn}
                onSubmit={handleSubmitRegister}
                isErrorMessage={isErrorMessage}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                onSubmit={handleSubmitLogin}
                isLoggedIn={isLoggedIn}
                isErrorMessage={isErrorMessage}
                setIsErrorMessage={setIsErrorMessage}
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
