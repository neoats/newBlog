const LOGIN_API = "https://api.fmode.net/login";
const LOGOUT_API = "https://api.fmode.net/logout";
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const NEWS_API = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;

/* const LOGIN_API = "http://localhost:4001/login";
const LOGOUT_API = "http://localhost:4001/logout"; */

export { LOGIN_API, LOGOUT_API, NEWS_API };
