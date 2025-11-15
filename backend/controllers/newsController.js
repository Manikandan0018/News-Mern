import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.NEWSDATA_API_KEY;
const BASE_URL = "https://newsdata.io/api/1/latest";

export async function getNews(req, res) {
  try {
    const { category, language = "en", q = "", nextPage = "" } = req.query;

    const url = new URL(BASE_URL);
    url.searchParams.append("apikey", API_KEY);

    if (category) url.searchParams.append("category", category);
    if (language) url.searchParams.append("language", language);
    if (q) url.searchParams.append("q", q);

    if (nextPage) {
      url.searchParams.append("page", nextPage);
    }

    const response = await fetch(url.toString());
    const data = await response.json();

    return res.json({
      results: data.results || [],
      nextPage: data.nextPage || null,
    });
  } catch (err) {
    console.error("BACKEND ERROR:", err);
    res.status(500).json({ error: "Backend failed" });
  }
}
