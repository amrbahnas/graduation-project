import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-center bg-gray-200 dark:bg-darkNav dark:text-darkPText lg:text-left">
      <div className="p-4 text-center">
        © 2023 Copyright:
        <span className="text-gray-800 dark:text-darkSText">
          Game Based Learning
        </span>
      </div>
    </footer>
  );
};

export default Footer;
