import React, { useState, useEffect } from "react";
import welcomeText from "../images/welcome_text.png";

const words = ["team", "aoo", "goal"];

const MainContent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeWord();
    }, 1000);
    return () => clearInterval(intervalId);
  });

  const changeWord = () => {
    setIndex((index + 1) % words.length);
  };
  return (
    <>
      <img src={welcomeText} alt="text" />

      <p>
        one <span> {words[index]}</span>
      </p>
    </>
  );
};
export default MainContent;
