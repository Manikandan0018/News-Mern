import axios from "axios";

const API_BASE = import.meta.env.PROD
  ? "https://news-rpek.onrender.com/api/news" // Production backend
  : "/api/news"; // Local dev (Vite proxy)

export const fetchNews = async (params) => {
  const cleanParams = { ...params };

  // ❗ Remove category if it's "all"
  if (cleanParams.category === "all") {
    delete cleanParams.category;
  }

  // ❗ Remove empty query (prevents API errors)
  if (!cleanParams.q || cleanParams.q.trim() === "") {
    delete cleanParams.q;
  }

  const res = await axios.get(API_BASE, { params: cleanParams });
  return res.data;
};
