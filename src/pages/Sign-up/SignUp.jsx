import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createParentAccount } from "../..//store/slices/userSlice";
//icon
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// css
import "./SignUp.css";
import LoginSignupNav from "../../components/login-signup-nav/LoginSignupNav";
const SignUp = () => {
  // initialize
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   //  check validation states
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //   // get login state
  const { login, loading, error } = useSelector((store) => store.userSlice);
  //  // user cant access this page if he has login
  useEffect(() => {
    if (login) {
      navigate("/parent/my-children");
    }
  }, [login, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: userName,
      mail: email,
      password,
      age: 20,
      phone: "08979656",
    };
    dispatch(createParentAccount(data)).then((action) => {
      navigate("/addfirstChild");
    });
  };
  return (
    <div className="signup-page">
      <LoginSignupNav pageName={"signup"} />
      <div className="theContainer">
        <div className="login-form">
          <div className="back" onClick={(e) => navigate(-1)}>
            <ArrowBackIcon />
            back
          </div>
          <h3>Create your free parent account!</h3>
          <div className="login-socail">
            <div className="facebook">
              <FacebookIcon />
              <span>Continue with Facebook</span>
            </div>
            <div className="google">
              <GoogleIcon />
              <span>Continue with Google</span>
            </div>
          </div>
          <div className="signup-email">
            <span></span>
            Or Sign up with Email
            <span></span>
          </div>
          <form onSubmit={submitHandler}>
            <div className="input-form">
              <label htmlFor="">Full name</label>
              <input
                required
                type="text"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>
            <div className="input-form">
              <label htmlFor="">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="input-form">
              <label htmlFor="">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="4+ characters"
              />
            </div>
            <div className="checkbox">
              <div className="check">
                <input type="checkbox" name="agree" value="agree" />
                <span>By registering, you agree to the</span>
                <a>terms of use</a>
                <span>and</span>
                <a>privacy policy</a>
              </div>
              <div className="check">
                <input
                  type="checkbox"
                  name="Receive"
                  value="Receive"
                  id="Receive"
                />
                <label htmlFor="Receive">
                  Receive emails about Prodigy news and promotions
                </label>
              </div>
            </div>
            <input
              type="submit"
              value={loading ? "loading" : "create account"}
              name="commit"
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
