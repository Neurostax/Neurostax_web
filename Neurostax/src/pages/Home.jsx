import React from "react";
import NewsletterList from "../components/NewsletterList";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Newsletter Hub</h1>
      <NewsletterList />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    padding: "20px",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    color: "rgb(12, 21, 90)",
    fontWeight: "bold",
  },
};

export default Home;
