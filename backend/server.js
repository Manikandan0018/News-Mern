import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import newsRoutes from "./routes/newsRoutes.js";

dotenv.config();

const app = express();


app.use(
  cors({
    origin: process.env.FRONTEND_URL, 
    methods: ["GET"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/news", newsRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
