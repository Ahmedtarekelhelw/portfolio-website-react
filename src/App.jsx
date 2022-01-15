import "./App.scss";
import Topbar from "./components/topbar/Topbar";

import Sidebar from "./components/sidebar/Sidebar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
      <Topbar setActive={(bool) => setActive(bool)} active={active} />
      <Sidebar setActive={(bool) => setActive(bool)} active={active} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
