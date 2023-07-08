import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import router from "./router";
import { persistor, store } from "./store/index";
const theme = createTheme({
  status: { danger: "#e53e3e" },
  palette: {
    primary: { main: "#ff5c0b", darker: "#053e85" },
    neutral: { main: "#64748B", contrastText: "#fff" },
  },
});
function App() {
  return (
    <Provider store={store}>
      {" "}
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        <ThemeProvider theme={theme}>
          {" "}
          <RouterProvider router={router} /> <Toaster />{" "}
        </ThemeProvider>{" "}
      </PersistGate>{" "}
    </Provider>
  );
}
export default App;
