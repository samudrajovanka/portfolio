import { useTheme } from 'next-themes';

import MoonIcon from '@icons/ic_moon.svg';
import SunIcon from '@icons/ic_sun.svg';

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  };

  return (
    <button
      type="button"
      id="darkmode-button"
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label="darkmode switch"
      onClick={changeTheme}
    >
      <MoonIcon className="icon" id="icon-moon" aria-label="moon icon" />
      <SunIcon className="icon" id="icon-sun" aria-label="sun icon" />
    </button>
  );
}
