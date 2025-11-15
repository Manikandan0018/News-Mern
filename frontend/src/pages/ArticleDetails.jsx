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
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
      >
        ← Back
      </button>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
        {article.title}
      </h1>

      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full max-h-72 object-cover rounded-xl mb-6 shadow"
        />
      )}

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {article.pubDate || ""} • {article.source_id || ""}
      </p>

      <div className="prose prose-sm dark:prose-invert text-gray-800 dark:text-gray-200">
        <p>
          {article.content ||
            article.description ||
            "No description available."}
        </p>
      </div>

      {article.link && (
        <div className="mt-6">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Open Original Source
          </a>
        </div>
      )}
    </div>
  );
}
