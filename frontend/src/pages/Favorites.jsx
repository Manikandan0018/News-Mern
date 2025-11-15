import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/favoritesSlice";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favorites = useSelector((s) => s.favorites);
  const dispatch = useDispatch();

  // Single favorite card component
  const FavoriteCard = ({ f }) => (
    <div
      className="
        flex flex-col md:flex-row 
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        rounded-xl overflow-hidden shadow-lg 
        hover:shadow-xl transition duration-300
      "
    >
      {/* Image */}
      {f.image_url && (
        <div className="md:w-56 md:h-auto h-40 flex-shrink-0">
          <img
            src={f.image_url}
            alt={f.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="mb-3">
          <h3
            className="
              text-xl font-bold leading-snug 
              text-gray-900 dark:text-gray-100
              hover:text-blue-700 dark:hover:text-blue-400
              transition
            "
          >
            <a href={f.link} target="_blank" rel="noopener noreferrer">
              {f.title}
            </a>
          </h3>
        </div>

        <div
          className="
            flex justify-between items-center pt-2 
            border-t border-gray-100 dark:border-gray-700
          "
        >
          <a
            href={f.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-blue-600 dark:text-blue-400 
              font-medium text-sm hover:underline
            "
          >
            Read Saved Article →
          </a>

          <button
            onClick={() => dispatch(removeFavorite(f.link))}
            className="
              px-4 py-2 text-sm rounded-full font-semibold 
              bg-red-600 text-white 
              hover:bg-red-700 
              dark:bg-red-500 dark:hover:bg-red-600
              transition duration-150 shadow-md
            "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors">
      <h1
        className="
          text-3xl font-extrabold 
          text-gray-900 dark:text-gray-100 
          mb-8 border-b border-gray-200 dark:border-gray-700 pb-3
        "
      >
        Saved Articles
      </h1>

      {favorites.length === 0 ? (
        <div
          className="
            text-center p-20 
            bg-white dark:bg-gray-900 
            rounded-xl shadow-lg 
            border border-gray-200 dark:border-gray-700
            transition
          "
        >
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
            You haven't saved any articles yet.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Find an interesting article in the feed and click the "☆ Favorite"
            button to save it here.
          </p>
          <Link
            to="/"
            className="
              inline-block px-6 py-3 rounded-full font-semibold
              bg-blue-600 text-white 
              hover:bg-blue-700 
              dark:bg-blue-500 dark:hover:bg-blue-600
              transition shadow-lg
            "
          >
            Go to News Feed
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {favorites.map((f, i) => (
            <FavoriteCard key={i} f={f} />
          ))}
        </div>
      )}
    </div>
  );
}
