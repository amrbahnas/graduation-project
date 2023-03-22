import React from "react";
import "./Common.css";
import { motion } from "framer-motion";
const SelectGame = () => {
  const Cart = ({ title, img }) => {
    return (
      <motion.div
        className="cart"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={selectGame}
      >
        <img src="../../../public/assets/images/arabic.jpg" alt="" />
        <span className="title">{title}</span>
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
      <Cart title={"game1"} />
      <Cart title={"game1"} />
      <Cart title={"game1"} />
      <Cart title={"game1"} />
      <Cart title={"game1"} />
      <Cart title={"game1"} />
    </div>
  );
};

export default SelectGame;
