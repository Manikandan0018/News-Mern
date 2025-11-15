import React from "react";
import CategoryFilter from "../components/CategoryFilter";
import LanguageFilter from "../components/LanguageFilter";
import NewsFeed from "../components/NewsFeed";

export default function Home() {
  return (
    <div
      className="
        flex 
        bg-gray-50 dark:bg-gray-950 
        min-h-[calc(100vh-68px)]
        transition-colors duration-300
      "
    >
      {/* Sidebar for Languages */}
      <aside
        className="
          hidden lg:block w-64 
          border-r border-gray-200 dark:border-gray-800
          bg-white dark:bg-gray-900
          sticky top-16 h-screen
          transition-colors duration-300
        "
      >
        <LanguageFilter />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* TOP Category filter */}
        <CategoryFilter />

        <div className="p-6">
          <h2
            className="
              text-2xl font-extrabold 
              text-gray-900 dark:text-gray-100 
              mb-6 transition-colors
            "
          >
            Top Headlines
          </h2>

          <NewsFeed />
        </div>
      </main>
    </div>
  );
}
