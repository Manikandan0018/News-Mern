import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import { Link } from "react-router-dom";

const isFavorite = (favorites, item) =>
  favorites.some((f) => f.link === item.link);

export default function NewsCard({ item }) {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites);
  const faved = isFavorite(favorites, item);

  const toggleFavorite = () => {
    if (faved) dispatch(removeFavorite(item.link));
    else dispatch(addFavorite(item));
  };

  return (
    <article
      className="
        flex flex-col md:flex-row
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700
        rounded-xl overflow-hidden shadow-sm hover:shadow-md
        transition
      "
    >
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            <Link
              to={`/article/${encodeURIComponent(item.title || "article")}`}
              state={{ article: item }}
              className="hover:underline"
            >
              {item.title}
            </Link>
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {item.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            to={`/article/${encodeURIComponent(item.title || "article")}`}
            state={{ article: item }}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read Full Article →
          </Link>

          <button
            onClick={toggleFavorite}
            className={`
              px-3 py-1 rounded-full text-sm font-semibold transition
              ${
                faved
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-yellow-400"
              }
            `}
            title={faved ? "Remove from favorites" : "Add to favorites"}
          >
            {faved ? "★ Favorited" : "☆ Favorite"}
          </button>
        </div>
      </div>

      {item.image_url ? (
        <div className="w-full md:w-56 h-44 md:h-auto flex-shrink-0">
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}
    </article>
  );
}
