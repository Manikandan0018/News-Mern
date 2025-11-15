import React from "react";
import CategoryFilter from "../components/CategoryFilter";
import LanguageFilter from "../components/LanguageFilter";
import NewsFeed from "../components/NewsFeed";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-68px)] bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        <CategoryFilter />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 py-6">
          <main>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
              Top Headlines
            </h2>
            <NewsFeed />
          </main>

          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <LanguageFilter />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
