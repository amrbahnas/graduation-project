import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Header = () => {
  const [text] = useTypewriter({
    words: [" and English fun for kids"],
    loop: true,
    typeSpeed: 170,
    deleteSpeed: 100,
    delaySpeed: 3000,
  });

  // component
  // const HeaderSection = ({ img, bgColor }) => {
  //   return (
  //     <header className={bgColor}>
  //       <div className="theContainer">
  //         <div className="wrapper">
  //           <div className="left">
  //             <h1>Make learning math and English fun for kids</h1>
  //             <p>
  //               With Our, kids practice standards-aligned skills in math and
  //               English as they play our fun, adaptive learning games. All with
  //               teacher and parent tools to support their learning in class and
  //               at home.
  //             </p>
  //             <div className="btns">
  //               <Link to="/signup">Create your free account today</Link>
  //               <Link to="">Buy Our Math membership</Link>
  //             </div>
  //           </div>
  //           <div className="right">
  //             <img src={img} alt="" />
  //           </div>
  //         </div>
  //       </div>
  //     </header>
  //   );
  // };

  return (
    <header className="bg-secondry">
      <div className="theContainer h-full">
        <div className="wrapper h-full">
          <motion.div
            className="left h-full"
            initial={{ x: -999, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 2,
              type: "spring",
              stifness: 150,
            }}
          >
            <h1>Make Math {text}</h1>
            <p>
              With US, kids practice standards-aligned skills in math and
              English as they play our fun, adaptive learning games. All with
              teacher and parent tools to support their learning in class and at
              home.
            </p>
            <div className="btns">
              <Link to="/signup">Create your free account today</Link>
              <Link to="">Buy Our Math membership</Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 999, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 2,
              type: "spring",
              stifness: 150,
            }}
            className="right h-full"
          ></motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
