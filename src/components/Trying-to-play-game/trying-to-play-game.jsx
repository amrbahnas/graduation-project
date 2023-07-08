import React from "react";
import { Link } from "react-router-dom";

const TryGames = () => {
  return (
    <div className="tryGames max-w-md mx-auto mt-4 mb-12  h-[100px] flex justify-end items-center rounded-sm">
      <div className="flex  justify-between w-2/3 items-center">
        <div className=" font-bold text-lg">Try our games</div>
        <Link
          to="/games"
          className="
        tryGames__btn
        bg-[#ffffff]    
        text-[#000]
        font-bold
        px-4
        py-2
        rounded-md
        hover:bg-[#d1d1d1]
        transition
        duration-300
        ease-in-out
        mr-4
        shadow-md
        "
        >
          Go
        </Link>
      </div>
    </div>
  );
};

export default TryGames;
