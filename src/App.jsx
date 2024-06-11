import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import "./index.css";
import store from "./redux/config/configStore";
import router from "./shared/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
