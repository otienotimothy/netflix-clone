const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const BASE_URL = 'https://api.themoviedb.org/3/'

export const URL_PATHS = {
    popular: `movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    topRated: `movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${TMDB_API_KEY}`,
    horror: `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`
}