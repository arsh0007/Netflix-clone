const API_KEY = "4f81cd7a192ea6381edb137207a6bf81";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchToprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&withgenres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&withgenres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&withgenres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&withgenres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&withgenres=99`,
};
export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=4f81cd7a192ea6381edb137207a6bf81&language=en-US