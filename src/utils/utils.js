  // функция поиска фильмов
  export function searchMovies(arr, data) {
    return arr.filter((item) => {
      return (
        item.nameRU.toLowerCase().includes(data.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(data.toLowerCase())
      );
    });
  }
  //функция получения короткомметражек
  export function littleMovies(data) {
    return data.filter((item) => item.duration <= 40);
  }