import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import Points from "./Points";

const Games = () => {
  const navigate = useNavigate();
  return (
    <section>
      <header>
        <p onClick={() => navigate(-1)}>
          <MdArrowBackIosNew className="back-arrow" />
        </p>
        <h1>Games</h1>
      </header>

      <Link to="spellingGame">
        <div className="games-button four">
          <h2>Spelling Game</h2>
          <p> Middle </p>
        </div>
      </Link>
      <Link to="readingGame">
        <div className="games-button three">
          <h2>Reading Game </h2>
          <p>Easy </p>
        </div>
      </Link>
      <Link to="spellingGame2">
        <div className="games-button five">
          <h2>Spelling Game </h2>
          <p>Easy </p>
        </div>
      </Link>
      <Link to="spellingGame3">
        <div className="games-button one">
          <h2>Spelling Game </h2>
          <p> Difficult</p>
        </div>
      </Link>
      <Link to="readingGame2">
        <div className="games-button two">
          <h2>Reading Game</h2>
          <p> Difficult</p>
        </div>
      </Link>
      <Points />
    </section>
  );
};

export default Games;
