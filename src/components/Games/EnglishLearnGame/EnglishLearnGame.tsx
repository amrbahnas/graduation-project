import React from "react";
import { useLocation } from "react-router-dom";

import App from "./App";
import Games from "./components/Games";
import SpellingGame from "./components/SpellingGame";
import SpellingGame2 from "./components/SpellingGame2";
import SpellingGame3 from "./components/SpellingGame3";

import ReadingGame from "./components/ReadingGame";
import ReadingGame2 from "./components/ReadingGame2";
import PointsProvider from "./components/PointsProvider";

function RenderComponent() {
  const location = useLocation();
  console.log(location.pathname);

  switch (location.pathname) {
    case "/games/4":
      return <App />;
    case "/games/4/games":
      return <Games />;
    case "/games/4/spellingGame":
      return <SpellingGame />;
    case "/games/4/readingGame":
      return <ReadingGame />;
    case "/games/4/spellingGame2":
      return <SpellingGame2 />;
    case "/games/4/spellingGame3":
      return <SpellingGame3 />;
    case "/games/4/readingGame2":
      return <ReadingGame2 />;
    default:
      return null;
  }
}

function EnglishLearnGame() {
  return (
    <PointsProvider>
      <div className="englishLearn">
        <RenderComponent />
      </div>
    </PointsProvider>
  );
}

export default EnglishLearnGame;
