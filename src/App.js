import "./App.css";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./Main/Main";
import LogIn from "./pages/Log-in/LogIn";
import SignUp from "./pages/Sign-up/SignUp";
import MyChildren from "./pages/MyChildren/MyChildren.jsx";
import GameSetup from "./pages/Game-setup/GameSetup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/mychildren",
        element: <MyChildren />,
      },
      {
        path: "/gameSetup/:id",
        element: <GameSetup />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <RouterProvider router={router} />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
