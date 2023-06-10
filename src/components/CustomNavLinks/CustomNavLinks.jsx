import React from "react";
import { NavLink } from "react-router-dom";

function CustomNavLinks({ icons, url, name }) {
  return (
    <li>
      <NavLink activeClassName={"active"} className="item" to={url}>
        {icons}
        <span className="name">{name}</span>
      </NavLink>
    </li>
  );
}

export default CustomNavLinks;
