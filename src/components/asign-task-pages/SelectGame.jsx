import { useEffect, useState } from "react";
import "./Common.css";
const SelectGame = ({ setgames, setEnableBTN }) => {
  const [selectedGames, setselectedGames] = useState([]);

  useEffect(() => {
    if (selectedGames.length > 0) {
      setEnableBTN(true);
    } else {
      setEnableBTN(false);
    }
  }, [selectedGames]);

  const addGameToSelected = (id) => {
    setselectedGames((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    );
    setgames((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    );
  };

  const Cart = ({ game, id }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
      setIsSelected(!isSelected);
      addGameToSelected(id);
    };

    return (
      <div
        className="cart"
        onClick={handleClick}
        style={{
          outline: selectedGames.includes(id) ? "4px solid #ff5c0b" : "none",
        }}
      >
        <img src={`/assets/images/games/${game}.jpeg`} alt="" />
        <span className="title">{game}</span>
      </div>
    );
  };

  return (
    <div className="select-game" id="game">
      <Cart game={"game1"} id={"0"} key={"1"} />
      <Cart game={"game2"} id={"2"} key={"2"} />
      <Cart game={"game3"} id={"4"} key={"4"} />
      <Cart game={"game4"} id={"5"} key={"3"} />
      <Cart game={"game5"} id={"6"} key={"5"} />
      <Cart game={"game6"} id={"1"} key={"6"} />
    </div>
  );
};

export default SelectGame;
