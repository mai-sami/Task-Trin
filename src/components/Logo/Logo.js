import React from "react";
import logo from "../../assets/logo.png";
import "./style.css";
function Logo({ className }) {
  return (
    <div>
      <img className={className} src={logo} alt="Sharif Naim" />
    </div>
  );
}

export default Logo;
