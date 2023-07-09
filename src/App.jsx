import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import router from "./router";
import { persistor, store } from "./store/index";
// Create a client
const queryClient = new QueryClient();
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
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Toaster />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
