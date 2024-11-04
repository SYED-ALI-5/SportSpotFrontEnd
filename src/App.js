import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AuthPage from "./Components/AuthPage";
import Home from "./Components/Home";
import React, { useState } from "react";
import Footer from "./Components/Footer";
import Ground from "./Components/Ground";

function App() {
  const [authMode, setAuthMode] = useState("SignUp");

  const toggleAuthMode = (mode) => {
    setAuthMode(mode);
  };

  return (
    <>
      <Router>
        <Navbar
          title="Sport Spot"
          authMode={authMode}
          toggleAuthMode={toggleAuthMode}
        />
        <Home />
        <Routes>
          <Route
            path="/authpage"
            element={
              <AuthPage authMode={authMode} toggleAuthMode={toggleAuthMode} />
            }
          />
          <Route path="/ground" element={<Ground />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;