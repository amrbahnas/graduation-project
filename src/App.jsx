import { store, persistor } from "./store/index.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  LogIn,
  SignUp,
  MyChildren,
  AddSubjectData,
  SelectUnit,
  Error,
  AddFirstChild,
  ChildDashboard,
  AddChild,
  ManageAccount,
  AsignTask,
  ForgotPassword,
  ErrorConstruction,
} from "./pages/index";
import SelectSubject from "./components/Select-subject/SelectSubject.jsx";
import SubjectData from "./components/SubjectData/SubjectData.jsx";
import ProcessLoading from "./components/Process-loading/ProcessLoading";
import LoginReq from "../Protected-Routes/LoginReq.jsx";
import LoginNotReq from "../Protected-Routes/LoginNotReq.jsx";

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
    element: (
      <LoginNotReq>
        <Home />
      </LoginNotReq>
    ),
    errorElement: <Error />,
  },
  {
    path: "/parent/my-children",
    element: (
      <LoginReq>
        <MyChildren />
      </LoginReq>
    ),
  },
  {
    path: "/AddSubjectData/:_id",
    element: (
      <LoginReq>
        <AddSubjectData />
      </LoginReq>
    ),
  },

  {
    path: "/login",
    element: (
      <LoginNotReq>
        <LogIn />,
      </LoginNotReq>
    ),
  },
  {
    path: "/signup",
    element: (
      <LoginNotReq>
        <SignUp />,
      </LoginNotReq>
    ),
  },
  {
    path: "/forget-password",
    element: (
      <LoginNotReq>
        <ForgotPassword />,
      </LoginNotReq>
    ),
  },
  {
    path: "/parent/add-first-child",
    element: (
      <LoginReq>
        <AddFirstChild />
      </LoginReq>
    ),
  },
  {
    path: "/parent/my-children/:_id/manage-account",
    element: (
      <LoginReq>
        <ManageAccount />
      </LoginReq>
    ),
  },
  {
    path: "/parent/my-children/:_id/:currentPage/dashboard",
    element: (
      <LoginReq>
        <ChildDashboard />
      </LoginReq>
    ),
  },
  {
    path: "/AddChild",
    element: (
      <LoginReq>
        <AddChild />
      </LoginReq>
    ),
  },
  {
    path: "/parent/asigntask",
    element: (
      <LoginReq>
        <AsignTask />
      </LoginReq>
    ),
  },
  {
    path: "/error-construction",
    element: (
      <LoginReq>
        <ErrorConstruction />
      </LoginReq>
    ),
  },
  {
    path: "/loading",
    element: (
      <LoginReq>
        <ProcessLoading />,
      </LoginReq>
    ),
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
