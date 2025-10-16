import type { DefType, sortButtonType } from "./types";
export const initialArray: DefType[] = [
  { name: "Biceps", daysSinceLastTime: 0, date: "12.10.2025", color: "" },
  { name: "Triceps", daysSinceLastTime: 0, date: "16.10.2025", color: "" },
  { name: "Chest", daysSinceLastTime: 0, date: "16.10.2025", color: "" },
  { name: "Shoulders", daysSinceLastTime: 0, date: "15.10.2025", color: "" },
  { name: "Back", daysSinceLastTime: 0, date: "11.10.2025", color: "" },
  { name: "Traps", daysSinceLastTime: 0, date: "10.10.2025", color: "" },
  { name: "Quads", daysSinceLastTime: 0, date: "09.10.2025", color: "" },
  { name: "Hamstrings", daysSinceLastTime: 0, date: "09.10.2025", color: "" },
  { name: "Calves", daysSinceLastTime: 0, date: "09.10.2025", color: "" },
  { name: "Glutes", daysSinceLastTime: 0, date: "09.10.2025", color: "" },
  { name: "Abs", daysSinceLastTime: 0, date: "07.10.2025", color: "" },
  { name: "Forearms", daysSinceLastTime: 0, date: "15.10.2025", color: "" },
  { name: "Lats", daysSinceLastTime: 0, date: "12.10.2025", color: "" },
  { name: "Obliques", daysSinceLastTime: 0, date: "14.10.2025", color: "" },
  { name: "Neck", daysSinceLastTime: 0, date: "13.10.2025", color: "" },
  { name: "Adductors", daysSinceLastTime: 0, date: "07.10.2025", color: "" },
  { name: "Abductors", daysSinceLastTime: 0, date: "07.10.2025", color: "" },
  { name: "Serratus", daysSinceLastTime: 0, date: "17.10.2025", color: "" },
  { name: "Rhomboids", daysSinceLastTime: 0, date: "11.10.2025", color: "" },
  { name: "Erector Spinae", daysSinceLastTime: 0, date: "10.10.2025", color: "" },
  { name: "Pec Minor", daysSinceLastTime: 0, date: "16.10.2025", color: "" },
  { name: "Brachialis", daysSinceLastTime: 0, date: "12.10.2025", color: "" },
  { name: "Supinators", daysSinceLastTime: 0, date: "15.10.2025", color: "" },
  { name: "Pronators", daysSinceLastTime: 0, date: "15.10.2025", color: "" },
];

export const sortBy: sortButtonType[] = [
  { sortField: 'name', name: 'Name'}, 
  { sortField: 'daysSinceLastTime', name: 'Days since last time'}, 
];