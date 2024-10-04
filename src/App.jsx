import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Routers";
import ScrollUpButton from "./components/ScrollUpButton";
import BlurryCursor from "./components/Cursor";

function App() {
  return (
    <div className="relative font-custom">
      <BlurryCursor />
      <ScrollUpButton />
      <BrowserRouter>
        <Navbar />
        <Routers />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
