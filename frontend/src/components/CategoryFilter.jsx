import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/preferencesSlice";

const categories = [
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
      p-4 
      border-b border-gray-200 dark:border-gray-800 
      bg-white dark:bg-gray-900 
      transition-colors duration-300
    "
    >
      <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
        Explore Topics
      </h2>

      <div className="flex overflow-x-scroll no-scrollbar space-x-3 pb-2">
        {categories.map((c) => {
          const isSelected = selected === c;

          return (
            <button
              key={c}
              onClick={() => dispatch(setCategory(c))}
              className={`
                flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full
                transition-all duration-200 shadow-sm
                ${
                  isSelected
                    ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-white shadow-md"
                    : `
                      bg-gray-100 text-gray-700 
                      dark:bg-gray-800 dark:text-gray-300 
                      hover:bg-gray-200 dark:hover:bg-gray-700
                    `
                }
              `}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
