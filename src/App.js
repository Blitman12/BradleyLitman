import { Routes, Route} from "react-router-dom";
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from "./pages/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
