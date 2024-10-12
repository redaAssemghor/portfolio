import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Routers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative font-custom overflow-auto scrollbar-webkit">
      <BrowserRouter>
        <Navbar />
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
