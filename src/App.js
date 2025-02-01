import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/footer";
import Home from "./pages/Home";
import Empowering from "./pages/empowering";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empowering-organizations" element={<Empowering />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
