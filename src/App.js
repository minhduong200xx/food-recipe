import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import About from "./pages/About";
import CreateRecipes from "./pages/CreateRecipes";
import Error from "./pages/Error";
import Auth from "./pages/Auth";
import { useState } from "react";
const App = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/congthuc" element={<Recipes />}></Route>
          <Route path="/congthuc/:id" element={<Recipe />}></Route>
          <Route path="/thongtin" element={<About />}></Route>
          <Route path="/tao" element={<CreateRecipes />}></Route>
          <Route path="/sua/:id" element={<CreateRecipes />}></Route>
          <Route path="/dangnhap" element={<Auth />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
