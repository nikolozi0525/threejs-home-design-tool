import React, { Component } from "react";
import "./styles.css";

class RoomHexagonGrid extends Component {
  render() {
    return (
      <div className="room-grid">
        <div className="container">
          {Array(100)
            .fill(0)
            .map(() => (
              <div>
                <span className="inner"></span>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default RoomHexagonGrid;
