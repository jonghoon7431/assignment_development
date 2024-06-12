import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import "./index.css";
import router from "./shared/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
