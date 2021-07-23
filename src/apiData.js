const apiKey = "b89fc45c2067cbd33560270639722eae";
const imageUrl = "https://image.tmdb.org/t/p/w500/";

/* GetAPI */

const apiData = {
  movies: {
    async getMovie(id, type) {
      const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData;
    },

    async getNMovies(id) {
      const ids = id;
      const movies = [];

      for (id of ids) {
        const movie = await this.getMovie(id);
        movies.push(movie);
      }
      return movies;
    },

    async getPopularMovies() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData.results;
    },

    async getNPopularMoviesIds(n = 5) {
      try {
        const popularMovies = await this.getPopularMovies();
        const ids = popularMovies.slice(0, n).map((movie) => movie.id);
        return ids;
      } catch (error) {}
    },

    async getUpcomingMovies() {
      const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData.results;
    },

    async getNUpcomingMoviesIds(n = 5) {
      try {
        const upcomingMovies = await this.getUpcomingMovies();
        const ids = upcomingMovies.slice(0, n).map((movie) => movie.id);
        return ids;
      } catch (error) {}
    },

    async getNowPlayingMovies() {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
      const response = await fetch(url);
      const rawData = await response.json();
      return rawData.results;
    },

    async getNNowPlayingMoviesIds(n = 5) {
      try {
        const upcomingMovies = await this.getUpcomingMovies();
        const ids = upcomingMovies.slice(0, n).map((movie) => movie.id);
        return ids;
      } catch (error) {}
    },
  },
  images: {
    async getImageForID(id) {
      const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`;
      const response = await fetch(url);
      const rawData = await response.json();
      const data = rawData.backdrops;
      const imageGenreUrl = data[0].file_path;
      const image = imageUrl + imageGenreUrl;
      return image;
    },
  },
};

export default apiData;
/* Me estoy repitiendo mucho */
