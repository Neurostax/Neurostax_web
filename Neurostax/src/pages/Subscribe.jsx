import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    const response = await fetch("http://127.0.0.1:8000/api/subscribe/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
      setEmail(""); // Clear input field
    } else {
      setMessage("Subscription failed. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Subscribe</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    textAlign: "center",
  },
  title: {
    fontSize: "22px",
    color: "rgb(12, 21, 90)", // Midnight Blue
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "rgb(12, 21, 90)", // Midnight Blue
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    color: "green",
    fontWeight: "bold",
  },
};

export default Subscribe;
