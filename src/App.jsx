import "./App.css";
import { store, persistor } from "./store/index.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./Main/Main";
import LogIn from "./pages/Log-in/LogIn";
import SignUp from "./pages/Sign-up/SignUp";
import MyChildren from "./pages/MyChildren/MyChildren.jsx";
import GameSetup from "./pages/Game-setup/GameSetup";
import StudentProfile from "./pages/StudentProfile/StudentProfile";
import Subjects from "./pages/StudentProfile/LocalComponents/Subjects/Subjects";
import Tasks from "./pages/StudentProfile/LocalComponents/Tasks/Tasks";
import SingleTask from "./pages/StudentProfile/LocalComponents/SingleTask/SingleTask";
import Subject from "./pages/Game-setup/Local-component/Subject/Subject";
import SelectUnit from "./pages/Game-setup/Local-component/SelectUnit/SelectUnit";
import SubjectData from "./pages/Game-setup/Local-component/SubjectData/SubjectData";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
        path: "/gameSetup/:_id",
        element: <GameSetup />,
        children: [
          {
            index: true,
            element: <Subject />,
          },
          {
            path: "/gameSetup/:_id/unit",
            element: <SelectUnit />,
          },
          {
            path: "/gameSetup/:_id/unit/SubjectData",
            element: <SubjectData />,
          },
        ],
      },
      {
        path: "/studentProfile/:_id",
        element: <StudentProfile />,
        children: [
          {
            index: true,
            element: <Subjects />,
          },
          {
            path: "/studentProfile/:_id/tasks/:subjectName",
            element: <Tasks />,
          },
          {
            path: "/studentProfile/:_id/tasks/:subjectName/:taskNumber",
            element: <SingleTask />,
          },
        ],
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
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
