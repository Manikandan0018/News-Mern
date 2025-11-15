import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/preferencesSlice";

const categories = [
  "all",
  "technology",
  "business",
  "sports",
  "health",
  "science",
  "entertainment",
  "world",
  "politics",
  "finance",
];

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const selected = useSelector((s) => s.preferences.category);

  return (
    <div
      className="
        p-3 sm:p-4
        border-b border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-900
        transition-colors
      "
    >
      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Explore Topics
      </h2>

      <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar snap-x snap-mandatory">
        {categories.map((c) => {
          const isSelected = selected === c;
          return (
            <button
              key={c}
              onClick={() => dispatch(setCategory(c))}
              className={`
                flex-shrink-0 snap-start px-3.5 py-2 rounded-full text-sm font-medium
                transition-all duration-150
                ${
                  isSelected
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              {c === "all" ? "All" : c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
