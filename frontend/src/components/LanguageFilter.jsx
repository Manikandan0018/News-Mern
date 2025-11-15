import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/preferencesSlice";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
];

export default function LanguageFilter() {
  const dispatch = useDispatch();
  const selected = useSelector((s) => s.preferences.language);

  return (
    <div className="p-4 mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition">
      <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
        Language
      </h2>

      <div className="flex flex-col gap-2">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => dispatch(setLanguage(l.code))}
            className={`
              text-left px-3 py-2 rounded-lg transition-all duration-150
              ${
                selected === l.code
                  ? "bg-blue-600 text-white font-semibold shadow-md dark:bg-blue-500"
                  : "text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              }
            `}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
