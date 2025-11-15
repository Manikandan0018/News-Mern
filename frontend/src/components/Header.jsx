import React from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../store/preferencesSlice";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header
      className="
        sticky top-0 z-30 p-3 sm:p-4
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        shadow-sm flex flex-wrap items-center gap-3
        justify-between
      "
    >
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400"
        >
          MyNews Hub
        </Link>
      </div>

      <div className="flex-1 min-w-0 mx-0 sm:mx-6 w-full sm:w-auto">
        <input
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Search topics, sources, locations..."
          className="
            w-full px-4 py-2 rounded-full
            border border-gray-300 dark:border-gray-700
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            placeholder-gray-500 dark:placeholder-gray-400
            focus:ring-2 focus:ring-blue-500 outline-none
            transition
          "
        />
      </div>

      <div className="flex items-center gap-2">
        <Link
          to="/favorites"
          className="hidden sm:inline-block text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 px-3 py-2 rounded-md transition"
          aria-label="Favorites"
        >
          ★ Favorites
        </Link>

        <DarkModeToggle />
      </div>
    </header>
  );
}
