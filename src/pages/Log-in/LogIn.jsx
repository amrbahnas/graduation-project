import React, { useState } from "react";
// react router
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAccount, setLoading } from "../../store/slices/userSlice";
// css
import "./Log-in.css";
// mui
import LinearProgress from "@mui/material/LinearProgress";
//icons
import { FacebookIcon, GoogleIcon, AppleIcon } from "../../utils/icons";
// components
import LoginSignupNav from "../../components/login-signup-nav/LoginSignupNav";
import toast from "react-hot-toast";
import TryGames from "../../components/Trying-to-play-game/trying-to-play-game";
const LogIn = () => {
  // initialize
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   //  check validation states
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // on click login
  const formHandler = (e) => {
    e.preventDefault();
    //start login function
    setLoading(true);
    const data = {
      mail: email,
      password,
    };
    dispatch(loginAccount(data))
      .unwrap()
      .then((action) => {
        setLoading(false);
        toast.success("welcome back");
        if (action.children.length === 0) {
          navigate("/parent/add-first-child");
        } else {
          navigate("/parent/my-children");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        toast.error("check the email or password");
      });
  };

  return (
    <div className="login-page">
      <LoginSignupNav pageName={"login"} />
      {loading && <LinearProgress />}
      <div className="theContainer">
        <div className="login-form">
          <h3>Welcome Back</h3>
          {/* <div className="login-socail">
            <div className="facebook">
              <FacebookIcon />
              <span>Continue with Facebook</span>
            </div>
            <div className="google">
              <GoogleIcon />
              <span>Continue with Google</span>
            </div>
            <div className="apple">
              <AppleIcon />
              <span>Continue with Apple</span>
            </div>
          </div> */}
          {/* <div className="login-email">
            <span></span>
            Or log in with Email
            <span></span>
          </div> */}
          <form onSubmit={formHandler}>
            <div className="input-form">
              <label htmlFor="">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            {error && (
              <span className=" text-red-500 capitalize">
                check the email or password
              </span>
            )}
            <div className="input-form">
              <label htmlFor="">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <Link to="/forget-password">forget your password?</Link>
            <input
              type="submit"
              value={loading ? "loading" : "log in "}
              name="commit"
              disabled={loading}
            />
          </form>
        </div>
        <TryGames />
      </div>
    </div>
  );
};

export default LogIn;
