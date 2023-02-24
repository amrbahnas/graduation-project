import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OurMission from "../../components/OurMission/OurMission";
import Planning from "../../components/Planning/Planning";
import SugestionCreateAccount from "../../components/SugestionCreateAccount/SugestionCreateAccount";
const Home = () => {
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
      <OurMission />
      <Planning />
      <SugestionCreateAccount />
    </div>
  );
};

export default Home;
