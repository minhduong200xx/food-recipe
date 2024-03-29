import { useState, useEffect } from "react";
import "./App.css";
import "./style.scss";
import "./media-query.css";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./pages/Detail/Detail";
import AddEditBlog from "./pages/AddEditBlog/AddEditBlog";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header";
import Auth from "./pages/Auth/Auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import TagBlog from "./pages/TagBlog/TagBlog";
import CategoryBlog from "./pages/CategoryBlog/CategoryBlog";
import ScrollToTop from "./components/ScrollToTop";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };

  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-slate-100">
        <Header
          setActive={setActive}
          active={active}
          user={user}
          handleLogout={handleLogout}
        />
        <ScrollToTop />
        <ToastContainer position="top-center" />
        <div className="w-screen h-full mt-20">
          <Routes className="">
            <Route
              path="/"
              element={
                <Home setActive={setActive} active={active} user={user} />
              }
            />
            <Route
              path="/search"
              element={<Home setActive={setActive} user={user} />}
            />
            <Route
              path="/detail/:id"
              element={<Detail setActive={setActive} user={user} />}
            />
            <Route
              path="/create"
              element={
                user?.uid ? <AddEditBlog user={user} /> : <Navigate to="/" />
              }
            />
            <Route
              path="/update/:id"
              element={
                user?.uid ? (
                  <AddEditBlog user={user} setActive={setActive} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="/blogs" element={<Blogs setActive={setActive} />} />
            <Route
              path="/tag/:tag"
              element={<TagBlog setActive={setActive} />}
            />
            <Route
              path="/category/:category"
              element={<CategoryBlog setActive={setActive} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/auth"
              element={<Auth setActive={setActive} setUser={setUser} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
