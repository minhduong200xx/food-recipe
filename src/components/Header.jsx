import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-2 md:p-2 md:px-16 bg-[#ff914d]">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="h-16  object-cover" alt="logo" />
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <li className="text-lg text-white hover:text-black duration-100 transition-all ease-in-out cursor-pointer">
              Trang Chủ
            </li>
            <li className="text-lg text-white hover:text-black duration-100 transition-all ease-in-out cursor-pointer">
              Công thức
            </li>
            <li className="text-lg text-white hover:text-black duration-100 transition-all ease-in-out cursor-pointer">
              Thông tin
            </li>
            <li className="text-lg text-white hover:text-black duration-100 transition-all ease-in-out cursor-pointer">
              Liên hệ
            </li>
          </motion.ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
