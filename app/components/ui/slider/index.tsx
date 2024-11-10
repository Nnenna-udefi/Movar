"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import CaptainAmerica from "@/app/images/captainAmerica.jpg";
import C1992 from "@/app/images/1992.jpg";
import Backdrop from "@/app/images/backdrop.jpg";
import Bolt from "@/app/images/bolt.jpg";
import Gremlins from "@/app/images/gremlins.jpg";
import LoveLetter from "@/app/images/loveletter.jpg";
import StrangerThings from "@/app/images/stranger-things.jpg";


const SliderShow = () => {
  const filteredImages = [
    {
      id: 1,
      img: CaptainAmerica,
    },
    {
      id: 2,
      img: C1992,
    },
    {
      id: 3,
      img: Backdrop,
    },
    {
      id: 4,
      img: Bolt,
    },
    {
      id: 5,
      img: Gremlins,
    },
    {
      id: 6,
      img: LoveLetter,
    },
    {
      id: 7,
      img: StrangerThings,
    },
  ];

  useEffect(() => {
    const slider = document.getElementById("slider");
    if (slider) {
      const autoSlide = setInterval(() => {
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
          // If at the end, scroll back to the start
          slider.scrollLeft = 0;
        } else {
          // Otherwise, slide to the next image
          slider.scrollLeft += slider.offsetWidth;
        }
      }, 3000); // Slide every 3 seconds

      return () => clearInterval(autoSlide); // Clean up the interval on component unmount
    }
  }, []);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - slider.offsetWidth;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + slider.offsetWidth;
    }
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center px-5 flex-col mx-auto max-w-[1200px]">
          <div className="flex justify-between">
            <h3></h3>
            <div className="flex gap-2">
              <button
                title="scroll left"
                onClick={slideLeft}
                className="hover:bg-red-500 text-white bg-none p-[1rem] text-xl border-none h-16 w-16 cursor-pointer transition-all duration-150 ease-in"
              >
                <AiOutlineArrowLeft />
              </button>
              <button
                title="scroll right"
                onClick={slideRight}
                className="hover:bg-red-500 text-white bg-none p-[1rem] text-xl border-none h-16 w-16 cursor-pointer transition-all duration-150  ease-in"
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div
            className="relative flex overflow-x-scroll overflow-y-hidden scroll-smooth hide-scrollbar"
            id="slider"
          >
            {filteredImages.map((image) => (
              <div key={image.id} className="w-full flex-shrink-0">
                <Link href={`/`} className="w-full ">
                  <div className=" ">
                    <Image
                      src={image.img}
                      alt="product"
                      width={800}
                      height={500}
                      className="object-cover md:w-3/4 w-full "
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderShow;
