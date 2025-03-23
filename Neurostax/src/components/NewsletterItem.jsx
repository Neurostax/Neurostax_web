import React from "react";

const NewsletterItem = ({ newsletter }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{newsletter.title}</h3>
      <p style={styles.date}><strong>Date:</strong> {newsletter.date}</p>
      <p style={styles.content}>{newsletter.content}</p>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "18px",
    color: "rgb(12, 21, 90)", // Midnight Blue
    fontWeight: "bold",
  },
  date: {
    fontSize: "14px",
    color: "#666",
  },
  content: {
    fontSize: "16px",
    color: "#444",
  },
};

export default NewsletterItem;
