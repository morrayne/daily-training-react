interface OptionsProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

export default function Options({ theme, onThemeChange }: OptionsProps) {
  return (
    <div className="settings">
      <p className="sortName">Settings</p>
      <button onClick={() => onThemeChange('light')} className={theme === 'light' ? 'active' : ''}>
        Light
      </button>
      <button onClick={() => onThemeChange('dark')} className={theme === 'dark' ? 'active' : ''}>
        Dark
      </button>
    </div>
  );
}