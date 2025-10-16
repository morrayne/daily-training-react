import { useState, useEffect, StrictMode, Fragment } from "react";
import { createRoot } from "react-dom/client";
import type { DefType } from "./helper/types.ts";
import emptyGif from './assets/evernight.gif';

// COMPONENTS VARS AND FUNCTIONS
import Group from "./components/Group.tsx";
import Menu from "./components/Menu.tsx";
import { getColorByDays, getToday, sortGroups, updateDaysSinceLastTime, useTheme, updateDaysForSavedGroups, filterGroups } from "./helper/function.ts";

function App() {
  // INIT
  const [sortType, setSortType] = useState<string>('name');
  const [filterMinDays, setFilterMinDays] = useState<number>(0);
  const [allGroups, setAllGroups] = useState<DefType[]>(() => {
    const savedGroups = localStorage.getItem('training-groups');
    if (savedGroups) {
      return JSON.parse(savedGroups);
    }
    return [];
  });
  const [displayedGroups, setDisplayedGroups] = useState<DefType[]>([]);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => { bootstrap() }, []);
  useEffect(() => { localStorage.setItem('training-groups', JSON.stringify(allGroups))}, [allGroups]);
  useEffect(() => { updateDisplayedGroups() }, [allGroups, sortType, filterMinDays]);

  // UPDATE DISPLAYED GROUPS BASED ON FILTERS AND SORT
  function updateDisplayedGroups() {
    const updatedGroups = allGroups.length > 0 ? updateDaysForSavedGroups(allGroups) : updateDaysSinceLastTime();
    const filteredGroups = filterGroups([...updatedGroups], filterMinDays);
    const sortedGroups = sortGroups([...filteredGroups], sortType);
    const coloredGroups = sortedGroups.map((item) => ({...item, color: getColorByDays(item.daysSinceLastTime)}));
    setDisplayedGroups(coloredGroups);
  }

  // BOOTSTRAP
  function bootstrap() {
    let updatedAllGroups;
    if (allGroups.length > 0) {
      updatedAllGroups = updateDaysForSavedGroups(allGroups);
    } else {
      updatedAllGroups = updateDaysSinceLastTime();
    }
    setAllGroups(updatedAllGroups);
  }

  // CHANGING LAST TRAIN DATE
  function handleClick(clickedItem: DefType) {
    const updatedAllGroups = allGroups.map(item => 
      item.name === clickedItem.name 
        ? { ...item, daysSinceLastTime: 0, date: getToday(), color: getColorByDays(0)} 
        : item
    );
    setAllGroups(updatedAllGroups);
  }

  // SORT
  function handleSortChange(sortField: string) {
    setSortType(sortField);
  }

  // FILTER
  function handleFilterChange(minDays: number) {
    setFilterMinDays(minDays);
  }

  // THEME
  function handleThemeChange(newTheme: 'light' | 'dark') {
    if (theme !== newTheme) {
      toggleTheme();
    }
  }

  return (
    <Fragment>
      <div className={displayedGroups.length == 0 ? 'centered wrapper' : 'wrapper'}>
        {displayedGroups.length > 0 ? (
          displayedGroups.map((item) => (
            <Group onClick={() => handleClick(item)} key={item.name} data={item} />
          ))
        ) : (
          <div className="empty-state">
            <img src={emptyGif} alt="No gif found" />
            <p>Try adjusting your filter settings</p>
          </div>
        )}
      </div>
      <Menu onSortChange={handleSortChange} onFilterChange={handleFilterChange} onThemeChange={handleThemeChange} theme={theme} />
    </Fragment>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
