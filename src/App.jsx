import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactMe from "./pages/Contact";
import ScrollUpButton from "./ScrollUpButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TestingGsap from "./components/GsapAnimations";

function App() {
  return (
    <div className="font-custom ">
      <ScrollUpButton />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
