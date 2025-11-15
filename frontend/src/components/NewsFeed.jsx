import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchNews } from "../api/newsApi";
import { useSelector } from "react-redux";
import NewsCard from "./NewsCard";

const NewsCardSkeleton = () => (
  <div
    className="
      flex flex-col md:flex-row h-56
      border border-gray-200 dark:border-gray-700
      bg-white dark:bg-gray-900 rounded-xl shadow animate-pulse
      overflow-hidden
    "
  >
    <div className="p-4 flex-1">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
    </div>
    <div className="w-full md:w-56 bg-gray-300 dark:bg-gray-800" />
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

      if (!data || !Array.isArray(data.results)) {
        console.error("API returned unexpected:", data);
        setNews([]);
        setNextPage(null);
        setLoading(false);
        setInitialLoading(false);
        return;
      }

      setNews((prev) =>
        nextPage === null ? data.results : [...prev, ...data.results]
      );
      setNextPage(data.nextPage || null);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    }

    setLoading(false);
    setInitialLoading(false);
  };

  useEffect(() => {
    setNews([]);
    setNextPage(null);
    setInitialLoading(true);
    const t = setTimeout(() => loadNews(), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefs.category, prefs.language, prefs.query]);

  if (initialLoading) {
    return (
      <div className="space-y-4">
        <NewsCardSkeleton />
        <NewsCardSkeleton />
        <NewsCardSkeleton />
      </div>
    );
  }

  if (news.length === 0 && !loading) {
    return (
      <div className="text-center py-12 text-gray-600 dark:text-gray-300">
        <p className="text-lg font-medium">No news found</p>
        <p className="text-sm mt-2">Try changing filters or search keywords.</p>
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={news.length}
      next={loadNews}
      hasMore={nextPage !== null}
      loader={
        <p className="text-center py-4 text-blue-600 dark:text-blue-400">
          Loading more news...
        </p>
      }
      endMessage={
        <p className="text-center py-4 text-gray-600 dark:text-gray-400">
          You have reached the end.
        </p>
      }
    >
      <div className="space-y-4">
        {news.map((item, i) => (
          <NewsCard key={i} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
