import React from "react";
import { useParams } from "react-router-dom";
import ColorGame from "../../components/Games/ColorGame/ColorGame";
import MemoryGame from "../../components/Games/Memory/MemoryGame";
import ConentGame from "../../components/Games/ConentGame/ConentGame";
const Game = () => {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <ColorGame />;
    case "2":
      return <MemoryGame />;
    case "3":
      return <ConentGame />;
    default:
      return <EnglishLearnGame />;
  }
};

export default Game;
