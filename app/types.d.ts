interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
  tagline: string;
  imdb_id: string;
}

interface RecommendationProps {
  likedMovies?: LikedMovies;
  allMovies: Movie[];
}

interface Genre {
  id: number;
  name: string;
}
