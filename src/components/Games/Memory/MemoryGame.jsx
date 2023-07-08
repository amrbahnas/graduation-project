import { useEffect, useState } from "react";
import { images } from "./data";
import "./memory.css";

function MemoryGame() {
  const BLANK_CARD =
    "https://progitek.no/privat/bp/wp-content/uploads/2021/09/pexels-pixabay-235985-scaled.jpg";
  const [imagesArray, setImagesArray] = useState([]);
  const [cardsChosen, setCardsChosen] = useState([]);
  const [cardsChosenIds, setCardsChosenIds] = useState([]);
  const [points, setPoints] = useState(0);

  const [openCards, setOpenCards] = useState([]);

  function createCardBoard() {
    const imagesGenerated = images?.concat(...images);
    console.log(imagesGenerated);
    const shuffledArray = shuffleArray(imagesGenerated);
    setImagesArray(shuffledArray);
  }

  function flipImage(image, index) {
    // CHECK IF IMAGE IS SELECTED
    console.log(image, index);

    if (cardsChosenIds?.length === 1 && cardsChosenIds[0] === index) {
      // return
    }

    // Check if
    if (cardsChosen?.length < 2) {
      setCardsChosen((cardsChosen) => cardsChosen?.concat(image));
      setCardsChosenIds((cardsChosenIds) => cardsChosenIds?.concat(index));

      if (cardsChosen?.length === 1) {
        // Check if images are the same
        if (cardsChosen[0] === image) {
          setPoints((points) => points + 2);
          setOpenCards((openCards) =>
            openCards?.concat([cardsChosen[0], image])
          );
        }
        setTimeout(() => {
          setCardsChosenIds([]);
          setCardsChosen([]);
        }, 700);
      }
    }
  }

  function isCardChosen(image, index) {
    return cardsChosenIds?.includes(index) || openCards?.includes(image);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  function startOver() {
    setCardsChosenIds([]);
    setCardsChosen([]);
    setPoints(0);
    setOpenCards([]);
  }

  useEffect(() => {
    createCardBoard();
  }, []);

  return (
    <div class="text-center  flex justify-center flex-col items-center mb-10 memory">
      <h2 class="title">Memory Game</h2>
      <div class="flex items-center justify-between w-full">
        <div class="w-8/12">
          <h3 class="points">Points: {points}</h3>
        </div>
        <div class="w-4/12">
          <button type="button" class="btn" onClick={startOver}>
            New Game
          </button>
        </div>
      </div>

      <div className="flex flex-wrap w-full  justify-center">
        {imagesArray?.map((image, index) => {
          return (
            <div
              className="w-1/6 m-1 flex justify-center"
              key={index}
              onClick={() => flipImage(image, index)}
            >
              <img
                src={isCardChosen(image, index) ? image : BLANK_CARD}
                alt=""
                className="h-full max-h-40 w-full rounded-sm"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MemoryGame;
