import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = ({ setActive, setUser }) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);

  const { email, password, firstName, lastName, confirmPassword } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(user);
        setActive("home");
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("Password don't match");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        setActive("home");
      } else {
        return toast.error("All fields are mandatory to fill");
      }
    }
    navigate("/");
  };

  return (
    <div className="container-fluid py-4 bg-gray-100">
      <div className="container w-2/3 bg-orange-300 rounded-2xl px-2">
        <div className="col-12 text-center">
          <div className="text-center text-black font-bold text-2xl pt-4 uppercase">
            {!signUp ? "Đăng Nhập" : "Đăng Ký"}
          </div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="row" onSubmit={handleAuth}>
              {signUp && (
                <>
                  <div className="col-6 py-3">
                    <input
                      type="text"
                      className="form-control input-text-box"
                      placeholder="Họ"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6 py-3">
                    <input
                      type="text"
                      className="form-control input-text-box"
                      placeholder="Tên"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              <div className="col-12 py-3">
                <input
                  type="email"
                  className="form-control input-text-box"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 py-3">
                <input
                  type="password"
                  className="form-control input-text-box"
                  placeholder="Mật khẩu"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              {signUp && (
                <div className="col-12 py-3">
                  <input
                    type="password"
                    className="form-control input-text-box"
                    placeholder="Xác nhận mật khẩu"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="col-12 py-3 text-center">
                <div>
                  {!signUp ? (
                    <>
                      <div className="text-center justify-content-center p-2">
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                          Chưa có tài khoản?
                          <span
                            className="text-orange-500"
                            style={{
                              textDecoration: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => setSignUp(true)}
                          >
                            Đăng ký
                          </span>
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center justify-content-center mt-2 pt-2">
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                          Already have an account ?&nbsp;
                          <span
                            style={{
                              textDecoration: "none",
                              cursor: "pointer",
                              color: "#298af2",
                            }}
                            onClick={() => setSignUp(false)}
                          >
                            Đăng Nhập
                          </span>
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <button
                  className={`btn ${!signUp ? "btn-sign-in" : "btn-sign-up"}`}
                  type="submit"
                >
                  {!signUp ? "Đăng nhập" : "Đăng ký"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
