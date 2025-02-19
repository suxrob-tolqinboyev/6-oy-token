import { Route, Routes } from "react-router";
import Home from "../components/home/index";
import Admin from "../components/admin/index";

import Layout from "../components/layout/index.jsx";

import Cart from "../components/cartProduct/index.jsx";
import About from "../pages/About/index.jsx";
import Login from "../components/login/login.jsx";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};
export default Router;
