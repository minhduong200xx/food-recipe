import React from "react";
import Logo from "../img/frlogo.svg";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
const Footer = ({ setActive, active }) => {
  return (
    <div>
      <footer className="w-screen h-full relative bg-orange-400 pt-8 pb-2">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4 flex justify-center flex-col items-center">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center jc">
                  <Link to="/">
                    <img className="h-24 w-28" src={Logo} alt="" />
                  </Link>
                  <a className="slogan mt-0 ml-2 text-3xl font-semibold hover:text-gray-100">
                    Công thức hay! Nấu ăn ngay!
                  </a>
                </div>
                <div className="flex flex-row flex-2 gap-1 w-full p-2">
                  <img
                    className="w-40 h-28 rounded-lg"
                    src="https://loremflickr.com/320/240/cooking"
                    alt=""
                  />
                  <img
                    className="w-40 h-28 rounded-lg"
                    src="https://loremflickr.com/320/240/beef"
                    alt=""
                  />
                  <img
                    className="w-40 h-28 rounded-lg"
                    src="https://loremflickr.com/320/240/noodle"
                    alt=""
                  />
                  <img
                    className="w-40 h-28 rounded-lg"
                    src="https://loremflickr.com/320/240/vegetable"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-gray-200 text-blue-500 shadow-lg font-normal h-10 w-10 pl-3 items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="">
                    <FaTwitter />
                  </a>
                </button>
                <button
                  className="bg-gray-200 text-blue-500 shadow-lg font-normal h-10 w-10 pl-3 items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://www.facebook.com/min.d2101">
                    <FaFacebook />
                  </a>
                </button>{" "}
                <button
                  className="bg-gray-200 text-gray-500 shadow-lg font-normal h-10 w-10 pl-3 items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://github.com/minhduong200xx">
                    <FaGithub />
                  </a>
                </button>{" "}
                <button
                  className="bg-gray-200 text-red-600 shadow-lg font-normal h-10 w-10 pl-3 items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaInstagram />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6 gap-4">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-200 text-xl pb-2 font-semibold mb-2 border-b-2 border-gray-600">
                    Liên kết
                  </span>
                  <ul className="list-unstyled flex flex-col gap-2">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link text-gray-200 hover:text-black font-semibold p-0 text-xl${
                          active === "home" ? "active" : ""
                        }`}
                        onClick={() => setActive("home")}
                      >
                        Trang chủ
                      </li>
                    </Link>
                    <Link to="/blogs" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link text-gray-200 hover:text-black font-semibold p-0 text-xl${
                          active === "blogs" ? "active" : ""
                        }`}
                        onClick={() => setActive("blogs")}
                      >
                        Công Thức
                      </li>
                    </Link>

                    <Link to="/create" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link text-gray-200 hover:text-black font-semibold p-0 text-xl${
                          active === "create" ? "active" : ""
                        }`}
                        onClick={() => setActive("create")}
                      >
                        Thêm
                      </li>
                    </Link>

                    <Link to="/about" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link text-gray-200 hover:text-black font-semibold p-0 text-xl${
                          active === "about" ? "active" : ""
                        }`}
                        onClick={() => setActive("about")}
                      >
                        Thông tin
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-200 text-xl pb-2 font-semibold mb-2 border-gray-600 border-b-2">
                    Khác
                  </span>
                  <ul className="list-unstyled flex flex-col gap-2">
                    <li>
                      <a
                        className="text-gray-200 hover:text-black font-semibold block pb-2 text-lg"
                        href="https://github.com/minhduong200xx/food-recipe"
                      >
                        Giấy phép
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-200 hover:text-black font-semibold block pb-2 text-lg"
                        href="#"
                      >
                        Điều khoản Sử dụng
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-200 hover:text-black font-semibold block pb-2 text-lg"
                        href="#"
                      >
                        Chính sách bảo mật
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3 border-blueGray-300"></hr>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-lg text-blueGray-500">
                Copyright © <span id="get-current-year">by Food Recipe </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
