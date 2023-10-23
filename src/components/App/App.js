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
import { searchMovies } from "../../utils/utils";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isErrorMessage, setIsErrorMessage] = React.useState("");
  const [isSuccessMessage, setIsSuccessMessage] = React.useState("");
  const [allMovies, setAllMovies] = React.useState([]);
  const [saveMovies, setSaveMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isErrorLoadingMessage, setErrorLoadingMessage] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  //функция логина пользователя
  function handleSubmitLogin({ email, password }) {
    MainApi.login(email, password)
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
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
    // const { email, password, name } = data;
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
          getCardsMovies();
        })
        .catch(() => {
          setIsLoggedIn(false);
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
        // setInfoTooltip(true);
        setIsSuccessMessage("Данные изменены успешно");
        setIsErrorMessage(" ");
      })
      .catch((err) => {
        if (err.status === 11000) {
          return setIsErrorMessage("Пользователь с таким email уже существует");
        }
        setIsErrorMessage("Произошла ошибка при сохранении изменений");
      });
    // .finally(() => {
    //   setIsSbmitting(false);
    // });
  }
  //функция обработки фильмов
  function handleGetMovies(data) {
    // если стэйт всех фильмов allMovies пуст, то начинаем поиск
    //  и меняем значение стэйта загрузки isLoading c false на true
    if (allMovies.length === 0) {
      setIsLoading(true);
      //делаем запрос к базе данных всех фильмов и получаем их
      MoviesApi.getMovies()
        .then((res) => {
          // записываем полученные фильмы в стейт всех фильмов allMovies 
          setAllMovies(res);
          // сохраняем в переменную dataMovies результат выполнения функции фильтрации (найденные фильмы)
          //  в соответствии с запросом data
          const dataMovies = searchMovies(res, data);
          // записываем в localStorage результаты запросов
          localStorage.setItem("movies", JSON.stringify(dataMovies));
          localStorage.setItem("query", data);
          setErrorLoadingMessage("");
          //записываем в стэйт movies массив найденных фильмов
          setMovies(dataMovies);
          // если фильмы не найдены, то ошибка
          if (dataMovies.length === 0) {
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
    } else {
      // если стэйт всех фильмов allMovies не пуст, тогда запрос к базе данных не делаем,
      //  а выполняем поиск используя данные в стэйте
      const dataMovies = searchMovies(allMovies, data);
      localStorage.setItem("movies", JSON.stringify(dataMovies));
      setErrorLoadingMessage("");
      setMovies(dataMovies);
      if (dataMovies.length === 0) {
        setErrorLoadingMessage("По вашему запросу ничего не найдено");
      }
    }
  }
  // функция отрисовки карточек с фильмами
  function getCardsMovies() {
    MainApi.getInitialMovies()
      .then((data) => {
        setSaveMovies(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }
  function Exit() {
    localStorage.removeItem("token");
    localStorage.removeItem("saveMovies");
    localStorage.removeItem("movies");
    // localStorage.removeItem("checkbox");
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
                isLoggedIn={isLoggedIn}
                onSearch={handleGetMovies}
                isLoading={isLoading}
                isErrorLoadingMessage={isErrorLoadingMessage}
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
                saveMovies={saveMovies}
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
                isLoggedIn={!isLoggedIn}
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
                isLoggedIn={!isLoggedIn}
                isErrorMessage={isErrorMessage}
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
