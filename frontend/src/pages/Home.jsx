import React from "react";
import CategoryFilter from "../components/CategoryFilter";
import NewsFeed from "../components/NewsFeed";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-68px)] bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        {/* 1. Category Filter (Primary Filter - Always Visible) */}
        <CategoryFilter />

        {/* 2. Language Filter (Secondary Filter - Always Visible) */}
        {/* We place it here outside the main grid for full visibility */}
        

        {/* MAIN CONTENT AREA */}
        <div className="py-6">
          <main>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
              Top Headlines
            </h2>

            <NewsFeed />
          </main>
        </div>
      </div>
    </div>
  );
}
