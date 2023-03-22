import React from "react";
import "./Common.css";
import { motion } from "framer-motion";
const SelectGame = () => {
  const Cart = ({ game }) => {
    return (
      <motion.div
        className="cart"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={selectGame}
      >
        <img src={`../../../public/assets/images/games/${game}.jpeg`} alt="" />
        <span className="title">{game}</span>
      </motion.div>
    );
  };
  const selectGame = (e, subject) => {
    document.querySelectorAll("#game  div").forEach((subject) => {
      subject.style.outline = "none";
    });
    e.target.parentElement.style.outline = "4px solid #ff5c0b";
  };
  return (
    <div className="select-game" id="game">
      <Cart game={"game1"} />
      <Cart game={"game2"} />
      <Cart game={"game3"} />
      <Cart game={"game4"} />
      <Cart game={"game5"} />
      <Cart game={"game6"} />
    </div>
  );
};

export default SelectGame;
