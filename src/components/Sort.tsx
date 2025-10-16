import { useState } from "react";
import type { sortButtonType } from "../helper/types";

interface SortProps {
  sortBy: sortButtonType[];
  onSortChange: (sortField: string) => void;
}

export default function Sort({ sortBy, onSortChange }: SortProps) {
  const [activeSort, setActiveSort] = useState<string>(sortBy[0]?.sortField || '');

  function handleClick(sortField: string) {
    setActiveSort(sortField);
    onSortChange(sortField);
  }

  return (
    <div className="sort">
      <p className="sortName">Sort By</p>
      {sortBy.map((item) => (
        <button className={activeSort === item.sortField ? 'active' : ''} onClick={() => handleClick(item.sortField)} key={item.name}>
          {item.name}
        </button>
      ))}
    </div>
  );
}