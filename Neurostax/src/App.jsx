import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={styles.appContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#eaeaea",
    minHeight: "100vh",
  },
};

export default App;
