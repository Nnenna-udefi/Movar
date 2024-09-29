"use client";

import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { MovieDesc } from "@/app/components/movieDesc";
import { Nav } from "@/app/components/nav";
import { LoadingSpinner } from "@/app/components/ui/loadingSpinner";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setMovie(data))
        .catch((error) => console.error("Error fetching movie details", error));
    }
  }, [id]);

  if (!movie) {
    return (
      <div className="grid h-screen place-items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="px-8 text-white bg-black my-4 h-screen font-custom">
      <div>
        <Nav />
      </div>
      <Breadcrumbs id={movie.id} title={movie.title} />
      <MovieDesc
        title={movie.title}
        tagline={movie.tagline}
        poster_path={movie.poster_path}
        overview={movie.overview}
        release_date={movie.release_date}
        vote_average={movie.vote_average}
        genres={movie.genres || []}
        imdb_id={movie.imdb_id}
      />
    </div>
  );
};

export default MovieDetailsPage;
