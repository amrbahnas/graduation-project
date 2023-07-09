import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginNotReq from "../Protected-Routes/LoginNotReq.jsx";
import LoginReq from "../Protected-Routes/LoginReq.jsx";
import ProcessLoading from "./components/Process-loading/ProcessLoading.jsx";
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const LogIn = lazy(() => import("./pages/Log-in/LogIn.jsx"));
const SignUp = lazy(() => import("./pages/Sign-up/SignUp.jsx"));
const MyChildren = lazy(() => import("./pages/MyChildren/MyChildren.jsx"));
const AddSubjectData = lazy(() =>
  import("./pages/Add-subject-data/AddSubjectData.jsx")
);
const Error = lazy(() => import("./pages/Error/Error.jsx"));
const AddFirstChild = lazy(() =>
  import("./pages/Add-first-child/AddFirstChild.jsx")
);
const ChildDashboard = lazy(() =>
  import("./pages/child-Dashboard/ChildDashboard.jsx")
);
const AddChild = lazy(() => import("./pages/Add-child/AddChild.jsx"));
const ManageAccount = lazy(() =>
  import("./pages/manage-account/ManageAccount.jsx")
);
const AsignTask = lazy(() => import("./pages/Asign-task/AsignTask.jsx"));
const ForgotPassword = lazy(() =>
  import("./pages/forgot_password/ForgotPassword.jsx")
);
const ErrorConstruction = lazy(() =>
  import("./pages/Error-construction/ErrorConstruction.jsx")
);
const GamesList = lazy(() => import("./pages/Games/GamesList.jsx"));
const Game = lazy(() => import("./pages/Game/Game.jsx"));
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
    path: "/games",
    element: (
      <Suspense fallback={<ProcessLoading />}>
        <GamesList />
      </Suspense>
    ),
  },
  {
    path: "/games/:id/*",
    element: (
      <Suspense fallback={<ProcessLoading />}>
        <Game />
      </Suspense>
    ),
  },
  {
    path: "/parent/my-children",
    element: (
      <LoginReq>
        {" "}
        <MyChildren />{" "}
      </LoginReq>
    ),
  },
  {
    path: "/parent/AddSubjectData/:_id",
    element: (
      <LoginReq>
        {" "}
        <AddSubjectData />{" "}
      </LoginReq>
    ),
  },
  {
    path: "/login",
    element: (
      <LoginNotReq>
        {" "}
        <LogIn />{" "}
      </LoginNotReq>
    ),
  },
  {
    path: "/signup",
    element: (
      <LoginNotReq>
        {" "}
        <SignUp />{" "}
      </LoginNotReq>
    ),
  },
  {
    path: "/forget-password",
    element: (
      <LoginNotReq>
        {" "}
        <ForgotPassword />{" "}
      </LoginNotReq>
    ),
  },
  {
    path: "/parent/add-first-child",
    element: (
      <LoginReq>
        {" "}
        <AddFirstChild />{" "}
      </LoginReq>
    ),
  },
  {
    path: "/parent/my-children/:_id/manage-account",
    element: (
      <LoginReq>
        {" "}
        <ManageAccount />{" "}
      </LoginReq>
    ),
  },
  {
    path: "/parent/my-children/:_id/:currentPage/dashboard",
    element: (
      <LoginReq>
        {" "}
        <ChildDashboard />{" "}
      </LoginReq>
    ),
  },
  {
    path: "/parent/AddChild",
    element: (
      <LoginReq>
        {" "}
        <AddChild />{" "}
      </LoginReq>
    ),
  },
  {
    path: "/parent/asigntask",
    element: (
      <LoginReq>
        {" "}
        <AsignTask />{" "}
      </LoginReq>
    ),
  },
  {
    path: "/error-construction",
    element: (
      <LoginReq>
        {" "}
        <ErrorConstruction />{" "}
      </LoginReq>
    ),
  },
  {
    path: "/loading",
    element: (
      <LoginReq>
        {" "}
        <ProcessLoading />{" "}
      </LoginReq>
    ),
  },
]);
export default router;
