// COLOR MANAGEMENT
export function getColorByDays(days: number): string {
  if (days == 0) return "#811cdfff";
  if (days <= 2) return "#4CAF50ff";
  if (days <= 5) return "#ffd967ff";
  if (days <= 8) return "#d15f14ff";
  return "#f44336ff";
}

// TIME OPERATIONS
export function parseDate(dateString: string): Date {
  const [day, month, year] = dateString.split(".").map(Number);
  return new Date(year, month - 1, day);
}
export function getDaysDifference(date1: Date, date2: Date): number {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
export function getToday(): string {
  const today = new Date();
  return today.toLocaleDateString("ru-RU");
}

// FILTER GROUPS
export function filterGroups(groupsToFilter: DefType[], minDays: number): DefType[] {
  return groupsToFilter.filter((item) => item.daysSinceLastTime >= minDays);
}

// COMPARE AND UPDATE DATES FOR ALL
import { initialArray } from "../helper/vars.ts";
export function updateDaysSinceLastTime(): DefType[] {
  const today = getToday();
  const todayDate = parseDate(today);
  return initialArray.map((item) => {
    const lastTrainingDate = parseDate(item.date);
    const daysDifference = getDaysDifference(todayDate, lastTrainingDate);
    return { ...item, daysSinceLastTime: daysDifference };
  });
}

// SORT
import type { DefType } from "./types";
export function sortGroups(groups: DefType[], sortField: string): DefType[] {
  switch (sortField) {
    case "name":
      return [...groups].sort((a, b) => a.name.localeCompare(b.name));
    case "date":
      return [...groups].sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    case "daysSinceLastTime":
    default:
      return [...groups].sort(
        (a, b) => b.daysSinceLastTime - a.daysSinceLastTime
      );
  }
}

// THEME
import { useState, useEffect } from "react";
export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) return savedTheme;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return { theme, toggleTheme };
}

// LOCAL STORAGE SAVES
export function updateDaysForSavedGroups(savedGroups: DefType[]): DefType[] {
  const today = getToday();
  const todayDate = new Date(today.split(".").reverse().join("-"));

  return savedGroups.map((item) => {
    const lastTrainingDate = new Date(item.date.split(".").reverse().join("-"));
    const diffTime = Math.abs(todayDate.getTime() - lastTrainingDate.getTime());
    const daysDifference = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return { ...item, daysSinceLastTime: daysDifference };
  });
}
