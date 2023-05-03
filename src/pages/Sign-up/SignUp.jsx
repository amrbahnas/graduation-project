import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createParentAccount } from "../..//store/slices/userSlice";
// mui
import LinearProgress from "@mui/material/LinearProgress";
// formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupSchema } from "../../utils/formSchema";
//icon
import {
  FacebookIcon,
  GoogleIcon,
  ArrowBackIcon,
  InfoIcon,
} from "../../utils/icons";

// css
import "./SignUp.css";
import LoginSignupNav from "../../components/login-signup-nav/LoginSignupNav";
const SignUp = () => {
  // initialize
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   //  check validation states
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  //   // get login state
  const { loading, error } = useSelector((store) => store.userSlice);
  //  // user cant access this page if he has login

  const submitHandler = ({ name, email, password }) => {
    const data = {
      name: name,
      mail: email,
      password,
      age: 20,
      phone: "08979656",
    };
    dispatch(createParentAccount(data)).then((action) => {
      navigate("/parent/add-first-child");
    });
  };
  return (
    <div className="signup-page">
      <LoginSignupNav pageName={"signup"} />
      {loading && <LinearProgress />}
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

          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              submitHandler(values);
              actions.setSubmitting(false);
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <div className="input-form">
                  <label htmlFor="name">Full name</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="at least 3 characters"
                    className={errors.name && touched.name ? "bg-red-100" : ""}
                  />
                  {errors.name && touched.name && (
                    <div className="flex items-center gap-1 round-sm ">
                      <InfoIcon fontSize="small" color="error" />
                      <ErrorMessage component="span" name="name" />
                    </div>
                  )}
                </div>
                <div className="input-form">
                  <label htmlFor="">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className={
                      errors.email && touched.email ? "bg-red-100" : ""
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="flex items-center gap-1 round-sm">
                      <InfoIcon fontSize="small" color="error" />
                      <ErrorMessage component="span" name="email" />
                    </div>
                  )}
                </div>
                <div className="input-form">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="at least 8 characters"
                    className={
                      errors.password && touched.password ? "bg-red-100" : ""
                    }
                  />
                  {errors.password && touched.password && (
                    <div className="flex items-center gap-1 round-sm">
                      <InfoIcon fontSize="small" color="error" />
                      <ErrorMessage component="span" name="password" />
                    </div>
                  )}
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
                      Receive emails about Our news and promotions
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  value={loading ? "loading" : "create account"}
                  name="commit"
                  disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
