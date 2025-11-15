import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ArticleDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const article = state?.article;

  if (!article) {
    return (
      <div className="p-6 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-950 min-h-screen">
        Article not found.
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-6 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      {/* Back Button */}
      <button
        className="
          mb-6 px-4 py-2 rounded-lg font-medium
          bg-gray-800 text-white 
          hover:bg-gray-700
          dark:bg-gray-700 dark:hover:bg-gray-600
          transition
        "
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {/* Title */}
      <h1
        className="
          text-3xl font-extrabold 
          text-gray-900 dark:text-gray-100 
          mb-4 transition
        "
      >
        {article.title}
      </h1>

      {/* Image */}
      {article.image_url && (
        <img
          src={article.image_url}
          alt="news"
          className="w-full rounded-xl mb-6 shadow-lg"
        />
      )}

      {/* Meta Info */}
      <p
        className="
          text-sm text-gray-600 dark:text-gray-400
          mb-3
        "
      >
        {article.pubDate} • {article.source_id}
      </p>

      
    </div>
  );
}
