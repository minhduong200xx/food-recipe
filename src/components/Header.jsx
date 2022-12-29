import React from "react";
import { Link } from "react-router-dom";
import transitions from "bootstrap";
import Logo from "../img/frlogo.svg";
import { RxAvatar } from "react-icons/rx";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  return (
    <div>
      <header className="fixed z-50 w-screen ">
        <nav className="flex navbar navbar-expand-lg navbar-light bg-orange-400 ">
          <div className="container-fluid padding-media">
            <div className="container padding-media">
              <nav className="navbar navbar-toggleable-md navbar-light">
                <button
                  className="navbar-toggler mt-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  data-bs-parent="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="true"
                  aria-label="Toggle Navigation"
                >
                  <span className="fa fa-bars"></span>
                </button>
                <div
                  className="flex justify-center navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <motion.ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to={"/"} className="flex items-center px-8">
                      <img
                        src={Logo}
                        className="h-14 w-24  object-cover"
                        alt="logo"
                      />
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link text- ${
                          active === "home" ? "active" : ""
                        }`}
                        onClick={() => setActive("home")}
                      >
                        Trang chủ
                      </li>
                    </Link>
                    <Link to="/blogs" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link text- ${
                          active === "blogs" ? "active" : ""
                        }`}
                        onClick={() => setActive("blogs")}
                      >
                        Công Thức
                      </li>
                    </Link>

                    {userId ? (
                      <Link to="/create" style={{ textDecoration: "none" }}>
                        <li
                          className={`nav-item nav-link text- ${
                            active === "create" ? "active" : ""
                          }`}
                          onClick={() => setActive("create")}
                        >
                          Thêm
                        </li>
                      </Link>
                    ) : (
                      <Link to="/auth" style={{ textDecoration: "none" }}>
                        <li
                          className={`nav-item nav-link text- ${
                            active === "create" ? "active" : ""
                          }`}
                          onClick={() => {
                            toast.warn("Vui lòng đăng nhập để thêm công thức!");
                            setActive("login");
                          }}
                        >
                          Thêm
                        </li>
                      </Link>
                    )}

                    <Link to="/about" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link text- ${
                          active === "about" ? "active" : ""
                        }`}
                        onClick={() => setActive("about")}
                      >
                        Giới thiệu
                      </li>
                    </Link>
                  </motion.ul>
                  <div className="row g-3">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {userId ? (
                        <>
                          <div className="flex flex-row rounded-3xl bg-slate-200 px-3 justify-center items-center">
                            <div className="profile-logo">
                              <RxAvatar className="text-slate-500 h-10 w-10"></RxAvatar>
                            </div>
                            <p className="pl-4 font-semibold">
                              {user?.displayName}
                            </p>
                          </div>
                          <li
                            className="nav-item nav-link text-"
                            onClick={handleLogout}
                          >
                            Đăng Xuất
                          </li>
                        </>
                      ) : (
                        <Link to="/auth" style={{ textDecoration: "none" }}>
                          <li
                            className={`nav-item nav-link text- ${
                              active === "login" ? "active" : ""
                            }`}
                            onClick={() => setActive("login")}
                          >
                            Đăng Nhập
                          </li>
                        </Link>
                      )}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
