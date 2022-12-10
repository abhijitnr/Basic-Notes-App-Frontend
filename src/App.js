import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AllNotes from "./pages/AllNotes";
import CreateNotes from "./pages/CreateNotes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// API
// https://good-tan-jaguar-tutu.cyclic.app/

function App() {
  return (
    <div>
      <Navbar />

      {/* All routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allnotes" element={<AllNotes />} />
        <Route path="/createnotes" element={<CreateNotes />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
