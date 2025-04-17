import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import WesternBlot from "./pages/WesternBlot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/western-blot" element={<WesternBlot />} />
      </Routes>
    </Router>
  );
}

export default App;
