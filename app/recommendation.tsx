// app/recommendation.tsx
import React from "react";
import { MovieCard } from "./movieCard";

interface LikedMovies {
  genres: number[];
}

const getRecommendedMovies = (
  likedMovies: LikedMovies | undefined,
  allMovies: Movie[]
): Movie[] => {
  if (!likedMovies || likedMovies.genres.length === 0) return [];
  return allMovies.filter((movie) =>
    movie.genre_ids.some((genre) => likedMovies.genres.includes(genre))
  );
};

interface RecommendationProps {
  likedMovies?: LikedMovies;
  allMovies: Movie[];
}

export const Recommendation: React.FC<RecommendationProps> = ({
  likedMovies,
  allMovies,
}) => {
  const recommendedMovies = getRecommendedMovies(likedMovies, allMovies);

  return (
    <div className="m-4">
      <h2>Top Picks</h2>
      <div className="md:grid grid-cols-3 gap-3 block">
        {recommendedMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
