"use client";
import React, { useState } from "react";
import { Nav } from "./nav";
import { useRouter } from "next/navigation";
import HeroImage from "@/app/images/captainAmerica.jpg";
import Image from "next/image";

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
      <div className="flex gap-4 items-center">
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        <div className="relative z-10 pt-32 h-[500px] gap-4 w-full">
          <h2 className="text-5xl tracking-widest">Find Movies to watch</h2>
          <p className="text-3xl py-8 w-3/4">
            Personalized suggestions discovered through the things you already
            love
          </p>

          <input
            type="text"
            placeholder="Search"
            className="border rounded-md p-2  text-black bg-none w-1/2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div>
          <Image
            src={HeroImage}
            alt="hero image"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
