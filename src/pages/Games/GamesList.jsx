import React from "react";
import { Link } from "react-router-dom";

const GamesList = () => {
  const games = [
    {
      id: 1,
      title: "Color Game",
      imageUrl: "./assets/images/games/forntGame/color.jpg",
    },
    {
      id: 2,
      title: "Memory Game",
      imageUrl: "./assets/images/games/forntGame/memory.jpg",
    },
    {
      id: 3,
      imageUrl: "./assets/images/games/forntGame/choose.png",
      title: "choose Game",
    },
    // Add more games as needed
  ];

  return (
    <div className="w-full bg-[#000e3b] min-h-screen">
      <div className="w-full text-center text-white font-bold text-4xl pt-20">
        Select Game
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center px-10 mt-10 md:mt-40 w-full ">
        {games.map((game) => (
          <Link
            key={game.id}
            to={"/games/" + game.id}
            className=" shadow-md bg-gray-200 flex-1
            max-w-[350px] 
          hover:-translate-y-3 hover:shadow-lg transition-all duration-200 rounded-md  overflow-hidden  border boeder-white
          "
          >
            <img
              src={game.imageUrl}
              alt={game.title}
              className="w-full h-[230px] object-fill"
            />
            <div className=" p-3 bg-slate-500 text-white">
              <h3 className="mt-2 text-lg font-semibold">{game.title}</h3>
            </div>
          </Link>
        ))}
        <a
          className=" shadow-md bg-gray-200 flex-1
            max-w-[350px] 
          hover:-translate-y-3 hover:shadow-lg transition-all duration-200 rounded-md  overflow-hidden  border boeder-white
          "
          href="https://english-learning-game.vercel.app/"
          target="_blank"
        >
          <img
            src={"./assets/images/games/forntGame/english.jpg"}
            alt={"English Learn Game"}
            className="w-full h-[230px] object-fill"
          />
          <div className=" p-3 bg-slate-500 text-white">
            <h3 className="mt-2 text-lg font-semibold">English Learn Game</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GamesList;
