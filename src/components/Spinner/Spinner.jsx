import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="spinner">
      <RotatingLines
        strokeColor="#003d94"
        strokeWidth="4"
        animationDuration="4"
        width="30"
        height="30"
        visible={true}
      />
    </div>
  );
}

export default Spinner;
