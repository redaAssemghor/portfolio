import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Routers";
import ScrollUpButton from "./components/ScrollUpButton";

function App() {
  return (
    <div className="font-custom">
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
