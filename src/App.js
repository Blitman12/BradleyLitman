import { Routes, Route, useLocation} from "react-router-dom";
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion"


function App() {
  const location = useLocation();
  

  return (
    <div>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
