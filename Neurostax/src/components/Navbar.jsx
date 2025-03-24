import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Newsletter Hub</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/subscribe" style={styles.link}>Subscribe</Link>
        <Link to="/Aboutus" style={styles.link}>Aboutus</Link>
        <Link to="/Portfolio" style={styles.link}>Portfolio</Link>

      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "rgb(12, 21, 90)", // Midnight Blue
    color: "#fff",
  },
  logo: {
    fontSize: "22px",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
