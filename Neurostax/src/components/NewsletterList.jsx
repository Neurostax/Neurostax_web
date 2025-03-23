import React from "react";
import NewsletterItem from "./NewsletterItem";

const NewsletterList = () => {
  const newsletters = [
    { id: 1, title: "March Updates", date: "2025-03-15", content: "Exciting news this month!" },
    { id: 2, title: "Energy Tips", date: "2025-02-28", content: "Ways to save energy efficiently." },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Past Newsletters</h2>
      {newsletters.map((newsletter) => (
        <NewsletterItem key={newsletter.id} newsletter={newsletter} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    color: "rgb(12, 21, 90)",
    marginBottom: "20px",
  },
};

export default NewsletterList;
