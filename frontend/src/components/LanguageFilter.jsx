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
    <div className="p-3 sm:p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition">
      <h3 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Language
      </h3>

      <div className="flex flex-col gap-2">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => dispatch(setLanguage(l.code))}
            className={`
              text-left px-3 py-2 rounded-md text-sm transition
              ${
                selected === l.code
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
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
