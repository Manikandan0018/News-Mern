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
        sticky top-0 z-10 p-4
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        shadow-md flex justify-between items-center gap-4
        transition duration-300
      "
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400"
      >
        MyNews Hub
      </Link>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-6">
        <input
          className="
            w-full px-4 py-2 rounded-full
            border border-gray-300 dark:border-gray-700
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            placeholder-gray-500 dark:placeholder-gray-400
            focus:ring-2 focus:ring-blue-500
            transition duration-200
          "
          placeholder="Search for topics, sources, or locations..."
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
      </div>

      {/* Favorites Link */}
      <Link
        to="/favorites"
        className="
          text-gray-600 dark:text-gray-300
          hover:text-red-500 dark:hover:text-red-400
          font-semibold px-3 py-2 transition duration-150
        "
      >
        ★ Favorites
      </Link>

      {/* 🌙 NEW Dark Mode Toggle */}
      <DarkModeToggle />
    </header>
  );
}
