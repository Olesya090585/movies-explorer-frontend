export class Api {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  async register(name, email, password) {
    const res = await fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
    return this._checkRequest(res);
  }

  async login(email, password) {
    const res = await fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    });
    return this._checkRequest(res);
  }

  async getContent(token) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return this._checkRequest(res);
  }

  async getUserData(token) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return this._checkRequest(res);
  }

  async editUserInfo(data, token) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    });
    return this._checkRequest(res);
  }

  async getInitialMovies(token) {
    const res = await fetch(`${this._baseUrl}/movies`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return this._checkRequest(res);
  }

  async deleteMovie(movieId, token) {
    const res = await fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return this._checkRequest(res);
  }

  async addSaveMovie(movies) {
    const res = await fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(movies),
    });
    return this._checkRequest(res);
  }
}

const api = new Api({
  baseUrl: "https://api.movies.ovarnakova.nomoredomainsicu.ru",
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
