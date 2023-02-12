import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createParentAccount } from "../..//store/slices/userSlice";
import "./SignUp.css";
const SignUp = () => {
  // initialize
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   //  check validation states
  const [username, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  //   // get login state
  const { login,loading, error } = useSelector((store) => store.userSlice);
  //  // user cant access this page if he has login
  useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: username,
      mail: email,
      password,
      age: 20,
      phone: "08979656",
    };
    dispatch(createParentAccount(data)).then((action) => {
      console.log();
      if (action.payload.massage.includes("successfully")) {
        navigate("/login");
      }
    });
  };
  return (
    <div className=" min-h-screen flex items-center justify-center registration ">
      <div className="theContainer">
        <div className="flex items-center justify-center">
          <div className="registration-form ">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center">Join us</h3>
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="mt-4">
                <div>
                  <label className="block" htmlFor="Name">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={username}
                    onChange={(e) => setuserName(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className="block" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className="block">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className="block">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    value={repeatPassword}
                    onChange={(e) => setrepeatPassword(e.target.value)}
                  />
                </div>
                {/* <span className="text-xs text-red-400">
                  Password must be same!
                </span> */}
                <div className="flex">
                  {loading ? (
                    <img
                      src="assets/svg/loading.svg"
                      alt=""
                      className="w-10 h-10 m-auto my-2"
                    />
                  ) : (
                    <button
                      type="submit"
                      className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                    >
                      Create Account
                    </button>
                  )}
                </div>
                <div className="mt-6 text-grey-dark">
                  Already have an account?
                  <span className="text-blue-600 hover:underline">
                    <Link to="/login">Log in</Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
