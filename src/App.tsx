import { Provider } from "react-redux";
import Home from "./screens/Home";
import { store } from "./store/store";
import { Provider as ChakraProvider } from "@/components/ui/provider";

function App() {
  return (
    <>
      <ChakraProvider>
        <Provider store={store}>
          <Home />
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default App;
