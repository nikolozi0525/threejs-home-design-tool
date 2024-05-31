import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Body, PodCustom } from "./components";

import { initialState } from "./store/room/reducers";
import reducer from "./store/reducers";
import { Provider } from "./store";

const App = () => {
  return (
    <Provider initialState={{ room: initialState }} reducer={reducer}>
      <BrowserRouter>
        <div className="relative z-0 selection:bg-pink-300">
          <Routes>
            <Route path="/" element={[<Body key={1} />]} />
            <Route path="/2d-custom" element={[<PodCustom key={2} />]} />
            <Route path="/about" element={<About key={100} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
