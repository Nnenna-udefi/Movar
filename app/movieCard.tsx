"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const MovieCard: React.FC<Movie> = ({
  title,
  poster_path,
  overview,
}) => {
  return (
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
        className="w-auto md:h-[60%] h-[40%]"
      />
      <h3 className="font-bold text-3xl my-3">{title}</h3>
      <p>{overview}</p>
    </motion.div>
  );
};
