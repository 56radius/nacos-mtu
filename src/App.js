import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importing the main components
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import LibraryScreen from "./components/LibraryScreen";



function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={showSplash ? <SplashScreen /> : <HomeScreen />}
          />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/library" element={<LibraryScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
