"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, Search, X, Check } from "lucide-react";
import { allCourseCategories } from "@/lib/allCourses";

interface CourseSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

// Flatten all courses with their group label
const allOptions = [
  ...allCourseCategories.flatMap((cat) =>
    cat.subcategories.flatMap((sub) =>
      sub.courses.map((c) => ({
        value: c.name,
        label: c.name,
        group: `${cat.label} › ${sub.name}`,
        badge: c.badge,
      }))
    )
  ),
  {
    value: "Not sure yet — need counseling",
    label: "Not sure yet — need counseling",
    group: "General",
    badge: undefined,
  },
];

export default function CourseSelect({
  value,
  onChange,
  error,
  placeholder = "Select a course...",
}: CourseSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Focus search when opened
  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  const filtered = search.trim()
    ? allOptions.filter((o) =>
        o.label.toLowerCase().includes(search.toLowerCase())
      )
    : allOptions;

  // Group filtered results
  const grouped = filtered.reduce<Record<string, typeof filtered>>(
    (acc, item) => {
      if (!acc[item.group]) acc[item.group] = [];
      acc[item.group].push(item);
      return acc;
    },
    {}
  );

  const selectedLabel = allOptions.find((o) => o.value === value)?.label;

  const handleSelect = useCallback(
    (val: string) => {
      onChange(val);
      setOpen(false);
      setSearch("");
    },
    [onChange]
  );

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    setSearch("");
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all duration-150 bg-white text-left ${
          error
            ? "border-red-400 focus:ring-red-400"
            : open
            ? "border-blue-500 ring-2 ring-blue-500/20"
            : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <span className={selectedLabel ? "text-gray-800 font-medium" : "text-gray-400"}>
          {selectedLabel ?? placeholder}
        </span>
        <span className="flex items-center gap-1 shrink-0 ml-2">
          {value && (
            <span
              role="button"
              onClick={handleClear}
              className="text-gray-400 hover:text-gray-600 p-0.5 rounded"
            >
              <X className="w-3.5 h-3.5" />
            </span>
          )}
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
          {/* Search */}
          <div className="px-3 pt-3 pb-2 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
                className="w-full pl-8 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            {search && (
              <p className="text-[11px] text-gray-400 mt-1.5 pl-1">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Options list — shows ~10 items, then scrolls */}
          <div className="overflow-y-auto max-h-[260px] py-1.5">
            {Object.keys(grouped).length === 0 ? (
              <p className="text-center text-gray-400 text-sm py-6">
                No courses found
              </p>
            ) : (
              Object.entries(grouped).map(([group, items]) => (
                <div key={group}>
                  <div className="px-4 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 sticky top-0">
                    {group}
                  </div>
                  {items.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => handleSelect(item.value)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                        value === item.value
                          ? "bg-blue-50 text-blue-700 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                        {item.badge && (
                          <span className="px-1.5 py-0.5 bg-blue-100 text-blue-600 text-[9px] font-bold rounded-full leading-none">
                            {item.badge}
                          </span>
                        )}
                      </span>
                      {value === item.value && (
                        <Check className="w-4 h-4 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
