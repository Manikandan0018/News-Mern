import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/preferencesSlice";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
];

export default function LanguageDropdown() {
  const dispatch = useDispatch();
  const selected = useSelector((s) => s.preferences.language);
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div className="relative inline-block">
      {/* BUTTON */}
      <button
        onClick={toggle}
        className="
          flex items-center gap-2 
          px-3 py-2 rounded-lg 
          bg-gray-100 dark:bg-gray-800 
          text-gray-800 dark:text-gray-200 
          hover:bg-gray-200 dark:hover:bg-gray-700
          transition shadow-sm 
        "
      >
        🌐 {languages.find((l) => l.code === selected)?.label}
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 w-40 
            bg-white dark:bg-gray-900 
            border border-gray-200 dark:border-gray-700 
            rounded-xl shadow-lg overflow-hidden
            animate-fadeSlide
            z-30 left-1
          "
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                dispatch(setLanguage(l.code));
                setOpen(false);
              }}
              className={`
                w-full px-4 py-2 text-left text-sm 
                transition 
                ${
                  selected === l.code
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200"
                }
              `}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
