import { Route, Routes } from "react-router";
import Home from "../components/home/index";
import Ozbekiston from "../components/Ozbekiston/index";
import Jahon from "../components/Jahon/index";
import Jamiyat from "../components/Jamiyat/index";
// import Sport from "../components/Sport/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/comparison" element={<Ozbekiston />}></Route>
      <Route path="/jahon" element={<Jahon />}></Route>
      <Route path="/jamiyat" element={<Jamiyat />}></Route>
      
    </Routes>
  );
};
export default Router;
