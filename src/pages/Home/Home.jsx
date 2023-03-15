import React from "react";
import Header from "../../components/Header/Header";
import OurMission from "../../components/OurMission/OurMission";
import Planning from "../../components/Planning/Planning";
import SugestionCreateAccount from "../../components/SugestionCreateAccount/SugestionCreateAccount";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
const Home = () => {
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
