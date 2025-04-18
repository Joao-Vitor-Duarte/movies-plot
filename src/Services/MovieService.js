import { fetchMovie } from "../utils/apiConnect.js";

class MovieService {
  static async getMovieInfo (movieName) {
    const movie = await fetchMovie(movieName);
    return movie;
  }

}

export default MovieService;