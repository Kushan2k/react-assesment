import { Provider } from "react-redux";
import Home from "./screens/Home";
import { store } from "./store/sote";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
