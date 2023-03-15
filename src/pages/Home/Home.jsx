import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OurMission from "../../components/OurMission/OurMission";
import Planning from "../../components/Planning/Planning";
import SugestionCreateAccount from "../../components/SugestionCreateAccount/SugestionCreateAccount";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  const navigate = useNavigate();
  const { login, children } = useSelector((store) => store.userSlice);
  //  // user cant access this page if he has login
  useEffect(() => {
    if (login && children.length > 0) {
      navigate("/parent/my-children");
    } else if (login) {
      navigate("/parent/add-first-child");
    }
  }, [login, navigate]);
  return (
    <div>
      <Nav />
      <Header />
      <OurMission />
      <Planning />
      <SugestionCreateAccount />
      <Footer />
    </div>
  );
};

export default Home;
