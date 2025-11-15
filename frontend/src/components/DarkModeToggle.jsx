import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="
        px-3 py-2 rounded-full font-semibold text-sm
        bg-gray-200 dark:bg-gray-700
        text-gray-800 dark:text-gray-200
        hover:bg-gray-300 dark:hover:bg-gray-600
        transition
        shadow-sm
      "
      aria-label="Toggle dark mode"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
