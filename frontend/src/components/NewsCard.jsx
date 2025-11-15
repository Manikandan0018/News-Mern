import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import { Link } from "react-router-dom";

const isFavorite = (favorites, item) =>
  favorites.some((f) => f.link === item.link);

export default function NewsCard({ item }) {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites);
  const isFaved = isFavorite(favorites, item);

  const toggleFavorite = () => {
    if (isFaved) dispatch(removeFavorite(item.link));
    else dispatch(addFavorite(item));
  };

  return (
    <div
      className="
        flex flex-col md:flex-row
        border border-gray-200 dark:border-gray-900
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        rounded-xl overflow-hidden shadow-lg
        hover:shadow-xl transition-all duration-300
      "
    >
      {/* --- TEXT SIDE --- */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="mb-3">
          <h3
            className="
              text-xl font-bold leading-snug
              text-gray-900 dark:text-gray-100
              hover:text-blue-700 dark:hover:text-blue-400
              transition-colors
            "
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </h3>

          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 line-clamp-3">
            {item.description}
          </p>
        </div>

        <div
          className="
            flex justify-between items-center pt-3
            border-t border-gray-200 dark:border-gray-700
          "
        >
          <Link
            to={`/article/${item.title.replace(/\s+/g, "-")}`}
            state={{ article: item }}
            className="
              text-blue-600 dark:text-blue-400
              font-medium text-sm hover:underline
            "
          >
            Read Full Article →
          </Link>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className={`
              px-3 py-1 text-sm rounded-full font-semibold
              transition duration-200 shadow-md
              ${
                isFaved
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-yellow-400 dark:hover:bg-yellow-500"
              }
            `}
            title={isFaved ? "Remove from Favorites" : "Add to Favorites"}
          >
            {isFaved ? "★ Favorited" : "☆ Favorite"}
          </button>
        </div>
      </div>

      {/* --- IMAGE SIDE --- */}
      {item.image_url && (
        <div className="md:w-56 md:h-auto h-40 flex-shrink-0">
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
