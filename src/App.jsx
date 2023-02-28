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
import StudentProfile from "./pages/Student-profile/StudentProfile";
import Subjects from "./pages/Student-profile/LocalComponents/Subjects/Subjects";
import Tasks from "./pages/Student-profile/LocalComponents/Tasks/Tasks";
import SingleTask from "./pages/Student-profile/LocalComponents/SingleTask/SingleTask";
import Subject from "./pages/Game-setup/Local-component/Subject/Subject";
import TaskType from "./pages/Game-setup/Local-component/TaskType/TaskType";
import SubjectData from "./pages/Game-setup/Local-component/SubjectData/SubjectData";
import Error from "./pages/Error/Error";
import AddFirstChild from "./pages/Add-first-child/AddFirstChild";
import ChildDashboard from "./pages/child-Dashboard/ChildDashboard";
import AddChild from "./pages/Add-child/AddChild";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
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
        element: <TaskType />,
      },
      {
        path: "/gameSetup/:_id/unit/SubjectData",
        element: <SubjectData />,
      },
    ],
  },
  {
    path: "/mychildren",
    element: <MyChildren />,
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

  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/addfirstchild",
    element: <AddFirstChild />,
  },
  {
    path: "/dashboard/:id",
    element: <ChildDashboard />,
  },
  {
    path: "/AddChild",
    element: <AddChild />,
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
