import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/HomeLayout";
import ContactMe from "../pages/Contact";

const Routers = () => {
  return (
    <div className="">
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />
      </Switch>
    </div>
  );
};

export default Routers;
