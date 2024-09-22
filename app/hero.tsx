import React from "react";

export const Hero = () => {
  return (
    <div className="bg-hero bg-opacity-30 bg-cover  p-8 h-[500px] gap-4 w-full ">
      <h2 className="text-5xl tracking-widest">Find Movies to watch</h2>
      <p className="text-3xl py-4 w-3/4">
        Personalized suggestions discovered through the things you already love
      </p>

      <input
        type="text"
        placeholder="search"
        className="border rounded-md p-2 w-1/4"
      />
    </div>
  );
};
