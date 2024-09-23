"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const MovieCard: React.FC<Movie> = ({ id, title, poster_path }) => {
  return (
    <Link href={`/movies/${id}`}>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col align-center p-3 m-2"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={300}
          height={200}
          className="md:w-[200px] w-full h-[300px] "
        />
        <h3 className="font-semibold text-xl my-3">{title}</h3>
      </motion.div>
    </Link>
  );
};
