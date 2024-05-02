import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white pt-[20%] px-12 absolute  bg-gradient-to-r from-black">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="py-6 w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white hover:bg-opacity-80  text-black py-2 px-5 rounded-lg">
          ▶️Play
        </button>
        <button className="bg-gray-200 bg-opacity-50 text-black py-2 px-5 mx-3 rounded-lg">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
