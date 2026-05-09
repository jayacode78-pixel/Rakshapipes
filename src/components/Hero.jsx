

import { useState, useEffect } from "react";
import video1 from "../assets/VIDEO1.mp4";
import video2 from "../assets/VIDEO2.mp4";
import video3 from "../assets/VIDEO4.mp4";
import { Typewriter } from "./Typewriter";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


export default function Hero() {
  const videos = [video1, video2, video3];
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Go Next
  const nextVideo = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  // Go Previous
  const prevVideo = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden">

      {/* Background Videos */}
      {videos.map((video, index) => (
        <video
          key={index}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 scale-105" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
        <div className="text-center space-y-4">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide leading-tight">
            <Typewriter
              speed={100}
              words={[
                { text: "Welcome", color: "text-cyan-400" },
                { text: "to", color: "text-cyan-400" },
                { text: "Raksha", color: "text-white" },
                { text: "Pipes", color: "text-white" },
              ]}
            />
          </h1>

          {/* Subtext */}
          {/* <p className="text-lg md:text-2xl font-light tracking-wide">
            <Typewriter
              speed={80}
              words={[
                { text: "Jeevan", color: "text-white" },
                { text: "Bhar", color: "text-white" },
                { text: "Ki", color: "text-white" },
                { text: "Suraksha", color: "text-white" },
              ]}
            />
          </p> */}

       
          

        </div>
      </div>


   {/* CONTROLS (Bottom Right) */}
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-10">

  {/* Left Arrow */}
  <button
    onClick={prevVideo}
    className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition"
  >
    <FaAngleLeft />
  </button>

  {/* DOTS (now in same row) */}
  <div className="flex items-center gap-2 px-2">
    {videos.map((_, index) => (
      <div
        key={index}
        className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
          index === current ? "bg-red-400 w-4" : "bg-gray-400"
        }`}
        onClick={() => setCurrent(index)} // optional click support
      />
    ))}
  </div>

  {/* Right Arrow */}
  <button
    onClick={nextVideo}
    className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition"
  >
    <FaAngleRight />
  </button>

</div>

    </div>
  );
}