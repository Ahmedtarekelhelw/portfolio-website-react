import "./App.scss";
import Topbar from "./components/topbar/Topbar";

import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";

function App() {
  const [active, setActive] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar setActive={(bool) => setActive(bool)} active={active} />
        <Sidebar setActive={(bool) => setActive(bool)} active={active} />
        <div className="sections">
          <Routes>
            <Route path="/portfolio-website-react" element={<Index />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
