import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

function App() {
  return (
    <div className="flex justify-center items-center">
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
