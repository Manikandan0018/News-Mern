import axios from "axios";

export const fetchNews = async (params) => {
  const res = await axios.get("/api/news", { params });
  return res.data;
};
