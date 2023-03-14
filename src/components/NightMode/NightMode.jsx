import React, { useEffect, useState } from "react";

import "./NightMode.css";
const NightMode = () => {
  const switchOnChange = (e) => {
    document.documentElement.classList.toggle("dark");
    if (isChecked) {
      localStorage.theme = "dark";
      setIsChecked(!isChecked);
    } else {
      localStorage.theme = "light";
      setIsChecked(!isChecked);
    }
  };

  const [isChecked, setIsChecked] = useState(true);
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsChecked(false);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsChecked(true);
    }
  }, []);
  return (
    <label className="switch opacity-0">
      <input
        type="checkbox"
        onChange={(e) => switchOnChange(e)}
        checked={isChecked}
      />
      <span className="slider"></span>
    </label>
  );
};

export default NightMode;
