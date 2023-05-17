import { useEffect, useState } from "react";
import "./Common.css";

const specialGames = {
  english: [
    {
      name: "game5",
      id: "5",
    },
  ],
  math: [],
  arabic: [],
};

export const games = {
  english: [
    {
      name: "game0",
      id: "0",
    },
    {
      name: "game1",
      id: "1",
    },
    {
      name: "game2",
      id: "2",
    },
  ],
  math: [
    {
      name: "game3",
      id: "3",
    },
    {
      name: "game4",
      id: "4",
    },
  ],
  arabic: [],
};

const SelectGame = ({ setgames, setEnableBTN, subjectName }) => {
  const [selectedGames, setselectedGames] = useState([]);
  const [specialSelectedGames, setSpecialSelectedGames] = useState([]);

  useEffect(() => {
    if (selectedGames.length > 0) {
      setgames(selectedGames);
    } else {
      setgames(specialSelectedGames);
    }
    setEnableBTN(selectedGames.length > 0 || specialSelectedGames.length > 0);
  }, [selectedGames, specialSelectedGames]);

  const addGameToSelected = (id, special) => {
    if (special) {
      setselectedGames([]);
      setSpecialSelectedGames((prevIds) =>
        prevIds.includes(id)
          ? prevIds.filter((prevId) => prevId !== id)
          : [...prevIds, id]
      );
    } else {
      setSpecialSelectedGames([]);
      setselectedGames((prevIds) =>
        prevIds.includes(id)
          ? prevIds.filter((prevId) => prevId !== id)
          : [...prevIds, id]
      );
    }
  };

  const Cart = ({ game, id, addGame, state, special }) => {
    return (
      <div
        onClick={() => addGame(id, special)}
        className={
          state.includes(id)
            ? " outline-4 outline-[#ff5c0b] outline cart"
            : "cart"
        }
      >
        <img src={`/assets/images/games/${game}.jpeg`} alt="" />
        <span className="title">{game}</span>
      </div>
    );
  };

  return (
    <>
      <div className="select-game" id="game">
        {games[subjectName].map((game) => (
          <Cart
            game={game.name}
            id={game.id}
            key={game.id}
            addGame={addGameToSelected}
            state={selectedGames}
            special={false}
          />
        ))}
        {/* <Cart game={"game2"} id={"2"} key={"2"} />
      <Cart game={"game3"} id={"4"} key={"4"} />
      <Cart game={"game4"} id={"5"} key={"3"} />
      <Cart game={"game5"} id={"6"} key={"5"} />
      <Cart game={"game6"} id={"1"} key={"6"} /> */}
      </div>
      {subjectName === "english" && (
        <div>
          <hr />
          <div className=" p-4 text-neutral-800 font-semibold text-lg  capitalize">
            special Games
          </div>
          <div className="select-game" id="game">
            {specialGames[subjectName].map((game) => (
              <Cart
                game={game.name}
                id={game.id}
                key={game.id}
                addGame={addGameToSelected}
                state={specialSelectedGames}
                special={true}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SelectGame;
