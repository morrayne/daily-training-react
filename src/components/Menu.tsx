import { sortBy } from "../helper/vars";
import Sort from "./Sort";
import Filter from "./Filter";
import Settings from "./Settings";

interface MenuProps {
  onSortChange: (sortField: string) => void;
  onFilterChange: (minDays: number) => void;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

export default function Menu({ onSortChange, onFilterChange, theme, onThemeChange }: MenuProps) {
  return (
    <div className="menu">
      <h1>My App now with React</h1>
      <Sort sortBy={sortBy} onSortChange={onSortChange} />
      <Filter onFilterChange={onFilterChange} />
      <Settings theme={theme} onThemeChange={onThemeChange} />
    </div>  
  );
}