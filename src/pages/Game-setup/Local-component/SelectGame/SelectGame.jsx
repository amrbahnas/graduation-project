import React from "react";
import styles from "./SelectGame.module.css";
const SelectGame = () => {
  return (
    <div className={styles.selectGame}>
      <div className={styles.wrapper}>
        <div className={styles.game}>
          <img src="/assets/images/game1.jfif" alt="" />
          <span>Animals Game</span>
        </div>
        <div className={styles.game}>
          <img src="/assets/images/game2.jfif" alt="" />
          <span>Mero Game</span>
        </div>
        <div className={styles.game}>
          <img src="/assets/images/game3.jfif" alt="" />
          <span>Memory Game</span>
        </div>
      </div>
    </div>
  );
};

export default SelectGame;
