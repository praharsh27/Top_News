import React, { useEffect, useState } from "react";
import Cart from './Cart';

export default function News() {
  const [lm, setlm] = useState(null);

  async function load() {
    try {
      const url = "https://inshorts.vercel.app/news/top";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // Log the data to check the structure
      setlm(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="news-container">
      {lm && lm.data.articles.map((article, index) => (
        <Cart
          key={index}

          category={article.categoryNames[0]}
          imageUrl={article.imageUrl}
          title={article.title}
          content={article.content}
          author={article.authorName} // Ensure author is passed here
        />
      ))}
    </div>
  );
}
