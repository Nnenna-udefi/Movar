"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Nav } from "@/app/components/nav";
import { MovieCard } from "@/app/components/movieCard";
import { LoadingSpinner } from "@/app/components/ui/loadingSpinner";

const RecommendationPage = () => {
  const { movieTitle } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const title = movieTitle ? decodeURIComponent(movieTitle as string) : "";

  useEffect(() => {
    if (movieTitle) {
      fetchMovies(movieTitle as string);
    }
  }, [movieTitle]);

  const fetchMovies = async (searchQuery: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchQuery}`
      );
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="px-8 py-4 bg-black h-screen text-white">
      <Nav />
      <div className="mt-6">
        {isLoading ? (
          <div className="grid h-screen place-items-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-semibold text-center uppercase italic">
              Recommendation
            </h1>
            <h2 className="text-3xl font-semibold text-center my-2">
              Since you liked &#34;{title}&#34;, here are similar movies you
              might enjoy.
            </h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gird-cols-1 gap-4 items-center mt-8">
              {movies.length > 0 ? (
                movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
              ) : (
                <p className="text-2xl  text-center text-red-500">
                  Opps, we do not have that in our database.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationPage;
