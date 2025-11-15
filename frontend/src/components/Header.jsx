import { GlobeAltIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../store/preferencesSlice";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import LanguageFilter from "./LanguageFilter";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header
      className="
        sticky top-0 z-20
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        shadow-md
      "
    >
      <div className="flex items-center justify-between p-3 sm:p-4 gap-3">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400"
        >
          MyNews Hub
        </Link>

        {/* Desktop Search */}
        <div className="hidden sm:block flex-1 max-w-xl mx-4">
          <input
            onChange={(e) => dispatch(setQuery(e.target.value))}
            className="
              w-full px-4 py-2 rounded-full
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-800
              text-gray-900 dark:text-gray-100
            "
            placeholder="Search news..."
          />
        </div>

        {/* Desktop Language Filter */}
        <div className="hidden md:block min-w-[150px]">
          <LanguageFilter />
        </div>

        {/* Favorites (Desktop Only) */}
        <Link
          to="/favorites"
          className="hidden sm:block text-gray-600 dark:text-gray-300 hover:text-red-500"
        >
          ★ Favorites
        </Link>

        {/* Dark Mode */}
        <DarkModeToggle />
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-3 pb-3">
        <input
          onChange={(e) => dispatch(setQuery(e.target.value))}
          className="
            w-full px-3 py-2 rounded-full
            border border-gray-300 dark:border-gray-700
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
          "
          placeholder="Search news..."
        />
      </div>

      {/* Mobile Language Filter */}
      <div className="block md:hidden px-3 pb-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Language
          </span>
          <GlobeAltIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </div>

        <div className="mt-2">
          <LanguageFilter />
        </div>
      </div>
    </header>
  );
}
