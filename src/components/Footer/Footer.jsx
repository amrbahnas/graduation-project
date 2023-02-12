import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
        <div  className="text-center bg-gray-200 wrapper lg:text-left">
          <div className="p-4 text-center text-gray-700 bg-disabled">
            © 2023 Copyright:
            <span className="text-gray-800">Game Based Learning</span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
