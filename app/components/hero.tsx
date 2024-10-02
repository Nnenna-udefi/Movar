"use client";
import React, { useState } from "react";
import { Nav } from "./nav";
import { useRouter } from "next/navigation";
import SliderShow from "./ui/slider";

export const Hero = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/recommendation/${encodeURIComponent(query)}`);
    }
  };

  return (
    <div>
      <Nav />
      <div className="block lg:flex gap-4 items-center">
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        <div className="relative z-10 pt-32 h-[500px] gap-4 w-full">
          <h2 className="text-5xl tracking-widest">Find Movies to watch</h2>
          <p className="text-3xl py-8 md:w-3/4 w-full">
            Personalized suggestions discovered through the things you already
            love
          </p>

          <input
            type="text"
            placeholder="Search"
            className="border rounded-md p-2  w-full text-black bg-none md:w-1/2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="">
          <SliderShow />
        </div>
      </div>
    </div>
  );
};
