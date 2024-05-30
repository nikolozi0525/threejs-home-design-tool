import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Body } from "./components";

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
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
