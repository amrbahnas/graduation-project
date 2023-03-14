import { store, persistor } from "./store/index.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./Main/Main";
import LogIn from "./pages/Log-in/LogIn";
import SignUp from "./pages/Sign-up/SignUp";
import MyChildren from "./pages/MyChildren/MyChildren.jsx";
import AddSubjectData from "./pages/Add-subject-data/AddSubjectData";
import StudentProfile from "./pages/Student-profile/StudentProfile";
import Subjects from "./pages/Student-profile/LocalComponents/Subjects/Subjects";
import Tasks from "./pages/Student-profile/LocalComponents/Tasks/Tasks";
import SingleTask from "./pages/Student-profile/LocalComponents/SingleTask/SingleTask";
import SelectSubject from "./components/Select-subject/SelectSubject.jsx";
import SelectUnit from "./pages/Add-subject-data/Local-component/SelectUnit/SelectUnit";
import SubjectData from "./components/SubjectData/SubjectData.jsx";
import Error from "./pages/Error/Error";
import AddFirstChild from "./pages/Add-first-child/AddFirstChild";
import ChildDashboard from "./pages/child-Dashboard/ChildDashboard";
import AddChild from "./pages/Add-child/AddChild";
import ManageAccount from "./pages/manage-account/ManageAccount";
import AsignTask from "./pages/Asign-task/AsignTask";
import ForgotPassword from "./pages/forgot_password/ForgotPassword.jsx";
import ErrorConstruction from "./pages/Error-construction/ErrorConstruction.jsx";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#ff5c0b",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/parent/my-children",
    element: <MyChildren />,
  },
  {
    path: "/AddSubjectData/:_id",
    element: <AddSubjectData />,
    children: [
      {
        index: true,
        element: <SelectSubject />,
      },
      {
        path: "/AddSubjectData/:_id/unit",
        element: <SelectUnit />,
      },
      {
        path: "/AddSubjectData/:_id/unit/SubjectData",
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

  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forget-password",
    element: <ForgotPassword />,
  },
  {
    path: "/addfirstchild",
    element: <AddFirstChild />,
  },
  {
    path: "/parent/my-children/:_id/manage-account",
    element: <ManageAccount />,
  },
  {
    path: "/parent/my-children/:_id/:currentPage/dashboard",
    element: <ChildDashboard />,
  },
  {
    path: "/AddChild",
    element: <AddChild />,
  },
  {
    path: "/parent/asigntask",
    element: <AsignTask />,
  },
  {
    path: "/error-construction",
    element: <ErrorConstruction />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
