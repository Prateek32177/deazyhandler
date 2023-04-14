import React from "react";
import { logo } from "../asset/Svg";
import { useNavigate } from "react-router-dom";

function Logo() {
  const Navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => Navigate("/")}
        className="topNavLogo"
        style={{ display: "flex", padding: "2rem 2rem", alignItems: "center" }}
      >
        <div>{ logo}</div>

        <div>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "white",
              letterSpacing: "4px",
              marginLeft: "5px",
              marginBottom: "0px",
            }}
          >
            DineEazy Buissness.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Logo;
