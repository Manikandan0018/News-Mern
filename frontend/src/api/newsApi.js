import axios from "axios";

const API_BASE = import.meta.env.PROD
  ? "https://news-rpek.onrender.com/api/news" // backend URL on Render
  : "/api/news"; 

export const fetchNews = async (params) => {
  const res = await axios.get(API_BASE, { params });
  return res.data;
};
