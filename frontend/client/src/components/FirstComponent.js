import React from "react";
import { RiUserStarLine } from "react-icons/ri";

const FirstComponent = () => {
  return (
    <div className="compo1">
      <div className="compo1__icon">
        <RiUserStarLine size={30} color="#1b4eff" />
      </div>
      <div>
        <div className="compo1__text">Adverse effect & contraindication</div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div className="compo1__total">546</div>
          <div className="progressBarContainer">
            <div className="progressBar1Container">
              <div className="progressBar1"></div>
            </div>
            <div className="progressBar2Container">
              <div className="progressBar2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
