import React, { useState, useEffect } from "react";
import "./index.css";

const Compass = ({ callback }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isMouseDown) return;

      const compass = event.target;
      const rect = compass.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const newAngle =
        Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI);
      setAngle(newAngle);
      callback(newAngle);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseDown]);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <>
      <div
        className="compass"
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseleave={(e) => handleMouseUp(e)}
      >
        <div
          className="compass-dial"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="compass-oil">
            <div className="compass-needle-north"></div>
            <div className="compass-needle-south"></div>
          </div>
          <ul className="compass-ortho"></ul>
        </div>
      </div>
    </>
  );
};

export default Compass;
