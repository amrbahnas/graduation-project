import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Header = () => {
  const [text] = useTypewriter({
    words: [" offer on the market"],
    loop: 1,
    typeSpeed: 100,
  });
  const [text2] = useTypewriter({
    words: ["for your children"],
    loop: 1,
    typeSpeed: 190,
  });

  // component
  const HeaderSection = ({ img, bgColor }) => {
    return (
      <header className={bgColor}>
        <div className="theContainer">
          <div className="wrapper">
            <div className="left">
              <h1>Make learning math and English fun for kids</h1>
              <p>
                With Prodigy, kids practice standards-aligned skills in math and
                English as they play our fun, adaptive learning games. All with
                teacher and parent tools to support their learning in class and
                at home.
              </p>
              <div className="btns">
                <Link to="/signup">Create your free account today</Link>
                <Link to="">Buy Prodigy Math membership</Link>
              </div>
            </div>
            <div className="right">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <>
      <HeaderSection
        img="assets/images/home page/1.png"
        bgColor="bg-secondry"
      />
      <HeaderSection img="assets/images/home page/2.png" bgColor="bg-third" />
    </>
  );
};

export default Header;
