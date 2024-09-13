import React from 'react';

const News = () => {
  const newsItems = [
    { title: "New Beach Package Released", date: "2024-09-08", content: "We are excited to launch our new beach package." },
    { title: "Explore the Mountains", date: "2024-08-15", content: "Check out our new mountain exploration package." },
  ];

  return (
    <div className="container mt-4">
      <h2>Latest News</h2>
      <ul className="list-group">
        {newsItems.map((news, index) => (
          <li className="list-group-item" key={index}>
            <h5>{news.title}</h5>
            <small className="text-muted">{news.date}</small>
            <p>{news.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
