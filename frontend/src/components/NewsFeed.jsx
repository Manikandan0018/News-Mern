import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchNews } from "../api/newsApi";
import { useSelector } from "react-redux";
import NewsCard from "./NewsCard";

// 🔥 Modern Skeleton with Dark Mode (Google News style)
const NewsCardSkeleton = () => (
  <div
    className="
      flex h-56 md:flex-row 
      border border-gray-200 dark:border-gray-700
      bg-white dark:bg-gray-900
      rounded-xl shadow animate-pulse transition-colors
    "
  >
    <div className="p-4 flex flex-col justify-between flex-1">
      <div className="mb-3">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-10/12"></div>
      </div>
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-32"></div>
    </div>

    <div className="w-56 h-full bg-gray-300 dark:bg-gray-800 rounded-r-xl"></div>
  </div>
);

export default function NewsFeed() {
  const prefs = useSelector((s) => s.preferences);

  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

const loadNews = async () => {
  if (loading) return;
  setLoading(true);

  try {
    const data = await fetchNews({
      category: prefs.category,
      language: prefs.language,
      q: prefs.query,
      nextPage,
    });

    if (!Array.isArray(data.results)) {
      console.error("API Error:", data);
      setNews([]);
      setNextPage(null);
      setLoading(false);
      setInitialLoading(false);
      return;
    }

    setNews((prev) =>
      nextPage === null ? data.results : [...prev, ...data.results]
    );

    setNextPage(data.nextPage);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }

  setLoading(false);
  setInitialLoading(false);
};


  useEffect(() => {
    setNews([]);
    setNextPage(null);
    setInitialLoading(true);

    const timer = setTimeout(() => {
      loadNews();
    }, 300);

    return () => clearTimeout(timer);
  }, [prefs.category, prefs.language, prefs.query]);

  // First load skeleton
  if (initialLoading) {
    return (
      <div className="grid grid-cols-1 gap-6">
        <NewsCardSkeleton />
        <NewsCardSkeleton />
        <NewsCardSkeleton />
      </div>
    );
  }

  // No results found
  if (news.length === 0 && !loading) {
    return (
      <div className="text-center p-10 text-gray-600 dark:text-gray-300">
        <p className="text-lg font-medium">No news found.</p>
        <p className="text-sm mt-2 opacity-80">
          Try changing filters or search keywords.
        </p>
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={news.length}
      next={loadNews}
      hasMore={nextPage !== null}
      loader={
        <p className="text-center p-4 text-blue-600 dark:text-blue-400 font-semibold">
          Loading more news...
        </p>
      }
      endMessage={
        <p className="text-center p-4 text-gray-600 dark:text-gray-400">
          <b>You have reached the end.</b>
        </p>
      }
    >
      {/* Main Feed */}
      <div className="grid grid-cols-1 gap-6">
        {news.map((item, i) => (
          <NewsCard key={i} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
