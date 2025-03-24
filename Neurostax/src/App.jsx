import React from "react";
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import Navbar from "./components/Navbar";
import AboutUs from "./components/Aboutus";
import ProjectsPage from "./components/Portfolio";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={styles.appContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path= "/Aboutus" element={<AboutUs/>} />
          <Route path= "/Portfolio" element={<ProjectsPage/>} />

        </Routes>
        <ScrollToTop/>
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
