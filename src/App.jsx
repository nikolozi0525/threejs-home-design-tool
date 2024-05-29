import { About, Body } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 selection:bg-pink-300">
        <Routes>
          <Route path="/" element={[<Body key={1} />]} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
