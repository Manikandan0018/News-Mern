import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/favoritesSlice";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favorites = useSelector((s) => s.favorites);
  const dispatch = useDispatch();

  if (!favorites || favorites.length === 0) {
    return (
      <div className="p-6 bg-gray-50 dark:bg-gray-950 min-h-screen">
        <div className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-900 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            No saved articles yet
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Save articles from the feed to read later.
          </p>
          <Link
            className="px-5 py-2 rounded-full bg-blue-600 text-white"
            to="/"
          >
            Go to News Feed
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
          Saved Articles
        </h1>

        <div className="grid grid-cols-1 gap-4">
          {favorites.map((f, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
            >
              {f.image_url && (
                <div className="w-full md:w-56 h-44 md:h-auto">
                  <img
                    src={f.image_url}
                    alt={f.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <a
                      href={f.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {f.title}
                    </a>
                  </h3>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={f.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    Read Saved Article →
                  </a>
                  <button
                    onClick={() => dispatch(removeFavorite(f.link))}
                    className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
