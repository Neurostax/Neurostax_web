import React from "react";
import NewsletterItem from "./NewsletterItem";

const NewsletterList = () => {
  // Dummy newsletters
  const newsletters = [
    { id: 1, title: "March Updates", date: "2025-03-15", content: "Exciting news this month!" },
    { id: 2, title: "Energy Tips", date: "2025-02-28", content: "Ways to save energy efficiently." },
  ];

  return (
    <div>
      <h2>Past Newsletters</h2>
      {newsletters.map((newsletter) => (
        <NewsletterItem key={newsletter.id} newsletter={newsletter} />
      ))}
    </div>
  );
};

export default NewsletterList;
