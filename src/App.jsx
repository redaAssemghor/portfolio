import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Routers";

function App() {
  return (
    <div className="relative font-custom overflow-hidden">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
