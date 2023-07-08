import "./App.css";

import { GiTwirlyFlower } from "react-icons/gi";

import { Link } from "react-router-dom";
import Greeting from "./components/Greeting";
import Points from "./components/Points";

function App() {
  return (
    <div className="App">
      <main>
        <div className="heading">
          <img
            src="https://freepngimg.com/thumb/doraemon/80623-area-nobi-doraemon-cartoon-line-nobita-thumb.png"
            alt=" logo"
            className="title-image"
          />
          <h1 className="title">
            Game<span className="title-span">Based Learn</span>
          </h1>
        </div>
        <Greeting />
        <section className="home-section">
          <Link to="games">
            <div className="quiz-button">
              <div>
                <h2>Games</h2>
                <p>Learning fun</p>
              </div>
              <GiTwirlyFlower className="feather" />
            </div>
          </Link>
        </section>
        <Points />
      </main>
    </div>
  );
}

export default App;
