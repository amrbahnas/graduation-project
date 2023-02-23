import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  console.log(import.meta.env.VITE_REACT_LOGIN_API);
  const navigate = useNavigate();
  const { login } = useSelector((store) => store.userSlice);
  //  // user cant access this page if he has login
  useEffect(() => {
    if (login) {
      navigate("/mychildren");
    }
  }, [login, navigate]);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
