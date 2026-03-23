import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import ProjectDetail from "./components/ProjectDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white overflow-hidden noise-bg">
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
