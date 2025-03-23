import React from "react";

const NewsletterItem = ({ newsletter }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
      <h3>{newsletter.title}</h3>
      <p><strong>Date:</strong> {newsletter.date}</p>
      <p>{newsletter.content}</p>
    </div>
  );
};

export default NewsletterItem;
