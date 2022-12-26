import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { async } from "q";
import React from "react";
import { useState } from "react";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignup] = useState(false);
  const { email, password, firstName, lastName, confirmPassword } = state;
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
    } else {
      if (password !== confirmPassword) {
        return toast.error("Mật khẩu không khớp");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: "${firstName} ${lastName}" });
      }
    }
  };
  return (
    <div className="w-screen h-screen bg-gray-100 mt-20">
      <div className="col-12 text-center mt-8">
        <div className="text-center py-2 font-semibold text-2xl">
          {!signUp ? "Đăng Nhập" : "Đăng ký"}
        </div>
      </div>
      <div className="row h-100 justify-center items-center">
        <div className="col-10 col-md-8 col-lg-6 items-center justify-center">
          <form
            action=""
            className=" items-center justify-center flex flex-col"
            onSubmit={handleAuth}
          >
            {signUp && (
              <>
                <div className="col-12 py-3">
                  <input
                    type="firstName"
                    name="Họ"
                    className="rounded-xl px-8 focus:border-gray-500 h-12 text-base tracking-wide"
                    placeholder="Họ"
                    id=""
                    value={firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 py-3">
                  <input
                    type="lastName"
                    name="Tên"
                    className="rounded-xl px-8 focus:border-gray-500 h-12 text-base tracking-wide"
                    placeholder="Tên"
                    id=""
                    value={lastName}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <div className="col-12 py-3">
              <input
                type="email"
                name="email"
                className="rounded-xl px-8 focus:border-gray-500 h-12 text-base tracking-wide"
                placeholder="Email"
                id=""
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 py-3">
              <input
                type="password"
                name="password"
                className="rounded-xl px-8 focus:border-gray-500 h-12 text-base tracking-wide"
                placeholder="Mật khẩu"
                id=""
                value={password}
                onChange={handleChange}
              />
            </div>
            {signUp && (
              <>
                <div className="col-12 py-3">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="rounded-xl px-8 focus:border-gray-500 h-12 text-base tracking-wide"
                    placeholder="Xác nhận mật khẩu"
                    id=""
                    value={firstName}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <div>
              {!signUp ? (
                <>
                  <div className="items-center justify-center mt-2 pt-2">
                    <p className="sm font:bold">
                      Chưa có tài khoản?
                      <span
                        className="text-[#ff914d] cursor-pointer p-2"
                        onClick={() => setSignup(true)}
                      >
                        Đăng Ký
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="items-center justify-center mt-2 pt-2">
                    <p className="sm font:bold">
                      Đã có tài khoản?
                      <span
                        className="text-[#ff914d] cursor-pointer p-2"
                        onClick={() => setSignup(false)}
                      >
                        Đăng Nhập
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="col-12 mt-2 text-center">
              <button
                className={
                  'bg-[#ff914d] text-white px-4 py-2 rounded-xl ${!signUp ? "" : ""}'
                }
                type="submit"
              >
                {!signUp ? "Đăng nhập" : "Đăng ký"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
