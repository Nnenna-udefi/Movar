interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  overview: string;
}

interface RecommendationProps {
  likedMovies?: LikedMovies;
  allMovies: Movie[];
}
