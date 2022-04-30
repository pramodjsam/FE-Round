import React from "react";
import { VscTriangleUp } from "react-icons/vsc";

const SecondComponent = () => {
  return (
    <div className="compo2">
      <div style={{ display: "flex" }}>
        <div className="compo2_progresBarContainer">
          <div className="compo2_progressBar1" style={{ height: "60%" }}></div>
          <div className="compo2_progressBar2" style={{ height: "40%" }}></div>
        </div>

        <div className="compo2_progresBarContainer">
          <div className="compo2_progressBar1" style={{ height: "70%" }}></div>
          <div className="compo2_progressBar2" style={{ height: "30%" }}></div>
        </div>

        <div className="compo2_progresBarContainer">
          <div className="compo2_progressBar1" style={{ height: "30%" }}></div>
          <div className="compo2_progressBar2" style={{ height: "70%" }}></div>
        </div>

        <div className="compo2_progresBarContainer">
          <div className="compo2_progressBar1" style={{ height: "90%" }}></div>
          <div className="compo2_progressBar2" style={{ height: "10%" }}></div>
        </div>

        <div className="compo2_progresBarContainer">
          <div className="compo2_progressBar1" style={{ height: "25%" }}></div>
          <div className="compo2_progressBar2" style={{ height: "75%" }}></div>
        </div>

        <div className="compo2_progresBarContainer">
          <div className="compo2_progressBar1" style={{ height: "10%" }}></div>
          <div className="compo2_progressBar2" style={{ height: "90%" }}></div>
        </div>

        <div className="compo2_progresBarContainer">
          <div className="compo2_progressBar1" style={{ height: "10%" }}></div>
          <div className="compo2_progressBar2" style={{ height: "90%" }}></div>
        </div>
      </div>
      <div style={{ marginLeft: "1rem" }}>
        <div className="compo2__text">Similarity measures</div>
        <div className="compo2__text">between molecules</div>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <div className="total-percentage">125%</div>
          <div className="compo2__iconContainer">
            <VscTriangleUp color="#06b929" /> 10%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
