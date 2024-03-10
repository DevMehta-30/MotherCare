import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "../src/pages/landing.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/profile.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
