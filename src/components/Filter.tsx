import { useState } from "react";
interface FilterProps {
  onFilterChange: (minDays: number) => void;
}
export default function Filter({ onFilterChange }: FilterProps) {
  const [minDays, setMinDays] = useState<number>(0);
  function handleIncrement() {
    const newValue = minDays + 1;
    setMinDays(newValue);
    onFilterChange(newValue);
  }
  function handleDecrement() {
    const newValue = Math.max(0, minDays - 1);
    setMinDays(newValue);
    onFilterChange(newValue);
  }

  return (
    <div className="filter">
      <p className="sortName">Filter By</p>
      <div className="custom">
        <button onClick={handleDecrement}>-</button>
        <p>At least: {minDays} day(s) without</p>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}