import React, { useState, useEffect } from "react";
// react router
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAccount } from "../..//store/slices/userSlice";
// css
import "./Log-in.css";
//icon
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import HomeIcon from "@mui/icons-material/Home";
const Login = () => {
  // initialize
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   //  check validation states
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //   // get login state
  const { login, loading } = useSelector((store) => store.userSlice);
  //  // user cant access this page if he has login
  useEffect(() => {
    if (login) {
      navigate("/mychildren");
    }
  }, [login, navigate]);

  // on click login
  const formHandler = (e) => {
    e.preventDefault();
    //start login function
    const data = {
      mail: email,
      password,
    };

    dispatch(loginAccount(data)).then((res) => {
      if (login) {
        navigate("/mychildren");
      }
    });
  };

  return (
    <div className="login-page">
      <div className="login-nav">
        <div className="left">
          <img src="assets/brand/logo.svg" alt="" />
          <div className="home" onClick={(e) => navigate("/")}>
            <HomeIcon />
            <span>Home</span>
          </div>
        </div>
        <div className="right">
          <span>Don't have an account?</span>
          <Link to="/signup">sign up</Link>
        </div>
      </div>
      <div className="theContainer">
        <div className="login-form">
          <h3>Log in</h3>
          <div className="login-socail">
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
          </div>
          <div className="login-email">Or log in with Email:</div>
          <form onSubmit={formHandler}>
            <div className="input-form">
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="input-form">
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <a href="#e">forget your password?</a>
            <input
              type="submit"
              value={loading ? "loading" : "log in "}
              name="commit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
