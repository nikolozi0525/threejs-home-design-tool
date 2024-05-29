import React, { Component } from "react";
import { HexGrid, Layout, Hexagon, GridGenerator } from "react-hexgrid";
import { TransitionGroup as CSSTransitionGroup } from "react-transition-group";
import "./styles.css";

class RoomHexagonGrid extends Component {
  render() {
    const hexagons = GridGenerator.rectangle(100, 100);
    return (
      <div className="roomgrid grow">
        <HexGrid width="100%" height="100%" viewBox="">
          <Layout
            size={{ x: 60, y: 60 }}
            // origin={{ x: -15, y: -40 }}
            spacing={1.08}
            flat={false}
          >
            {hexagons.map((hex, i) => (
              <Hexagon key={i} {...hex} />
            ))}
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default RoomHexagonGrid;
