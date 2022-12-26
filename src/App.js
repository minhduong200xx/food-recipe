import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
const App = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="w-screen h-120">this is main</main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
