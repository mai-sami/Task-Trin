import React from "react";
import backgroundImage from "../.././assets/background.jpeg";
import Logo from "../Logo/Logo";
 
function Introducation() {
  return (
    <div className="intro">
      <img
        src={backgroundImage}
        className="Introducation__image"
        alt="backgroundImage"
      />
      <Logo className={"intro_image"} />
    </div>
  );
}

export default Introducation;
