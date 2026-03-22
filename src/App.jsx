import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Manager from "./components/Manager.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content grows */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}/>
		  <Route path="/manager" element={<Manager />}/>
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
