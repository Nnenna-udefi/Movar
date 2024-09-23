import React from "react";
import { Nav } from "./nav";

export const Hero = () => {
  return (
    <div>
      <Nav />
      <div className="pt-32 h-[500px] gap-4 w-full ">
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        <div className="relative z-10">
          <h2 className="text-5xl tracking-widest">Find Movies to watch</h2>
          <p className="text-3xl py-4 w-3/4">
            Personalized suggestions discovered through the things you already
            love
          </p>

          <input
            type="text"
            placeholder="Search"
            className="border rounded-md p-2 w-1/4"
          />
        </div>
      </div>
    </div>
  );
};
