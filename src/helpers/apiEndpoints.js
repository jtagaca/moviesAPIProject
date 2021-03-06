const apiKey = process.env.REACT_APP_API_KEY;

export const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

export const movieDetailsUrl = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

export const movieTrailerUrl = id => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

export const recommendationsUrl = id => `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`;

export const searchUrl = query => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&include_adult=false`;
