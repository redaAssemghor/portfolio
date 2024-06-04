import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import ContactMe from "../pages/Contact";

const Routers = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactMe />} />
    </Switch>
  );
};

export default Routers;
