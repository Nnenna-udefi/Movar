import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type MovieProps = {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
  tagline: string;
  imdb_id: string;
};

export const MovieDesc = ({
  title,
  release_date,
  poster_path,
  overview,
  vote_average,
  genres,
  tagline,
  imdb_id,
}: MovieProps) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full block bg-black md:flex p-3 my-2 gap-4"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width={300}
        height={200}
        className="w-[500px] h-[500px] "
      />
      <div className="md:ml-6 mt-4">
        <h2 className="font-semibold text-2xl my-2">{title}</h2>
        <div className="flex gap-2 items-center">
          <p>Tagline:</p>
          <p className="text-red-500">{tagline}</p>
        </div>
        <p className="py-4">{overview}</p>
        <div className="flex items-center flex-wrap gap-2">
          <p>Genre: </p>{" "}
          {genres.map((genre: Genre) => (
            <span
              key={genre.id}
              className="mr-2 p-1 bg-gray-200 text-black rounded"
            >
              {" "}
              {genre.name}
            </span>
          ))}
        </div>

        <p className="py-4">Release date: {release_date}</p>
        <p>Rating: {vote_average.toFixed(1)}/10</p>

        <Link
          href={`https://www.imdb.com/title/${imdb_id}`}
          className="uppercase text-red-500 py-4"
        >
          imdb
        </Link>
      </div>
    </motion.div>
  );
};
