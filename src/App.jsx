import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { getUser } from "../src/api/auth";
import GlobalStyle from "./components/GlobalStyle";
import "./index.css";
import router from "./shared/Router";

function App() {
  useEffect(() => {
    getUser().then((response) => console.log(response));
  }, []);
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
